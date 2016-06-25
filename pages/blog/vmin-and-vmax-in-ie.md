---
title: Using vmin and vmax in ie
date: September 9th 2015
category: Javascript
layout: blog

---

As you probably know if you like using CSS viewport units, the support for them isn't fantastic.

- `vmax` Isn't supported in any version of ie or edge.
- `vmin` Isn't supported in ie9

<br>

## The CSS Viewport Units

- `vw`: 1/100th viewport width
- `vh`: 1/100th viewport height
- `vmin`: 1/100th of the smallest side
- `vmax`: 1/100th of the largest side

Note: IE9 uses `vm` instead of `vmin`. It does not support `vmax`.

<br>

## The CSS Viewport Units in Javascript

- `var vw   = window.innerWidth / 100`
- `var vh   = window.innerHeight / 100`
- `var vmin = Math.min(vw, vh)`
- `var vmax = Math.max(vw, vh)`

<br>

### Setting your `html` font-size to a viewport unit and using em values everywhere, results in ridiculously responsive web pages

<br>
in *CSS:*


```css
/* Can't set the rem value to a viewpoint unit */

.mySelector { 
  font-size: calc( 2vmin + 1.4vmax + 2vh ); 
}
```

<br>

The same thing in javascript.

```js
// but with javascript you can!

function setSize() {
  var vw   = window.innerWidth / 100
  var vh   = window.innerHeight / 100
  var vmin = Math.min(vw, vh)
  var vmax = Math.max(vw, vh)
  document.documentElement.style.fontSize =  (( vmin * 2 ) + ( vmax * 1.4 ) + ( vh * 2 ))  + "px";
}

window.addEventListener("resize", setSize);
document.addEventListener("DOMContentLoaded", setSize);
```
