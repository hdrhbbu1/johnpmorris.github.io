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


<div class="demo">
  <ul>
    <li>
      <a class="add" href="javascript:void(0)">+ add a div</a>
    </li> <li>
      <a class="remove" href="javascript:void(0)">- remove a div</a>
    </li>
  </ul>

    <div class="wrapper">
    <div class="item"></div>
      <div class="item"></div>
        <div class="item"></div>
  </div>
</div>
<div style="padding-bottom:20px;float:none;clear:both;"></div>


<style type="text/css">

.demo {
padding-bottom:40px;
margin-left:-10px;
margin-right:-10px;
}
.demo ul {
  list-style-type: none;
  padding: 10px;
}
.demo li {
  display: inline;
  margin-right: 20px;
}
.demo a {
  text-decoration: none !important;
  color: red;
}
.demo .item {
  position: relative;
  float: left;
  width: calc(33.33% - 20px);
  height: 100px;
  background: lightgrey;
  margin: 10px;
}
.demo .item:before {
  content: '33.33%';
  text-align: center;
  display: block;
  width: 100%;
  height: 100%;
  transform: translatey(40%);
  -webkit-transform: translatey(40%);
}
.demo .item:hover:before {
  color: white;
}
.demo .item:hover {
  background-color: red;
  cursor: pointer;
}
.demo .item:nth-child(3n+1):last-child {
  width: calc(100% - 20px);
}
.demo .item:nth-child(3n+1):last-child:before {
  content: '100%' !important;
}
.demo .item:nth-child(3n+2):last-child {
  width: calc(66.66% - 20px);
}
.demo .item:nth-child(3n+2):last-child:before {
  content: '66.66%' !important;
}

</style>

<script type="text/javascript">

$(document).ready(function () {

  $(".add").click(function () {
      $( ".wrapper" ).append( "<div class='item'></div>" );
});

$(".remove").click(function () {
      $( ".item:last" ).remove();
});

});

</script>

You can see the grid in action above, or see a finished product on <a href="http://www.codeschool.com.au" target="blank"> codeschool.com.au </a>, the size of the last child always scales to fill any extra space. We also use an `nth-child` grid for the template previews in <a href="http://www.useoutfit.com" target="blank"> outfit </a> using the same technique covered in the article I linked earlier.

<br>

### First<sup>child</sup> things first.


I'm sure everyone reading this knows what `:last-child` and `:first-child` are, but for the sake of the less experienced with css selectors, I'll go over it.

`:first-child` is a pseudo-class that targets the first child of its parent

for example:

          <style>
      li:first-child {
        color:red;
      }
    </style>

    <div>
      <li> first child </li>
      <li> list item </li>
      <li> list item </li>
      <li> list item </li>
      <li> last child </li>
    </div>

would produce

<style>
.example1:first-child {
color:red;
}
</style>

<div>
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
color:red;
}
</style>

<div>
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


          li:nth-child(2) {
      color:red;
    }


<style>
.example3:nth-child(2) {
color:red;
}
</style>

<div>
<li class="example3"> first child</li>
<li class="example3"> list item </li>
<li class="example3"> list item </li>
<li class="example3"> list item </li>
<li class="example3"> last child </li>
</div>

Becuase we can use formulas as the _'n'_ value, instead of targeting just the second child, we can change `(2)` to `(2n)` and target _every second_ child like this:

          li:nth-child(2n) {
      color:red;
    }

<style>
.example4:nth-child(2n) {
color:red;
}
</style>

<div>
<li class="example4"> first child</li>
<li class="example4"> list item </li>
<li class="example4"> list item </li>
<li class="example4"> list item </li>
<li class="example4"> last child </li>
</div>

If we combine this with `:last-child` we can target every second child but only if it is the last child of its parent.

<style>
.example5:nth-child(2n):last-child {
color:red;
}
</style>

<div>
<li class="example5"> first child</li>
<li class="example5"> list item </li>
<li class="example5"> list item </li>
<li class="example5"> list item </li>
<li class="example5"> last child </li>
</div>

As you can see, none of the children we were targeting were the last child of its parent, so none of them are affected. If we removed one of the items so a multiple of two was in fact the last child of its parent you would see that child being targeted by our css.

<div>
<li class="example5"> first child</li>
<li class="example5"> list item </li>
<li class="example5"> list item </li>
<li class="example5"> list item </li>
</div>

This is how our grid layout will work. We will use code like this to apply specific css to the last child based on how many children the parent has.

Here's an example of our css

          .li:nth-child(2n):last-child {
      color:red;
    }

    /* the child after every second child. */

    .li:nth-child(2n+1):last-child {
      color:green;
    }


<style>
.example6:nth-child(2n):last-child {
color:red;
}
.example6:nth-child(2n+1):last-child {
color:green;
}
</style>


<div style="padding-top:20px;">
<li class="example6"> first child</li>
<li class="example6"> list item </li>
</div>

<div style="padding-top:20px;">
<li class="example6"> first child</li>
<li class="example6"> list item </li>
<li class="example6"> list item </li>
</div>

<div style="padding-top:20px;">
<li class="example6"> first child</li>
<li class="example6"> list item </li>
<li class="example6"> list item </li>
<li class="example6"> list item </li>
</div>

Our grid will work exactly like this, but it will change the width of the last child instead of the color.

<br>

### Ok, Lets get started.

I'm going to start out by creating three divs inside a parent div. and setting each of their widths to 33.33%.


<p data-height="350" data-theme-id="0" data-slug-hash="LEKxqZ" data-default-tab="result" data-user="Johnm__" class='codepen'>See the Pen <a href='http://codepen.io/Johnm__/pen/LEKxqZ/'>LEKxqZ</a> by John Morris (<a href='http://codepen.io/Johnm__'>@Johnm__</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


### Now onto the magic stuff.

If I added another div right now, it would stack under the three divs and would only be 33% wide, leaving a big awkward 66% wide white space on the right of it.

Because our grid is 3 children wide and we wan't to target the last child if its one after the last group of three, I'm going to use
`:nth-child(3n+1):last-child` to target that div and set its width to 100%


<p data-height="350" data-theme-id="0" data-slug-hash="EaBZmB" data-default-tab="result" data-user="Johnm__" class='codepen'>See the Pen <a href='http://codepen.io/Johnm__/pen/EaBZmB/'>EaBZmB</a> by John Morris (<a href='http://codepen.io/Johnm__'>@Johnm__</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Im going to do the same thing but change `3n+1`
to `3n+2` to target the last child if there were two children after the last `3n` and set it's width to 66%

<p data-height="350" data-theme-id="0" data-slug-hash="pvXQYq" data-default-tab="result" data-user="Johnm__" class='codepen'>See the Pen <a href='http://codepen.io/Johnm__/pen/pvXQYq/'>Example three</a> by John Morris (<a href='http://codepen.io/Johnm__'>@Johnm__</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

There you have it.
A grid that is aware of how many items it has and styles its self accordingly.

<a href="https://twitter.com/share" class="twitter-share-button" data-via="Johnm__">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
