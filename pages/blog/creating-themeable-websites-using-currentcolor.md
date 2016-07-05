---
title: Creating dynamically theme-able websites using CSS currentColor
category: CSS, Outfit
date: July 3rd 2016
---

## First of all, what is currentColor? 

CSS `currentColor` is exactly what is sounds like. 
It will take the elements' current computed `color` value and allow other properties to use it.

<pre>
<code>
  <span class="bold">CSS currentColor value</span> <span class="green">✔ 94.7%</span> [W3C Recommendation]
  IE <span class="red">✘ 5.5+</span> <span class="green">✔ 9+</span>
  Edge<span class="green"> ✔</span>
  Firefox <span class="green">✔</span>
  Chrome <span class="green">✔</span>
  Safari <span class="red">✘ 3.1+ </span><span class="green">✔ 4+</span>
  Opera <span class="red">✘ 9+ </span><span class="green">✔ 9.5-9.6+</span>
</code>
</pre>

<details>
  <summary> Known Issues </summary>
    <ul>
      <li>IE10+ & Edge have an issue with currentColor in a linear gradient </li>
      <li>Safari and iOS Safari 8 (maybe earlier too) have a bug with currentColor in :after/:before pseudo-content</li> 
    </ul>
</details>

<br>
<br>

## Using currentColor to create themeable content

If you set the color on the `html` or `body` elements you can pick and choose different elements to use the `currentColour` as one of their properties. If you then let people change that value, all of the elements using the `html`'s `currentColour` will update too.  

