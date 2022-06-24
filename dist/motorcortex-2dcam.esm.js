import { Effect } from '@donkeyclip/motorcortex';

function getMatrix2D(element) {
  const win = window;
  const transform = win.getComputedStyle(element).transform;

  if (transform === "" || transform === "none") {
    return {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      skewX: "0deg",
      skewY: "0deg",
      translateX: "0px",
      translateY: "0px"
    };
  }

  const values = transform.split("(")[1].split(")")[0].split(",");

  const qrDecompone = function qrDecompone(a) {
    const angle = Math.atan2(a[1], a[0]),
          denom = Math.pow(a[0], 2) + Math.pow(a[1], 2),
          denom2 = Math.pow(a[2], 2) + Math.pow(a[3], 2),
          scaleX = Math.sqrt(denom),
          scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
          skewX = Math.atan2(a[0] * a[2] + a[1] * a[3], denom),
          skewY = Math.atan2(a[1] * a[3] + a[0] * a[2], denom2);
    return {
      rotate: angle / (Math.PI / 180) + "deg",
      // this is rotation angle in degrees
      scaleX: scaleX,
      // scaleX factor
      scaleY: scaleY,
      // scaleY factor
      skewX: (denom === 1 ? skewX / (Math.PI / 180) : 0) + "deg",
      // skewX angle degrees
      skewY: (denom2 === 1 ? skewY / (Math.PI / 180) : 0) + "deg",
      // skewY angle degrees
      translateX: a[4] + "px",
      // translation point  x
      translateY: a[5] + "px" // translation point  y

    };
  };

  return qrDecompone(values);
}

class Adaptor {
  constructor(el) {
    this.el = el;
    this.matrix = this.getMatrix(el);
    this.viewportCenter = this.getViewPortCenter();
    this.idlePosition = this.getIdlePosition();
  }

  getMatrix(el) {
    return getMatrix2D(el);
  }

  getViewPortCenter() {
    const el = this.el;
    const parentNode = el.parentNode;
    const viewportDims = {
      width: parseFloat(getComputedStyle(parentNode, null).width.replace("px", "")),
      height: parseFloat(getComputedStyle(parentNode, null).height.replace("px", ""))
    };
    return {
      x: viewportDims.width / 2,
      y: viewportDims.height / 2
    };
  }
  /**
   * Returns the position of the element on its parent on its initial state,
   * with translateX and translateY = 0. We consider this position as the
   * idle position of the element on its parent.
   */


  getIdlePosition() {
    const el = this.el; // bounding rect: {top, right, bottom, left}

    const elBoundingRect = el.getBoundingClientRect();
    const parentBoundingRect = el.parentNode.getBoundingClientRect(); // the absolute position of our element on its parent

    return {
      x: elBoundingRect.left - parentBoundingRect.left,
      y: elBoundingRect.top - parentBoundingRect.top
    };
  }
  /**
   *
   * @param {HTMLElement} el
   * @returns {object} x, y, zoom, initialTransofrm{x,y}
   */


  calcXYZoom() {
    const matrix = this.matrix;
    const position = this.idlePosition;
    const viewportCenter = this.viewportCenter;
    const currentOneToOneCenter = {
      x: viewportCenter.x - position.x,
      y: viewportCenter.y - position.y
    }; // the current X,Y of our element

    const currentCenter = {
      x: currentOneToOneCenter.x / matrix.scaleX,
      y: currentOneToOneCenter.y / matrix.scaleY
    };
    return { ...currentCenter,
      zoom: matrix.scaleX
    };
  }
  /**
   * @param {object} params - {start{x,y,zoom}, target{x,y.zoom}}
   */


