---
title: Flexbox style grids with nth-child Magic.
date: April 9th 2015
layout: blog
category: CSS

---

I was shown a [really interesting article](http://alistapart.com/article/quantity-queries-for-css) a few weeks ago explaining how to do 'quantity queries' ( think of them like media queries but based on how much content you have )
using last, first and nth child pseudo-classes.

Some pretty cool uses of using psuedo-classes in order to style your layout. include the the ability to change your navigation's styling based on how many items it has, this would be super useful to anyone that makes websites for clients to edit with a CMS. Lets say you have a traditional nav bar, but don't want there to ever be more than four items in it because it would line break. nth child would give you the option to say if there is more than four items, hide the nav behind a 'show navigation' button.

Another cool use of nth and last child selectors are what I'm writing about today, making a cool flexbox style responsive grid.

<iframe class="margin-b-3" height='400' scrolling='no' src='//codepen.io/Johnm__/embed/XKMaVN/?height=400&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/Johnm__/pen/XKMaVN/'>XKMaVN</a> by John Morris (<a href='http://codepen.io/Johnm__'>@Johnm__</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

You can see the grid in action above, or see a finished product on <a href="http://www.codeschool.com.au" target="blank"> codeschool.com.au </a>, the size of the last child always scales to fill any extra space. We also use an `nth-child` grid for the template previews in <a href="http://www.useoutfit.com" target="blank"> outfit </a> using the same technique covered in the article I linked earlier.

<br>

### First<sup>child</sup> things first.


I'm sure everyone reading this knows what `:last-child` and `:first-child` are, but for the sake of the less experienced with css selectors, I'll go over it.

`:first-child` is a pseudo-class that targets the first child of its parent

for example:

```html
<style>
  li:first-child {
    font-weight: bold;
  }
</style>

<div>
  <li> first child </li>
  <li> list item </li>
  <li> list item </li>
  <li> list item </li>
  <li> last child </li>
</div>
```

would produce:
<style>
.example1:first-child {
font-weight: bold;
}
</style>

<div class="margin-b-3 grey-5-bg padding-2">
<li class="example1"> first child</li>
<li class="example1"> list item </li>
<li class="example1"> list item </li>
<li class="example1"> list item </li>
<li class="example1"> last child </li>
</div>

because the first `<li>` is the first one in the parent div.

Alternatively, using `:last-child` would have a similar effect.

<style>
.example2:last-child {
font-weight: bold;
}
</style>

<div class="margin-b-3 grey-5-bg padding-2">
<li class="example2"> first child</li>
<li class="example2"> list item </li>
<li class="example2"> list item </li>
<li class="example2"> list item </li>
<li class="example2"> last child </li>
</div>
<br>

### Now that thats out of the way, onto the nth child.

Similar to first and last child selectors `:nth-child` is a way to select every element that matches the value of _'n'_

for example, `:nth-child(2)` would select the second child of the parent element.

```css
li:nth-child(2) {
  font-weight: bold;
}
```

<style>
.example3:nth-child(2) {
font-weight: bold;
}
</style>

<div class="margin-b-3 grey-5-bg padding-2">
<li class="example3"> first child</li>
<li class="example3"> list item </li>
<li class="example3"> list item </li>
<li class="example3"> list item </li>
<li class="example3"> last child </li>
</div>

Becuase we can use formulas as the _'n'_ value, instead of targeting just the second child, we can change `(2)` to `(2n)` and target _**every second**_ child:

```css
li:nth-child(2n) {
  font-weight: bold;
}
```

<style>
.example4:nth-child(2n) {
  font-weight: bold;
}
</style>

<div>
<div class="margin-b-3 grey-5-bg padding-2">
<li class="example4"> first child</li>
<li class="example4"> list item </li>
<li class="example4"> list item </li>
<li class="example4"> list item </li>
<li class="example4"> last child </li>
</div>

If we combine this with `:last-child` we can target _**every second**_ child but _**only**_ if it is the last child of its parent.

<style>
.example5:nth-child(2n):last-child {
  font-weight: bold;
}
</style>

<div class="margin-b-3 grey-5-bg padding-2">
<li class="example5"> first child</li>
<li class="example5"> list item </li>
<li class="example5"> list item </li>
<li class="example5"> list item </li>
<li class="example5"> last child </li>
</div>

As you can see, none of the children we were targeting were the last child of its parent, so none of them are affected. If we removed one of the items so a multiple of two was in fact the last child of its parent you would see that child being targeted by our css.

<div class="margin-b-3 grey-5-bg padding-2">
<li class="example5"> first child</li>
<li class="example5"> list item </li>
<li class="example5"> list item </li>
<li class="example5"> list item </li>
</div>

This is how our grid layout will work. We will use code like this to apply specific css to the last child based on how many children the parent has.

Here's an example of our css

```css
/* every second child. */
.li:nth-child(2n):last-child {
  font-weight: bold;
}

/* the child after every second child. */
.li:nth-child(2n+1):last-child {
  font-style: italic;
}
```

<style>
.example6:nth-child(2n):last-child {
  font-weight: bold;
}
.example6:nth-child(2n+1):last-child {
  font-style: italic;
}
</style>


<div class="margin-b-3 grey-5-bg padding-2">
<li class="example6"> first child</li>
<li class="example6"> list item </li>
</div>

<div class="margin-b-3 grey-5-bg padding-2">
<li class="example6"> first child</li>
<li class="example6"> list item </li>
<li class="example6"> list item </li>
</div>

<div class="margin-b-3 grey-5-bg padding-2">
<li class="example6"> first child</li>
<li class="example6"> list item </li>
<li class="example6"> list item </li>
<li class="example6"> list item </li>
</div>

Our grid will work exactly like this, but it will change the width of the last child instead of the color.

<br>

### Ok, Lets get started.

I'm going to start out by creating three divs inside a parent div. and setting each of their widths to 33.33%.

<iframe class="margin-b-5" height='265' scrolling='no' src='//codepen.io/Johnm__/embed/LEKxqZ/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/Johnm__/pen/LEKxqZ/'>Example 1</a> by John Morris (<a href='http://codepen.io/Johnm__'>@Johnm__</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>


### Now onto the magic stuff.

If I added another div right now, it would stack under the three divs and would only be 33% wide, leaving a big awkward 66% wide white space on the right of it.

Because our grid is 3 children wide and we wan't to target the last child if its one after the last group of three, I'm going to use
`:nth-child(3n+1):last-child` to target that div and set its width to 100%

<iframe class="margin-b-3" height='265' scrolling='no' src='//codepen.io/Johnm__/embed/EaBZmB/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/Johnm__/pen/EaBZmB/'>Example two</a> by John Morris (<a href='http://codepen.io/Johnm__'>@Johnm__</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

Im going to do the same thing but change `3n+1`
to `3n+2` to target the last child if there were two children after the last `3n` and set it's width to 66%

<iframe class="margin-b-3" height='265' scrolling='no' src='//codepen.io/Johnm__/embed/pvXQYq/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/Johnm__/pen/pvXQYq/'>Example three</a> by John Morris (<a href='http://codepen.io/Johnm__'>@Johnm__</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

There you have it.
A grid that is aware of how many items it has and styles its self accordingly.
