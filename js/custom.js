 jQuery(document).ready(function() {
 "use strict";
// Dropdown menu
    seeMore();
    function thDropdownMenu() {
        var wWidth = jQuery(window).width();
        if(wWidth > 1024) {
            jQuery('.navigation ul.sub-menu, .navigation ul.children').hide();
            var timer;
            var delay = 100;
            jQuery('.navigation li').hover(
              function() {
                var $this = jQuery(this);
                timer = setTimeout(function() {
                    $this.children('ul.sub-menu, ul.children').slideDown('fast');
                }, delay);

              },
              function() {
                jQuery(this).children('ul.sub-menu, ul.children').hide();
                clearTimeout(timer);
              }
            );
        } else {
            jQuery('.navigation li').unbind('');
            jQuery('.navigation li.active > ul.sub-menu, .navigation li.active > ul.children').show();
        }
    }

    thDropdownMenu();

    jQuery(window).resize(function() {
        thDropdownMenu();
    });

  //Vertical menus toggles

    jQuery('.widget .menu-menu-1-container, .navigation .menu').addClass('toggle-menu');
    jQuery('.toggle-menu ul.sub-menu, .toggle-menu ul.children').addClass('toggle-submenu');
    jQuery('.toggle-menu ul.sub-menu').parent().addClass('toggle-menu-item-parent');

    jQuery('.toggle-menu .toggle-menu-item-parent').append('<span class="toggle-caret"><i class="fa fa-plus"></i></span>');

    jQuery('.toggle-caret').click(function(e) {
        e.preventDefault();
        jQuery(this).parent().toggleClass('active').children('.toggle-submenu').slideToggle('fast');
    });

// Show-hide Scroll to top & move-to-top arrow

  jQuery("body").prepend("<a id='move-to-top' class='animate ' href='#header'><i class=''></i></a>");

  var scrollDes = 'html,body';
  /*Opera does a strange thing if we use 'html' and 'body' together so my solution is to do the UA sniffing thing*/
  if(navigator.userAgent.match(/opera/i)){
    scrollDes = 'html';
  }
  //show ,hide
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 120) {
      jQuery('#move-to-top').addClass('filling').removeClass('hiding');
    } else {
      jQuery('#move-to-top').removeClass('filling').addClass('hiding');
    }
  });


// Make all anchor links smooth scrolling & scroll handler

  var scrollToAnchor = function( id, event ) {
    // grab the element to scroll to based on the name
    var elem = jQuery("a[name='"+ id +"']");
    // if that didn't work, look for an element with our ID
    if ( typeof( elem.offset() ) === "undefined" ) {
      elem = jQuery("#"+id);
    }
    // if the destination element exists
    if ( typeof( elem.offset() ) !== "undefined" ) {
      // cancel default event propagation
      event.preventDefault();

      // do the scroll
      var scroll_to = elem.offset().top;
      jQuery('html, body').animate({
              scrollTop: scroll_to
      }, 600, 'swing', function() { if (scroll_to > 46) window.location.hash = id; } );
    }
  };
  // bind to click event
  jQuery("a").click(function( event ) {
    // only do this if it's an anchor link
    var href = jQuery(this).attr("href");
    if ( href && href.match("#") && href !== '#' ) {
      // scroll to the location
      var parts = href.split('#'),
        url = parts[0],
        target = parts[1];
      if ((!url || url == window.location.href.split('#')[0]) && target)
        scrollToAnchor( target, event );
    }
  });

// Responsive Navigation

// Responsive Navigation

