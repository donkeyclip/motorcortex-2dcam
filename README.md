# MotorCortex-2dcam

**Table of Contents**

- [MotorCortex-2dcam](#motorcortex-2dcam)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [ZoomTo](#zoomto)
  - [FollowPath](#followpath)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-2dcam/demo/)

# Intro / Features

MotorCortex-2dcam acts exaclty as a 2d camera that can focus and zoom on
any given point of any element.
You can move your camera around, zoom and unzoom, follow paths, all
via its easy to use Incidents.

This Plugin exposes two Incidents:
- ZoomTo
- FollowPath

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-2dcam
# OR
$ yarn add @donkeyclip/motorcortex-2dcam
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import TDCAMDef from "@donkeyclip/motorcortex-2dcam";
const TDCAM = loadPlugin(TDCAMDef);
```

# Creating Incidents

## ZoomTo

Any element can be selected by ZoomTo Incident and the camera will zoom
on any of its points, on any duration and by any easing.
Our viewport is always considered the parent of our target element. The
virtual camera will zoom to the given point of our target and will bring it in the middle
of our viewport, in the middle of its parent element, zoomed as per attributes passed.

```javascript
const zoomto = new TDCAM.ZoomTo(
  {
    animatedAttrs: {
      position: {
        x: 1280, // pixel 1280
        y: 150, // pixel 150
        zoom: 1.2, // zoom level, from 0 to inf., 1:1 with scale
      },
    },
  },
  {
    selector: ".img",
    duration: 4000,
    easing: "easeInOutSine",
  }
);
```

#### IMPORTANT

The element that you want to zoom to (any element that you target via your selector) must have `transform-origin: top left`

### ZoomTo Attrs
The expected attributes of ZoomTo include the animatedAttrs. This should contain the animated attribute `position`.
Position is a composite attribute consisting of x, y and zoom, where x and y are the coordinates of our selected element we want to focus and zoom the zoom level we want to apply.
All, x, y and zoom are optional and if not provided will not be affected during animation.

## FollowPath

Instead of poviding the point we want to focus on and let the camera animate its position
to it, we can provide (svg) paths, in the form of path definition ([https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d]). 
For this instead of using ZoomTo and providing x, y and zoom to define the target position of the camera,
you can use FollowPath and just provide a path that you want your camera to follow and your final zoom
level.

```javascript
const fpath = new TDCAM.FollowPath(
  {
    animatedAttrs: {
      position: {
        path: "M 1280 150 L 1380 464",
        zoom: 1.2,
      },
    },
    from: 0.2,
    to: 0.9,
    transition: 1000,
  },
  {
    duration: 3000,
    selector: ".img",
    easing: "easeOutCubic",
  }
);
```
### FollowPath Attrs
As you can see in the example, on our animatedAttrs we again used the position attribute but this
time we passed instead of x and y the `path` which we want our camera to follow.

If you want your camera to move only on a part of a path you can use the `from` and `to` attributes
that define the fraction (0 to 1) that you want your start and end point to be. E.g. if you
provide the values `from: 0.2` and `to: 0.9` then the camera will start from the 20% of the path's overall length and
will animate all the way to the 90% of its length. Of course, both start and end are optional and have
default values 0 and 1 respectively.

As we are moving our camera along a path, at the 0 millisecond of our Incident our camera will be placed on
the very first point of the provided path. This can cause a "jump" effect as the camera will
move to point 0 without animation. In order to handle this the `transition` attribute
is provided. If provided, transition defines (in milliseconds) an optional transition time from the current
camera position to point 0 of our path, so we avoid the jump. If provided then the camera will linearly move from
the current camera position to the point 0 position in the given milliseconds. The total duration of the
Incident will not be affected as the movement on the actual path will be
less by "transition" milliseconds. "transition" of course is optional with default value = 0.

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes


# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