  createProgressFunction(params) {
    const start = this._xyzoomToTranslate(params.start);

    const target = this._xyzoomToTranslate(params.target); // first we need to calculate the angle and the distance that we are going to use for our calculations


    const theta = Math.atan(Math.abs(target.y - start.y) / Math.abs(target.x - start.x));
    const lineLength = Math.sqrt(Math.pow(target.y - start.y, 2) + Math.pow(target.x - start.x, 2)); // secondly we need to identify the multipliers that we are going to use to calculate for our x and y
    // depending on the relative position of our target compared to our start

    let _x = 1,
        _y = 1;
    if (target.x < start.x) _x = -1;
    if (target.y < start.y) _y = -1;
    return function progress(fraction) {
      const distanceOnLine = fraction * lineLength;
      return {
        translateX: _x * distanceOnLine * Math.cos(theta) + start.x,
        translateY: _y * distanceOnLine * Math.sin(theta) + start.y,
        scale: (target.scale - start.scale) * fraction + start.scale
      };
    };
  }

  _xyzoomToTranslate(vals) {
    // the target point from the top-left corner of the element, having applied the target zoom
    const targetCenter = {
      x: vals.zoom * vals.x,
      y: vals.zoom * vals.y
    };
    const move = {
      x: this.viewportCenter.x - targetCenter.x,
      y: this.viewportCenter.y - targetCenter.y
    };
    return {
      x: move.x - this.idlePosition.x,
      y: move.y - this.idlePosition.y,
      scale: vals.zoom
    };
  }
  /**
     * 
     * @param {object} data - {
            path,
            startPoint,
            finalPoint,
            pathLength,
            zoom,
            startFrom,
            endTo,
            transitionDuration,
            alongPathDuration
        }
     */


  createPathProgressFunction(data, initialValue) {
    let transitionProgress = progress => {};

    if (data.transitionDuration > 0) {
      transitionProgress = this.createProgressFunction({
        start: initialValue,
        target: {
          x: data.startPoint.x,
          y: data.startPoint.y,
          zoom: initialValue.zoom
        }
      });
    }

    const transitionFraction = data.transitionDuration / (data.transitionDuration + data.alongPathDuration);
    const alongPathFraction = data.alongPathDuration / (data.transitionDuration + data.alongPathDuration); // the actual length of the path to move on having taken out the startFrom and endTo parts

    const fractionPathLength = (data.endTo - data.startFrom) * data.pathLength;
    return progress => {
      if (data.transitionDuration > 0 && progress < transitionFraction) {
        return transitionProgress(progress / transitionFraction);
      } // the fraction from 0 to 1 of the second part calculated strictly out of the durations


      const secondPartProgress = (progress - transitionFraction) / alongPathFraction; // calculate the scale of the point

      const scale = (data.zoom - initialValue.zoom) * secondPartProgress + initialValue.zoom; // the distance that we expect to have covered on the full path

      const distanceFromZero = secondPartProgress * fractionPathLength + data.startFrom * data.pathLength;
      const point = data.path.getPointAtLength(distanceFromZero); // x, y -> that's where we want to be

      const res = this._xyzoomToTranslate({
        x: point.x,
        y: point.y,
        zoom: scale
      });

      return {
        translateX: res.x,
        translateY: res.y,
        scale: res.scale
      };
    };
  }

}

/**
 * Thus, here you'll find:
 * the following properties:
 * - this.element: provides a reference to the specific element of the MonoIncident
 * - this.attributeKey: the key of the animatedAttr of the MonoIncident
 * - this.targetValue: the final value of the animatedAttr
 * and the following methods:
 * - onGetContext
 * - getScratchValue
 * - onProgress
 * which are analysed more inline
 *
 **/

class MyEffect extends Effect {
  /**
   * the scratch value of the Incident should return back the triplette
   * x, y, zoom
   * We consider as the viewport the parent node of our element and we calculate
   * its initial position taking in consideration the relative position of our
   * element into its parent node. The initial zoom is calculated out of the
   * scaleX value of our element
   **/
  getScratchValue() {
    this.adaptor = new Adaptor(this.element);
    return this.adaptor.calcXYZoom();
  }

  onGetContext() {
    this.adaptor = new Adaptor(this.element);
    this.progressMethod = this.adaptor.createProgressFunction({
      start: this.initialValue,
      target: this.targetValue
    });
  }

  onProgress(m) {
    const vals = this.progressMethod(this.getFraction(m));
    this.element.style.transform = "translateX(".concat(vals.translateX, "px) translateY(").concat(vals.translateY, "px) scaleX(").concat(vals.scale, ") scaleY(").concat(vals.scale, ")");
  }

}

