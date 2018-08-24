// dhtml.sharedEvents.once('pageLoadComplete', function() {
    // code that loads heavy content

		var banner = document.getElementById('banner');

		banner.style.width = dhtml.width + 'px';
		banner.style.height = dhtml.height + 'px';

		var closebutton = document.getElementById('closeButton');

		var clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.adform.com'); //dhtml.getVar() gets clickTAG variable from Adform, if it is not defined (e.g. banner is being tested locally) it will fallback to example.com
		var landingpagetarget = dhtml.getVar('landingPageTarget', '_blank'); //same as above - landingPageTarget from Adform or falls back to _blank

		banner.onclick = function() {
			window.open(clickTAGvalue,landingpagetarget);
		}

		document.addEventListener('touchstart', function(event) {
		 deltax = 0;
		 deltay = 0;
		 x = event.touches[0].clientX;
		 y = event.touches[0].clientY;
		 l = event.touches.length;
		}, false);

		document.addEventListener('touchmove', function(event) {
		  event.preventDefault();
		  deltax = x - event.touches[0].clientX;
		  deltay = y - event.touches[0].clientY;
		  parent.window.scrollBy(0,deltay);
		}, false);

		var tl = new TimelineMax({delay:0.1});
		tl.to(".cta", 0, {opacity:0, scale:0.8, ease: Power4.easeOut})
		.to(".ctext2", 0, {y:-50, ease: Power4.easeOut})
		.to(".text1, .text2", 0, {opacity:0, scale:1.2, x:20, ease: Power4.easeOut})
		.to(".text1", 2, {opacity:1, scale:1, x:0, ease: Power3.easeOut})
		.to(".cta", 1, {scale:1, opacity:1, ease: Power4.easeOut}, "+=0.1")
		.to(".disclaimer", 2, {opacity:1, ease: Power3.easeOut}, "+=3");

		var tl2 = new TimelineMax({delay: 2, repeat: -1}),
		loop = 0,
		loopMax = 5;

		tl2.to(".text1", 2, {opacity:0, scale:0.8, x:-20, ease: Power4.easeOut}, "+=2.5")
		.to(".text2", 2, {opacity:1, scale:1, x:0, ease: Power4.easeOut}, "-=1.3")
		.to(".text1", 0, {scale:1.2, x:20, ease: Power4.easeOut})
		.to(".text2", 2, {opacity:0, scale:0.8, x:-20, ease: Power4.easeOut}, "+=2.5")
		.to(".text1", 2, {opacity:1, scale:1, x:0, ease: Power4.easeOut}, "-=1.3")
		.to(".text2", 0, {scale:1.2, x:20, ease: Power4.easeOut})
		.call(loopChecktl2);

		function loopChecktl2() {
			loop++;
			if (loop < loopMax) {
				tl2.play();
			} else {
				tl2.addPause(5);
			}
		};

		var tl3 = new TimelineMax({delay: 2, repeat: -1}),
		loop = 0,
		loopMax = 5;

		tl3.to(".ctext1", 2, {y:50, ease: Power4.easeOut}, "+=2.5")
		.to(".ctext2", 2, {y:0, ease: Power4.easeOut}, "-=1.3")
		.to(".ctext1", 0, {y:-50, ease: Power4.easeOut})
		.to(".ctext2", 2, {y:50, ease: Power4.easeOut}, "+=2.5")
		.to(".ctext1", 2, {y:0, ease: Power4.easeOut}, "-=1.3")
		.call(loopChecktl3);

		function loopChecktl3() {
			loop++;
			if (loop < loopMax) {
				tl3.play();
			} else {
				tl3.addPause(5);
			}
		};

		// mouseover
		var wrapper = document.getElementsByClassName("wrapper")[0];

		wrapper.onmouseover = function(){
			TweenMax.to(".cta", 0.5, {css:{scale: 0.9}, ease: Power1.easeOut});
		}
		wrapper.onmouseout = function(){
			TweenMax.to(".cta", 0.5, {css:{scale: 1}, ease: Power1.easeOut});
		}

		CSSPlugin.defaultForce3D = false;
// });

//enable PoliteLoad
// dhtml.external.initPoliteMode();
