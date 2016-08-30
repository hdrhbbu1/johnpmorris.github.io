---
title: Recreating VSCOcam image filters with CSS blend modes
date: 2016-8-23
category: CSS
---

At [Outfit](http://outfit.io) we tend to use a lot of tricks and techniques to accomplish some pretty basic image treatments, that are extremely easy to recreate in Photoshop. Things like image brightening, adding a blend mode, saturating controls are the staple of the Photoshop domain but can be easily accomplished with CSS... Usually these involve a pretty heavy use of `-webkit-filter` , `background-blend-mode` and `mix-blend-mode`.

During an [Outfit](http://outfit.io) 'hack day' I wanted to see how far I could push these effects and tried to implement some of the photoshop filters that don't have a corresponding `-webkit-filter` like `levels` for example, and ended up re-creating all of [VSCO](https://itunes.apple.com/au/app/vsco/id588013838?mt=8)'s default image filters.


<iframe height='500' scrolling='no' src='//codepen.io/Johnm__/embed/xOZzkj/?height=500&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/Johnm__/pen/xOZzkj/'>VSCOcam Filters with CSS and blend modes</a> by John Morris (<a href='http://codepen.io/Johnm__'>@Johnm__</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<h2 style="padding-top: 3em"> A little bit about blend modes (and why they are important) </h2>

[I know what blend modes are John, why are they relevant?](#why-blend-modes-are-important)

### 1. Background blend mode

``` 
✔ 56.88% ◒ 11.28%

IE ✘  
Edge ✘  
Firefox ✘ 2+ ✔ 30+ 
Chrome ✘ 4+ ✔ 35+ ◒ 46+² ✔ 47+ 
Safari ✘ 3.1+ ◒ 7.1+¹ 
Opera ✘ 9+ ✔ 22+ ◒ 33+² ✔ 34+ 
```
As the name suggests it simply blends the different background styles together. Simple right?

You can blend your `background-image` with a `background-color` for a cool image treatment.

``` css
.blend-background-with-color {
  background-image: url('face.png');
  background-color: red;
  background-blend-mode: multiply;
}
```
<div style="
  height: 300px; width: 100%; 
  background: red url('https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea') center center no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  margin-bottom: 4em">

</div>

or you can blend multiple background images together for a cool double exposure effect

``` css
.blend-images-together {
  background-image: url('person.png'), url('mountain.png');
  background-blend-mode: screen;
}
```

<div style="
  height: 500px; width: 100%;
  -webkit-filter: grayscale(100%) contrast(1.25); 
  background: url('https://images.unsplash.com/photo-1450562624248-869a3ec195f1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=1d5b416997fee8a5c94e6bf5ef35a847'), 
              url('https://images.unsplash.com/photo-1440347306022-52a6c51b8dc1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8ce900c2b46e89b23ba4b8ae0ba1e689'), center center no-repeat;
  background-size: cover;
  background-blend-mode: screen;
  margin-bottom: 5em">

</div>

### 2. Mix blend mode

``` 
✔ 56.85% ◒ 10.75%

IE ✘  
Edge ✘  
Firefox ✘ 2+ ✔ 32+ 
Chrome ✘ 4+ ✘ 29+¹ ✔ 41+ 
Safari ✘ 3.1+ ◒ 7.1+² 
Opera ✘ 9+ ✔ 29+
```
Similar to `background-blend-mode` but not limited to background images, `mix-blend-mode`, defines how an element’s content should blend with its background.

For example, creating the same double exposure effect with text and an image, instead of two images

```html
<div class="image"></div> 
<div class="text">Blending is rad</div>
```

```css
.text { 
  mix-blend-mode: lighten;
}
```

<div style="position: relative">
  <div style="
    display: flex; 
    align-items: center;
    justify-content; center;
    min-height: 200px;
    width: 100%; 
    background: url('https://hd.unsplash.com/photo-1445160307478-288488e5da27') center center no-repeat;
    background-size: cover;"><div style="text-align: center;
      font-weight: 900;
      display: block;
      width: 100%;
      font-size: 4em;
      color: red; 
      mix-blend-mode: lighten">Blending is rad</div>
  </div>
</div>

<br>
<br> 

<h3 id="why-blend-modes-are-important">Why these are important.</h3>

When I first found out about `background-blend-mode` I stumbled across [this codepen demo](http://codepen.io/bennettfeely/pen/qBJyj) on [this css tricks article](https://css-tricks.com/basics-css-blend-modes/) which very cleverly used `background-blend-mode: multiply;` to blend together CYMK separations to form a complete image. (How offset printing works)

Hover over the demo below to see it working

<iframe height='400' scrolling='no' src='//codepen.io/bennettfeely/embed/qBJyj/?height=400&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/bennettfeely/pen/qBJyj/'>CMY/CMYK Color printing with background-blend-mode</a> by Bennett Feely (<a href='http://codepen.io/bennettfeely'>@bennettfeely</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<br>

This is the main technique behind implementing the 'levels' filter. (the missing filter from the CSS filter set)

<br>

#### So what exactly are levels?

Essentially 'levels' are the varying amounts of how much red, green and blue (RGB) or how much cyan, magenta, yellow and black (CMYK) the image contains. VSCO's filters, are for the most part, just variations of RGB levels.

![photoshop levels example](/images/levels.png)

#### And how do we create this with blend modes?

Not only will we need to create the RGB separations with `background-blend-mode` , we will also have to blend them all back together to get the finished image using `mix-blend-mode` , after that is done, we can change the colour that a separation is blending with to change the level of that colour in our image, creating the filters.

<br> 
<br> 

## Step 1. Creating the RGB separations

*For the sake of the demo and every step having a preview, I've omitted some basic CSS rules like dimensions and positioning* 

Ok, first things first. Creating the three RGB separations.

To start this off, I'll be creating the divs that will act as my RGB separations, these will just be three divs called `R`, `G` and `B`

``` html
<!-- RGB in reverse order so R is the 'top layer' -->
<div class="b"></div>
<div class="g"></div>
<div class="r"></div>
```
Each of these divs will need to have a corresponding `background-color` .

``` css
.r {  background-color: #FF0000 }
.g {  background-color: #00FF00 }
.b {  background-color: #0000FF }
```

<div style="
  display: flex;">
  <div style="height: 10em; width: 33.333%; background: #00f"></div>
  <div style="height: 10em; width: 33.333%; background: #0f0"></div>
  <div style="height: 10em; width: 33.333%; background: #f00"></div>
</div>

<br>
<br>

Cool. now that the separations are there, lets actually add an image to separate, I'll just do this by adding a `background-image` to a class called `image` .

``` html
<div class="image b"></div>
<div class="image g"></div>
<div class="image r"></div>
```
``` css
/* image class comes before r, g and b in the stylesheet
   so the background shorthand doesn't override the 
   background colors */

.image {
  background: url('face.png') center center no-repeat; 
  background-size: cover;
}

.r { /* ... */ }
.g { /* ... */ }
.b { /* ... */ }
```

<div style="
  display: flex;">
  <div style="height: 10em; width: 33.333%; 
    background: #00f url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;"></div>
  <div style="height: 10em; width: 33.333%; 
    background: #0f0 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;"></div>
  <div style="height: 10em; width: 33.333%; 
    background: #f00 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;"></div>
</div>

<br>
<br>

Now all im going to do is blend this image with the background color that is being set by the `.r` `.g` and `.b` classes. 

The blend mode I'll use is screen. To replace black with the color of the separation.
> *With Screen blend mode the values of the pixels in the two layers are inverted, multiplied, and then inverted again. This yields the opposite effect to multiply. -&nbsp;[https://en.wikipedia.org/wiki/Blend_modes#Screen](https://en.wikipedia.org/wiki/Blend_modes#Screen)* 


```css
.image {
  background-blend-mode: screen;
  /* ... */
}
```

<div style="
  display: flex;">
  <div style="height: 10em; width: 33.333%; 
    background: #00f url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    background-blend-mode: screen"></div>
  <div style="height: 10em; width: 33.333%; 
    background: #0f0 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    background-blend-mode: screen;"></div>
  <div style="height: 10em; width: 33.333%; 
    background: #f00 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    background-blend-mode: screen;"></div>
</div>

<br>
<br>

It's pretty useless having these separations sit side by side, so let's stack them all on top of each other, I'm going to do this by wrapping all of the divs in an image-wrapper class, and absolutely positioning the separations on top of each other

``` html
<div class="image-wrapper">
  <!-- r g and b -->
</div>
```

``` css
.image-wrapper {
  position: relative;
  height: 400px;
  width: 100%;
}

.image {
  position: absolute;
  top: 0; 
  right: 0;
  bottom: 0;
  left: 0;
  /* ... */
}
```

<div style="
  width: 100%;
  height: 400px;
  position: relative;">
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #00f url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    background-blend-mode: screen"></div>
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #0f0 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    background-blend-mode: screen;"></div>
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #f00 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    background-blend-mode: screen;"></div>
</div>

<br> 

Because our separations will always fill the `image-wrapper` you can make the `image-wrapper` whatever dimensions you want, and the image will still be a-ok.

<br>
<br> 

## Step 2. Blending those separations together to form a whole image.

So by this time I take it you are pretty sick of that obnoxious red split, so lets blend them together to get a whole image so we can start on creating the 'filters'.

All this step is is adding a mix-blend-mode to the `image` class

``` css
.image {
  /* ... */ 
  mix-blend-mode: multiply;
}
```

<div style="
  width: 100%;
  height: 400px;
  position: relative;">
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #00f url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    background-blend-mode: screen"></div>
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #0f0 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    background-blend-mode: screen;"></div>
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #f00 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    background-blend-mode: screen;"></div>
</div>

<br>
<br>

As you've probably noticed the image is a little heavy on the contrast, we can fix this and make it a little closer to the original by simply adding some css filters to the image-wrapper

``` css
.image-wrapper {
  /* ... */ 
  filter: saturate(0.8) brightness(1.5) contrast(0.8);
}
```

<div style="
  width: 100%;
  height: 400px;
  -webkit-filter: saturate(0.8) brightness(1.5) contrast(0.8);
  position: relative;">
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #00f url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    background-blend-mode: screen"></div>
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #0f0 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    background-blend-mode: screen;"></div>
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #f00 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    background-blend-mode: screen;"></div>
</div>

<br>
<br>

## Step 3. Creating the filters.

The next step is probably the easiest and at the same time, the hardest one. All I do to achieve this is add a class on the `body` ( or any element the image-wrapper is inside. ) with the name of my filter, and change the `background-color` of each of the separations are blending with and whatever filters are being applied, until the finished product looks like it does in VSCOcam.

This isn't by any means an exact science as you'll have to do it all by eye, but you can end up with a result that looks pretty damn close with pure css.



#### P5 Filter in VSCO


![vsco filter screenshots](/images/vsco-ui.png)

### P5 Filter recreated in CSS


<div style="display: flex; justify-content: space-between">

<div style="
  width: calc(50% - 0.7em);
  height: 250px;
  -webkit-filter: saturate(0.8) brightness(1.5) contrast(0.8);
  position: relative;">
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #00f url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    background-blend-mode: screen"></div>
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #0f0 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    background-blend-mode: screen;"></div>
  <div style="
    position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
    background: #f00 url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    background-blend-mode: screen;"></div>
</div>

  <div style="
    width: calc(50% - 0.7em);
    height: 250px;
    -webkit-filter: saturate(0.8) contrast(1.2) brightness(1.2);
    position: relative;">
    <div style="
      position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
      background: rgb(76, 54, 255) url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
      background-size: cover;
      mix-blend-mode: multiply;
      background-blend-mode: screen"></div>
    <div style="
      position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
      background: rgb(73, 250, 79) url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
      background-size: cover;
      mix-blend-mode: multiply;
      background-blend-mode: screen;"></div>
    <div style="
      position: absolute; top: 0; right: 0; left: 0; bottom: 0; 
      background: rgb(193, 96, 122) url(https://hd.unsplash.com/photo-1470500507674-2cbd7f1a08ea) center center no-repeat;
      background-size: cover;
      mix-blend-mode: multiply;
      background-blend-mode: screen;"></div>
  </div>
</div>

``` html
<body class="p5">
```
``` css
.p5 .image-wrapper { filter: saturate(0.8) contrast(1.2) brightness(1.2); }
.p5 .b { background-color: rgb(76, 54, 255); }
.p5 .g { background-color: rgb(73, 250, 79); }
.p5 .r { background-color: rgb(193, 96, 122);}
```

<br> 
<br> 

There you have it, you can even crack open the web inspector and poke around in any of the previews throughout the post if you don't believe its only css. 

I'm still not sure if this has any practical use outside of an [Outfit template](http://outfit.io/creators) other than being a cool concept and an exercise to flex your creative CSS writing muscles.

Tweet me at [@johnm__](http://twitter.com/@johnm__) if you actually found a practical use for it, or just found it interesting, because I'd love to hear it.
