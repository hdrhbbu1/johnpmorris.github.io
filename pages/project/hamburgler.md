---
title: Hamburgler - Deliciously simple mobile navigation 
layout: blog

---

1. Just give this code the ol' copy-paste-a-roo just after your opening `body` tag. 

```html
<!-- The Icon -->
<div id="hamburgler" class="hamburgler-icon-wrapper">
  <span class="hamburgler-icon"></span>
</div>

<!-- The Navigation -->
<div class="hamburgler-nav">
  <ul>
   <li> Never </li>
   <li> Gonna </li>
   <li> Give </li>
   <li> You </li>
   <li> up </li>
  </ul>
</div> 
```

<br>

2. Paste this script just before your closing `html` tag.

```html
<script type="text/javascript">
  var navToggle = document.getElementById('hamburgler');
  navToggle.addEventListener('click', checkNav);

  function checkNav() {
    if (navToggle.classList.contains('active')){
      closeNav();
    }
    else {
      openNav();
    }
  }

  function closeNav() {
    navToggle.classList.remove('active');
  }

  function openNav() {
    navToggle.classList.add('active');
  }
</script>
```

<br>

3. Paste inside the `head` of your html.