![do you know what i am saying](http://2.images.southparkstudios.com/blogs/southparkstudios.com/files/2014/05/1309-butters-knowWhatSayin.jpg?quality=0.8)

I'm not going to re-create the demo in this post, I'm just going to go over some of the techniques I've used creating it. 

Change the color being inlined on the `html` element below to see it in action.  

<iframe class="margin-b-7" height='550' scrolling='no' src='//codepen.io/Johnm__/embed/akwbVr/?height=550&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/Johnm__/pen/akwbVr/'>Creating a theme-able website with currentColor</a> by John Morris (<a href='http://codepen.io/Johnm__'>@Johnm__</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>


## 1. Basic usage

I'm going to create a div nested inside another div, set the parent's color to blue, and then set the child elements' background to `currentColor`. Just so we can see what happens.

```html
<div class="div-1">
  I'm blue
  <div class="div-2">
    da ba dee da ba die
  </div>
</div>
```

```css
.div-1 {
  color: blue;
  background-color: #f2f2f2;
}

.div-2 {
  background-color: currentColor;
}
```

<style>
  .example-1 .div-1 {
    color: blue;
    padding: 0.5em;
    background: #f2f2f2;
  }

  .example-1 .div-2 {
    background-color: currentColor;
  }
</style>

Aaaaand the result: 
<div class="example-1 padding-b-5">
  <div class="div-1">
    I'm blue
    <div class="div-2">
      da ba dee da ba die
    </div>
  </div>
</div>

Booyah.

Well, it's working, but it doesnt seem to be too useful. What's the point of setting the background color to the text color, you can't see anything... 

If we set the `color` of `div-2` to `white`, It'll have a blue background because of its parent, and the white text will make it legible again, right?

<style>
  .example-2 .div-1 {
    color: blue;
    padding: 0.5em;
    background: #f2f2f2;
  }

  .example-2 .div-2 {
    color: white;
    background-color: currentColor;
  }
</style>

<div class="example-2 padding-b-5">
  <div class="div-1">
    I'm blue
    <div class="div-2">
      da ba dee da ba die
    </div>
  </div>
</div>

wrong.

Because the color of the element has changed, so has the `currentColor` property. 

The way I fix this is putting a `span` inside whatever element I want to set the background of. That `span` will ensure the text stays white without changing the `currentColour` of the div with the blue background 

```html
<div class="div-1">
  I'm blue
  <div class="div-2">
    <span class="white">
      da ba dee da ba die
    </span>
  </div>
</div>
```

```css
.div-1 {
  color: blue;
  background-color: #f2f2f2;
}

.div-2 {
  background-color: currentColor;
}

.white {
  color: white;
}
```

<style>
  .example-3 .div-1 {
    color: blue;
    padding: 0.5em;
    background: #f2f2f2;
  }

  .example-3 .div-2 {
    background-color: currentColor;
  }
</style>

Aaaaand the result: 
<div class="example-3 padding-b-5">
  <div class="div-1">
    I'm blue
    <div class="div-2">
      <span class="white">
        da ba dee da ba die
      </span>
    </div>
  </div>
</div>

Woooo! And if the text color of div-1 changes?  

<style>
  .example-4 .div-1 {
    color: red;
    padding: 0.5em;
    background: #f2f2f2;
  }

  .example-4 .div-2 {
    background-color: currentColor;
  }
</style>

<div class="example-4 padding-b-5">
  <div class="div-1">
    I'm blue
    <div class="div-2">
      <span class="white">
        da ba de... oh. 
      </span>
    </div>
  </div>
</div>

![oh yeah](http://reactiongifs.me/wp-content/uploads/2013/09/anchorman-yes-jumping.gif)

This is essentially all I've done for 90% of that demo. 

<br>

## Lightening and darkening the currentColor

This one would be a walk in the park in sass land with `lighten()` and `darken()`, but, we're not in sass land. No nesting, no loops, no mixins and no color functions. But what about the button in the demo? well... 

#### `background-image: linear-gradient` to the rescue!

because gradients are background images, and an element can have both `background-color` and `background-image`, and the `background-image` always sits infront of the `background-color`, if we set the `background-image` to a `linear-gradient` that uses two identical `rgba()` values (so the gradient is a solid color) we can have a semi-transparent overlay above the color, effectively darkening it. 

Instead of putting a span in my earlier example and making the text white, I'm going to darken the background with a translucent gradient.

```html
<div class="div-1">
  I'm not blue anymore
  <div class="div-2">
    and I'm somewhat legible again
  </div>
</div>
```

```css
.div-1 {
  color: red;
  background-color: #f2f2f2;
}

.div-2 {
  background-color: currentColor;
  background-image: linear-gradient
                    (-180deg, 
                    rgba(0,0,0,0.50) 0%, 
                    rgba(0,0,0,0.50) 100%);
}
```

<style>
  .example-5 .div-1 {
    color: red;
    padding: 0.5em;
    background: #f2f2f2;
  }

  .example-5 .div-2 {
    background-color: currentColor;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.60) 100%);
  }
</style>

<div class="example-5 padding-b-5">
  <div class="div-1">
    I'm not blue anymore
    <div class="div-2">
      And I'm somewhat legible again
    </div>
  </div>
</div>

This is how I created the hover states, the artwork under the hero, and the lightened and darkened sections.

Instead of using 20% black, try using 80% white, or other colours and blend modes for different effects.

**Bonus artwork demo:** <br>
four semi-transparent divs sitting in a div with a `currentColor` background giving the illusion of the color darkening

```css
.artwork {
  display: flex;
  width: 100%;
  height: 3em;
  background: currentcolor }
.artwork > * {
    width: 25%;
    height: 100% }
  .one   { background: rgba(0,0,0,0.1) }
  .two   { background: rgba(0,0,0,0.3) }
  .three { background: rgba(0,0,0,0.5) }
  .four  { background: rgba(0,0,0,0.7) }
}
```

<style>
.artwork {
  color: red;
  display: flex;
  width: 100%;
  height: 3em;
  background: currentcolor }
.artwork > * {
    width: 25%;
    height: 100% }
  .one   { background: rgba(0,0,0,0.1) }
  .two   { background: rgba(0,0,0,0.3) }
  .three { background: rgba(0,0,0,0.5) }
  .four  { background: rgba(0,0,0,0.7) }
}
</style>

<div class="artwork margin-b-7">
  <div class="one"> </div>
  <div class="two"> </div>
  <div class="three"> </div>
  <div class="four"> </div>
</div>

## Go forth and theme-ify 

You can use `currentColor` to fill an SVG, set backgrounds, borders and whatever else you might want to do with it. It's exactly the same as using a color. 

Fill SVG's
```css
svg {
  fill: currentColor;
}
```

Blend currentColor with an image
```css
.blend {
  background: currentColor 
              url('some-image.jpg') 
              center 
              no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
}
```

Set the border of an active menu item link?
```css
li.active {
  border-bottom: 3px solid currentColor
}
```

<br>

wow, cheers for getting this far down, hope you've found what written useful.

[Let me know if you did :)](https://twitter.com/Johnm__)
