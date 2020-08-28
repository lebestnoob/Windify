---
title: The Status of Windify
---

<title> The Status of Windify </title>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">

<style>
img {
  -webkit-filter: drop-shadow(1.5px 1.5px 2px black);
  filter: drop-shadow(1.5px 1.5px 2px black);
}
a:hover {
  color: #d3d3d3;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
filter: drop-shadow(0px 0px 5px #d3d3d3);
}

black {   font-weight: 800; } 

mark { 
  background-color: #618eb5;
  color: white;
}
mark1 { 
  background-color: #383838;
  color: white;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
.bold {
font-family: 'Open Sans', sans-serif;
}
img {
   -webkit-filter: invert(1);
   filter: invert(1);
   }
.uninvert {
   -webkit-filter: invert(1);
   filter: invert(1);
   }
a:hover {
  color: #d3d3d3;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
text-shadow: .5px .5px 1px black;
text-shadow:0px 0px 30px #d3d3d3;
}

.left {
  display: inline-block;
  float: left;
  text-align: left;
  font-size: 16px;
  line-height: 14px;
  position: relative;
  top: 3px;

}
div {
  line-height: 40px;
}
  div {
  margin: 5px;
}

  h1 {
  text-shadow: .5px .5px 1px black;
}
p {
  text-shadow: .5px .5px 1px black;
}
a {
  text-shadow: .5px .5px 1px black;
}
body {
  text-shadow: .5px .5px 1px black;
}
*, *::after, *::before {
	-webkit-user-select: none;
	-webkit-user-drag: none;
	-webkit-app-region: no-drag;
	cursor: default;
}

::-moz-selection {
    background-color: transparent;
    color: #fff;
}

::selection {
    background-color: transparent;
    color: #fff;
}

.myclass::-moz-selection,
.myclass::selection { ... }

html {
  background-color: #055555;
}
html {
font-family: 'Open Sans', sans-serif;
background-color: #055555;
}
html {
  color: white;
	background-color: #055555;
}
  </style>
<script language="JavaScript">
    /**
    * Disable right-click of mouse, F12 key, and save key combinations on page
    * By Arthur Gareginyan (arthurgareginyan@gmail.com)
    * For full source code, visit https://mycyberuniverse.com
    */
  window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
    //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };
  </script>
 
<body>
# The Status of Windify

## This website has been deprecated. It is no longer maintained. This may mean the webiste may break in the future. You can access this website at [https://windify.netlify.app/](https://windify.netlify.app/) or [https://lebestnoob.github.io/Windify](https://lebestnoob.github.io/Windify)

### Why is it here?

#### Originally, this website was hosted on https://drv.tw. This static website host generates a random URL you can't change. My plan was to host it on Netlify and get a more readle URL like this one: https://SITE.netlify.app. This will also prevent the websiete from going offline if something happenes to my Google Dirve

### Why did I make this?

#### I made this website to try and trick my friends into beliveing I got Windows 10 running on a Chromebook

### Will I ever come back to this project?

#### I may come back to this project if I get interested in this again.

### Can I use your code?

#### Yes, you can. You can fork this website and remake it. Beware that the code I use is outdated and messy. They are no longer supported by W3 standards.

### Where is the repository?

#### The repository is on github. You can acceess it by going to this link: [https://github.com/lebestnoob/Windify](https://github.com/lebestnoob/Windify)

### Page status
[![Netlify Status](https://api.netlify.com/api/v1/badges/56822c5c-4821-4707-8ae5-724b9cbb9d02/deploy-status)](https://app.netlify.com/sites/windify/deploys)
</body>
