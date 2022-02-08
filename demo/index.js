import MotorCortex from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import MyPluginDefinition from "../dist/motorcortex-2dcam.esm";

const MyPlugin = MotorCortex.loadPlugin(MyPluginDefinition);

const rootClip = new MotorCortex.HTMLClip({
  html: `
    <div class="container">
      <div class="casi-container"></div>
    </div>`,
  css: `
    .container, .casi-container{
      width: 1920px;
      height: 1095px;
      background: black;
    }
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1920px",
    height: "1095px",
  },
});

const mypath = "M 500 250 L 960 547.6";
const clip = new MotorCortex.HTMLClip({
  html: `
    <div class="container">
      <div class="img">
        <img src="https://donkeyclip.github.io/motorcortex-slides/demo/assets/bg2.jpg" />
      </div>
    </div>`,
  css: `
    .container{
        width: 1920px;
        height: 1095px;
        background: black;
    }
    .img{
        width: 1920px;
        height: 1095px;
        transform-origin: top left;
    }
  `,
  selector: ".casi-container",
  containerParams: {
    width: "1920px",
    height: "1095px",
  },
});

rootClip.addIncident(clip, 0);

const zoomTo1 = new MyPlugin.ZoomTo(
  {
    animatedAttrs: {
      position: {
        x: 1075, 
        y: 678, 
        zoom: 1.2,
      },
    },
    initialValues:{
      position: {
        x: 1920/2, 
        y: 1095/2, 
        zoom: 1,
      },
    }
  },
  {
    selector: ".img",
    duration: 2000,
    easing: "easeOutSine",
  }
);

const zoomTo2 = new MyPlugin.ZoomTo(
  {
    animatedAttrs: {
      position: {
        x: 500, 
        y: 250, 
        zoom: 2,
      },
    },
  },
  {
    selector: ".img",
    duration: 4000,
    easing: "easeInOutSine",
  }
);


const pop1 = new MyPlugin.FollowPath(
  {
    animatedAttrs: {
      position: {
        path: mypath,
        zoom: 1,
      },
    },
  },
  {
    duration: 3000,
    selector: ".img",
    easing: "easeOutCubic",
  }
);

clip.addIncident(zoomTo1, 0);
clip.addIncident(zoomTo2, 2000);
clip.addIncident(pop1, 6000);

new Player({ clip: rootClip });
