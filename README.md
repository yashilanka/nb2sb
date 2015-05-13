# Nb2Sb - Navbar to Sidebar

**Nb2Sb (Navbar to Sidebar)** is a *Bootstrap-only* jQuery plug-in that converts your navbar into a sidebar.

##[DEMO](http://dcdeiv.github.io/nb2sb)

### Buy me a beer:
<a href="https://flattr.com/submit/auto?user_id=dcdeiv&url=https%3A%2F%2Fgithub.com%2Fdcdeiv%2Fnb2sb" target="_blank"><img src="http://button.flattr.com/flattr-badge-large.png" alt="Flattr this" title="Flattr this" border="0"></a>

## DISCLAIMER:
* **This is a beta version. There could be some bugs**
* **Dropdown menus are not fully supported yet**

## Dependencies

- *Bootstrap 3* : this plugin is designed to work with [Bootstrap](http://getbootstrap.com/). If you are looking for a Sidebar plug-in to plug into your website check [Simple Sidebar](http://www.github.com/dcdeiv/simple-sidebar) out;
- *jQuery v1.11.2* : you can also include jQuery-Ui for other easing. *see the [example](index.html)*;

##Installation

###Basic HTML Structure:
-This plug-in works only with the Bootstrap Navbar:

    <nav id="nb2sb-nav" class="navbar navbar-default navbar-fixed-top">
      <div class="container">
    	  <div class="navbar-header">
    		  <a class="navbar-brand" href="#">Your Brand</a>
    			
    			<!-- icon/button -->
    			<button id="nb2sb-btn" type="button" class="navbar-toggle" data-toggle="collapse">
    			  <span class="icon-bar"></span>
    				<span class="icon-bar"></span>
    				<span class="icon-bar"></span> 
    			</button>
    		</div>
    			
    		<!-- content -->
    		<div id="nb2sb-content">
    		  <ul class="nav navbar-nav nav-pills navbar-right">
    			  <li class="active"><a data-toggle="pill" href="#home">Home</a></li>
    				<li><a class="close-nb2sb" data-toggle="pill" href="#about">About</a></li>
    				<li><a class="close-nb2sb" data-toggle="pill" href="#contact">Contact</a></li>
    				<li><a class="close-nb2sb" data-toggle="pill" href="#gallery">Gallery</a></li>
    			</ul>
    		</div>
    	</div>
    </nav>

1. Give a unique ID or a class to the `<nav>` tag, as shown above, I chose `#nb2sb-nav`. `<nav>` must come with `.navbar-fixed-top` class (see above);
2. In order to trigger the animations you have to give a unique ID or a class to the button or the icon you will show in your navbar. I chose `#nb2sb-btn`. Be sure that the button/icon have these attributes: `class="navbar-toggle" data-toggle="collapse"`. These attributes are default in Bootstrap and they allow the button to hide and show instead of the menu;
3. As default, `<ul>` must be wrapped in a `<div>`. Give this wrapper a unique ID or a class. As above I chose `#nb2sb-content`;
4. It does not really matters if you are using *Tabs* or *Pills* because everything will be hidden, although tabs should not be a problem, you should know that I haven't tested them yet, but I will as soon as possible.
5. Give a class to all links that will close the sidebar. In the example above I chose `.close-nb2sb` but you can choose whatever you like. Put your chosen class into the function option.

###JavaScript Options
- Firstly grab the [minified version](jquery.nb2sb.min.js) file and include it in your page;
- Attach the plug-in to the navbar selector, if you have any problems see at the bottom of the [example page](index.html);

####OPTIONS
Here is the list of the full options along with an example and some explanations:

    $( document ).ready(function() {
      //'#nb2sb-nav' is the selector I used to call the <nav> tag see point 1 in Basic HTML Structure
      $( '#nb2sb-nav' ).nb2sb({
    	  selectors : {
    	    //select the button or icon. See point 2 in Basic HTML Structure
    		opener: '#nb2sb-btn',
    		//select the menu. See point 3 in Basic HTML Structure
    		content: '#nb2sb-content',
    		//select the link that will close the sidebar when clicked
    		closingLinks: '.close-nb2sb'
    		},
    		//here you can customize the plug-in
    		settings: {
    		  //this plug-in use some data-attributes which comes with the name 'nb2sb'. You can easily change it.
    		  dataName: 'nb2sb',
    		  //the gap between the sidebar and the left end of the window/device. 64px is recommended
    		  gap 64,
    		  //here you can customize the animations
    		  animation: {
    		    duration: 500, //milliseconds
    			  easing: 'swing' //I suggest to include the jQuery-UI library and use this easing: 'easeOutQuint'
    			},
    			//here you can stylize the sidebar
    			style: {
    			  //500px it's too much. I chose this amount of px to better show you how the sidebar work
    			  width: 500,
    			  padding: '1em'
    			  //add you custom css here.
    			  //NB: get rid of hyphens
    			  //EX: backgroundColor (not background-color).
    			 }
    		},
    		//this is for the future version, so this option won't work. in the future it will be (hopefully) possibile to dinamically add more menus to the sidebar.
    		ajax: {}
      });
    });

##That's all folk
Pretty easy, isn't it?
Check out the [index.html](index.html) page I uploaded along with the code to further understand what I said above.