/* <![CDATA[ */
var themehunk_customscript = {"responsive":"1","nav_menu":"secondary"};
/* ]]> */
if (themehunk_customscript.responsive && themehunk_customscript.nav_menu != 'none') {
    jQuery(document).ready(function($){
        // merge if two menus exist
        if (themehunk_customscript.nav_menu == 'both') {
            jQuery('.navigation').not('.mobile-menu-wrapper').find('.menu').clone().appendTo('.mobile-menu-wrapper').hide();
        }

        jQuery('.toggle-mobile-menu').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            jQuery('body').toggleClass('mobile-menu-active');
        });

        // prevent propagation of scroll event to parent
        jQuery(document).on('DOMMouseScroll mousewheel', '.mobile-menu-wrapper', function(ev) {
            var $this = jQuery(this),
                scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = $this.height(),
                delta = (ev.type == 'DOMMouseScroll' ?
                    ev.originalEvent.detail * -40 :
                    ev.originalEvent.wheelDelta),
                up = delta > 0;

            var prevent = function() {
                ev.stopPropagation();
                ev.preventDefault();
                ev.returnValue = false;
                return false;
            }

            if ( jQuery('a#pull').css('display') !== 'none' ) { // if toggle menu button is visible ( small screens )

              if (!up && -delta > scrollHeight - height - scrollTop) {
                  // Scrolling down, but this will take us past the bottom.
                  $this.scrollTop(scrollHeight);
                  return prevent();
              } else if (up && delta > scrollTop) {
                  // Scrolling up, but this will take us past the top.
                  $this.scrollTop(0);
                  return prevent();
              }
            }
        });
    }).on('click', function(event) {

        var $target = jQuery(event.target);
        if ( ( $target.hasClass("fa") && $target.parent().hasClass("toggle-caret") ) ||  $target.hasClass("toggle-caret") ) {// allow clicking on menu toggles
            return;
        }

        jQuery('body').removeClass('mobile-menu-active');
    });
}
// Scroll down header
  function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 250,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");

            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");

                }
            }
        });
    }

/*scroll header function*/
    jQuery(window).scroll(function() {
        var scroll =jQuery(window).scrollTop();

        if (scroll >=100) {
           jQuery(".header").addClass('smaller');
        } else {
           jQuery(".header").removeClass("smaller");
        }
    });



	});
 /* start flex slider*/

 jQuery(window).load(function() {
    jQuery('.flexslider').flexslider();

  });
 /* end flex slider*/

 /*end scroll header function*/
 /*testimonials slider*/
 jQuery(window).load(function(){
  jQuery('.bxslider').bxSlider({
     mode:'fade',
     auto: true,
     autoControls: true,
     adaptiveHeight: true,
      });

// animation-wow

  wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
        // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

 // loader
jQuery(".loader").fadeOut("slow");
  jQuery(".overlayloader").delay(1000).fadeOut("slow");

});


///start pallaxx
 jQuery(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 (function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);


( function( $ ) {

  // Setup variables
  $window = $(window);
  $body = $('body');

    //FadeIn all sections

  function adjustWindow(){

    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {

            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });

    // Get window size
      winH = $window.height();

      // Keep minimum height 550
      if(winH <= 550) {
      winH = 550;
    }


  }

} )( jQuery );
}
 else {
       (function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);


( function( $ ) {

  // Setup variables
  $window = $(window);
  $body = $('body');

    //FadeIn all sections
  $body.imagesLoaded( function() {
    setTimeout(function() {

          // Resize sections
          adjustWindow();

          // Fade in sections
        $body.removeClass('loading').addClass('loaded');

    }, 800);
  });

  function adjustWindow(){

    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {

            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });

    // Get window size
      winH = $window.height();

      // Keep minimum height 550
      if(winH <= 550) {
      winH = 550;
    }


  }

} )( jQuery );
    }
});

//move to top
jQuery(document).ready(function(){
    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#scroll').fadeIn();
        } else {
            jQuery('#scroll').fadeOut();
        }
    });
    jQuery('#scroll').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

function seeMore() {
  var noEvents = $('.post-list').length;
  var viewPortWidth = $(window).width();
  var numberShow = 4;
  if (viewPortWidth <= 480) numberShow = 1;
  else if (viewPortWidth <= 780) numberShow = 2;

  var hiddenElements = $('.post-list.hidden');
  for (var i = 0; i < Math.min(numberShow, hiddenElements.length); ++i) hiddenElements[i].setAttribute('class', 'post-list');

  if ($('.post-list.hidden').length === 0) {
    $('#events-see-more').addClass('disabled');
    return;
  }
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r;i[r]=i[r]||function(){
    (i[r].q = i[r].q || []).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-104537980-1', 'auto');
ga('send', 'pageview');

