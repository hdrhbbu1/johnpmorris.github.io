---
title: I'm Sorry (Kind of)
date: 2015-9-8
category: User Experience
---

About a year ago, barely knowing enough jQuery to cobble together something that works after countless hours were wasted rummaging through stack overflow, I created <a href="/projects/hamburgler">hamburgler</a>, a 'Deliciously Simple' and easy to implement mobile menu

<img alt="hamburgler demo" src="/images/hamburgler.gif" class="full-width padding-b-2"> 

The reason behind making it was firstly, to see if I actually could, and secondly because our instructor made a complete meal out of using a shitty clunky jQuery menu in front of the class, and after a few hours failing to find an easy one to use, I felt like helping them out by creating my own.

Since then I have noticed it turning up across a number of portfolios and landing pages, including a site of the day on awwwards, and thats awesome, but...

<br> 

### It reaaallly annoys me.

Doing front end development and designing Ui full time has made me conscious of how using something like hamburger icons (or hiding your navigation behind a 'menu' button) can have a quite a significant negative impact on the way people navigate. Not just that, but having to include jQuery for one event listener is something I'm not too proud of either.

> I agree with the 'burgler' bit as it's robbing people of best practice.

> Don't be throwing a bunch of JS in the head of your document. Especially a library the size of jQuery.

(Hamburgler no longer needs jQuery)

neither is the menu taking up the whole viewport with the only way to close being a tiny little `✕` in the leftmost corner of the screen.

> Nice effect but this shouts bad UX so hard.

(it also closes when escape is pressed now too)

I never really intended this to be used outside of a media query, and I didn't really care until I added analytics, and then the amount of page views per day got me slightly worried. Lots of people are using this and I'm not sure if I'm proud of myself or dissapointed.

Don't let me stop you from using it if you really want to of course, and if its exactly what you're looking for, awesome. I'm just asking you just consider the options. Hamburger menus (or hidden navigation in general) are definitely not the be all and end all of  _**mobile**_ navigation, what about tabs? have you considered tabs? tabs are great. mmmm tabs.

People don't always know what they're looking for when they're on your website, sometimes they just kind of, click things. Hiding content or the points of potential exploration just because 'i'ts trendy' is something I really don't like, and I was part of the problem. oops.