const xmlns = "http://www.w3.org/2000/svg";
/**
 * The attrs that this Incident expect are almost identical with its "brother's"
 * ZoomTo:
 * {
 *  animatedAttrs:{
 *      position: {
 *          path,
 *          zoom
 *      }
 *  },
 *  transition: 0,
 *  from: 0,
 *  to: 1
 * }
 *
 * path must be a valid svg path that will be put on the "d" attribute of the path element
 * that will be created out of it and which will be used as our guide for the
 * move.
 * A difference between this Incident and the simple ZoomTo Incident is that
 * ZoomTo optionally takes initial values, meaning that it will just move from
 * where the camera is to the target value. FocusAlongPath will start from the
 * first point of the provided path, no matter where the camera was. This might
 * introduce an anwanted jump effect.
 * The "transition" attribute, provided outside the animatedAttrs allows us to optionally
 * define a transition duration from the current point to the start of the path. This is
 * by default 0. Keep in mind that the duration of the transition will be substracted from
 * the move along path. For example if the user provides props.duration = 2000 and
 * attrs.transition = 100, then the move along the path will only last 1900 milliseconds
 * and the total duration of the Incident will still be 2000. Zoom remains tha same during
 * the transition and only starts animating when the movement enters the path.
 * The "from" and "to" attributes (also outside the animatedAttrs) allows the developer
 * to define if they want the movement to start from a specific portion (0 to 1) of the
 * path or to end on a specific portion of it (again 0 to 1). These two attributes are
 * optional too with default values from:0 and to:1.
 */

class FollowPath extends MyEffect {
  onInitialise() {
    const duration = this.props.duration;
    const path = document.createElementNS(xmlns, "path");
    path.setAttributeNS(null, "d", this.targetValue.path); // create a data repository that will hold useful info of our Incident

    this.data = {
      path,
      finalPoint: null,
      startPoint: null,
      zoom: this.targetValue.zoom,
      pathLength: path.getTotalLength(),
      startFrom: !this.attrs.from ? 0 : this.attrs.from,
      endTo: !this.attrs.to ? 1 : this.attrs.to,
      transitionDuration: !this.attrs.transition ? 0 : this.attrs.transition,

      get alongPathDuration() {
        return duration - this.transitionDuration;
      }

    };
    this.data.finalPoint = path.getPointAtLength(this.data.endTo * this.data.pathLength);
    this.data.startPoint = path.getPointAtLength(this.data.startFrom * this.data.pathLength); // then set the final values of the Incident in terms of x, y, zoom so the
    // following Incidents can use it

    this.targetValue.x = this.data.finalPoint.x;
    this.targetValue.y = this.data.finalPoint.y;
  }

  onGetContext() {
    this.adaptor = new Adaptor(this.element);
    this.data.zoom = this.targetValue.zoom;
    this.progressMethod = this.adaptor.createPathProgressFunction(this.data, this.initialValue);
  }

}

var name = "@donkeyclip/motorcortex-2dcam";
var version = "0.3.0";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: MyEffect,
    name: "ZoomTo",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          position: {
            type: "object",
            props: {
              x: {
                type: "number",
                optional: true,
                min: 0
              },
              y: {
                type: "number",
                optional: true,
                min: 0
              },
              zoom: {
                type: "number",
                optional: true,
                min: 0
              }
            }
          }
        }
      }
    }
  }, {
    exportable: FollowPath,
    name: "FollowPath",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          position: {
            type: "object",
            props: {
              path: {
                type: "string",
                optional: false
              },
              zoom: {
                type: "number",
                optional: true,
                min: 0
              }
            }
          }
        }
      },
      transition: {
        type: "number",
        integer: true,
        min: 0,
        optional: true
      },
      from: {
        type: "number",
        min: 0,
        max: 1,
        optional: true
      },
      to: {
        type: "number",
        min: 0,
        max: 1,
        optional: true
      }
    }
  }],
  compositeAttributes: {
    position: ["x", "y", "zoom", "path"]
  }
};

export { index as default };
