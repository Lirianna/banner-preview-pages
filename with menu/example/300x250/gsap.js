var waitForMustache = setInterval(function(){

    var value = $('.tekst1').text();

    if(value.length > 0){
    	clearInterval(waitForMustache);

    	//Frame1

        var tl = new TimelineMax();

		tl.staggerTo(".txt", 1, {x: 279, ease:Back.easeOut}, 0.2)
		.to(".product_name", 1, {opacity: 1, x: -130, ease:Back.easeOut}, "-=1.8")
		.to(".pop", 1.750, {scale:1,ease:Elastic.easeOut})
		.to(".circle", 1.750, {scale:1,ease:Elastic.easeOut}, "-=1.4")
		.to(".circle", 0.750, {scale:1.2})
		.to(".circle", 0.750, {scale:1})
		.to(".circle", 0.750, {scale:1.2})
		.to(".circle", 0.750, {scale:1})

		.to(".circle", 0.750, {scale:1.2, delay: 1})
		.to(".circle", 0.750, {scale:1})
		.to(".circle", 0.750, {scale:1.2})
		.to(".circle", 0.750, {scale:1})

		var tl2 = new TimelineMax();

		tl2.staggerTo(".txt", 0.750, {x: 0, delay: 2, ease:Back.easeIn}, 0.2)
		.to(".product_name", 1, {x: -650, ease:Back.easeIn}, "-=1.8")
		.to(".circle", 0.500, {scale: 1.3, ease:Power0.easeIn}, "-=1.8")
		.to(".circle", 0.250, {scale: 0, ease:Power0.easeIn}, "-=1.3")
		.to(".pop", 0.500, {scale: 1.3, ease:Power0.easeIn}, "-=1.5")
		.to(".pop", 0.250, {scale: 0, ease:Power0.easeIn}, "-=1");

		var masterTimeline = new TimelineMax({repeat: -1}),
			loop = 0;
			loopMax = 2;

		masterTimeline.add(tl)
		.add(tl2)
		.call(loopCheck);

		function loopCheck() {
			console.log("loopCheck")
				loop++;
				if (loop < loopMax) {
					masterTimeline.play();
				} else {
					masterTimeline.addPause(4);
				}
		}
		//Hide %20
		var tekst2hide = document.getElementsByClassName("tekst2")[0];
		var hide = document.getElementsByClassName("tekst2")[0].innerHTML;
		var tekst1 = document.getElementsByClassName("tekst1")[0];
		var productName = document.getElementsByClassName("product_name")[0];

		if (hide.length < 4) {
			tekst2hide.style.display = 'none';
			tekst1.style.top = "23px";
			tekst1.style.lineHeight = "8px";
			productName.style.fontSize = "7px";
		}

		
    }
}, 10);




