---
title: Hamburgler - Deliciously simple mobile navigation 🍔 
layout: blog
---

Deliciously simple mobile navigation in 4 easy steps. <br> 
No longer relient on jQuery 🙌.

[View codepen demo](http://codepen.io/Johnm__/pen/OMqMmN)

<br>
<br>

1. Just give this code the ol' copy-paste-a-roo just after your opening `<body>` tag. 

```html
<div class="hamburgler-menu">
  <ul class="hamburgler-menu-list">
    <li>never</li>
    <li>gonna</li>
    <li>give</li>
    <li>you</li>
    <li>up</li>
  </ul>
</div>

<div id="hamburgler" class="hamburgler-icon-wrapper">
  <span class="hamburgler-icon"></span>
</div>
```

<br>

2. Paste this script just before your closing `</body>` tag.

```html
<script>
  document.getElementById('hamburgler').addEventListener('click', checkNav);
  window.addEventListener("keyup", function(e) {
    if (e.keyCode == 27) closeNav();
  }, false);

  function checkNav() {
    if (document.body.classList.contains('hamburgler-active')) {
      closeNav();
    } else {
      openNav();
    }
  }

  function closeNav() {
    document.body.classList.remove('hamburgler-active');
  }

  function openNav() {
    document.body.classList.add('hamburgler-active');
  }
</script>
```

<br>

3. Paste inside the `<head> </head>` of your html. <br> (or inlcude it in your stylesheets)


```css
.hamburgler-icon-wrapper {
  position: absolute;
  top: 1em;
  left: 1em;
  height: 26px;
  width: 26px;
  cursor: pointer
}

.hamburgler-icon,
.hamburgler-icon:before,
.hamburgler-icon:after {
  content: '';
  position: absolute;
  border-radius: 1em;
  height: 2px;
  width: 26px;
  background: black;
  transition: all 0.2s ease
}

.hamburgler-icon {
  top: 0.75em
}

.hamburgler-icon:before {
  top: -0.55em
}

.hamburgler-icon:after {
  top: 0.55em
}

.hamburgler-active .hamburgler-icon {
  background: transparent;
  transform: rotate(-135deg)
}

.hamburgler-active .hamburgler-icon:before,
.hamburgler-active .hamburgler-icon:after {
  top: 0
}

.hamburgler-active .hamburgler-icon:before {
  transform: rotate(90deg)
}

.hamburgler-active .hamburgler-icon,
.hamburgler-active .hamburgler-icon:before,
.hamburgler-active .hamburgler-icon:after {
  background: white
}

.hamburgler-menu {
  transition: all 0.4s ease;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  text-align: center
}

.hamburgler-active .hamburgler-menu {
  opacity: 1;
  pointer-events: initial;
}

.hamburgler-menu-list {
  display: block;
  transition: all 0.4s ease;
  padding: 0;
  list-style-type: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2)
}

.hamburgler-active .hamburgler-menu-list {
  transform: translate(-50%, -50%) scale(1)
}
```

4. booyah.

<br> 

### Fastclick?
Hamburgler works even better when you have [fastclick](https://github.com/ftlabs/fastclick) on your website, It disables the .3s delay clicking links on a mobile device making everything seem snappier.





