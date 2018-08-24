var data = dhtml.data;

//Here we are bulding AdMessage

dhtml.adMessage = Adform.AdMessage.build({
				cid: dhtml.getVar('cid', 16530),
				tid: dhtml.getVar('tid', 18133),
				bn: dhtml.getVar('bn', 0),
				dcoEngineId: dhtml.getVar('dcoEngineId', 2),
				domain: dhtml.getVar('domain', 'http://track.adform.net/banners/'),
				rotseqno: dhtml.getVar('rotseqno', 0),
				smid: dhtml.getVar('smid', 0),
				clickTAG: dhtml.getVar('clickTAG', 'http://www.adform.com/'),
			});
// http://s1.adform.net/Banners/Elements/Templates/12821/18176.xml is used in this banner

/**
 * Adform Products helper, setups the AdMessage, Product Scroller
 * with ScrollItems and calls the callback function
 */
dhtml.setupProducts({
	container: dhtml.byId('productsContainer'),
	layout: dhtml.getVar('layout', 'vertical'),
	pageSize:   parseInt(dhtml.getVar('pageSize', 1), 10), //How many products to show
	stepSize:   parseInt(dhtml.getVar('stepSize', 1), 10), //how many products to scroll
	perItem:    parseInt(dhtml.getVar('perItem', 0), 10), //There can be several products shown per one item
	duration:   parseInt(dhtml.getVar('duration', 0), 10), //Animation speed
	autoScroll: parseInt(dhtml.getVar('autoScroll', 0), 10) //If autoscroll should be enabled
  }, productsCallback);

/**
 * setupProducts callback function
 * 
 * error - error object
 * productsInstance - AdformScroller instance
 */
function productsCallback(error, productsInstance) {
  if (error) {
	dhtml.addClass(dhtml.byId('wrapper'), 'error');
	dhtml.byId('wrapper').innerHTML = error.message;
  } else {
	var prev = dhtml.byId('prev');
	var next = dhtml.byId('next');

	/**
	 * itemShow event is emited for each item that is currently
	 * visible in the view/mask and additionally for items
	 * that must be pre-cached, for smooth animation.
	 *
	 * node - HTMLElement of Products Scroller
	 * data - loaded items from AdMessage service
	 */
	productsInstance.on('itemShow', function (node, data) {
	  node.innerHTML = dhtml.mustache('item', {
		products: data,
		target : dhtml.getVar('landingPageTarget', '_blank')
	  });
	});

	/**
	 * itemHide event is emited for each item that is not used in animetion. 
	 */
	productsInstance.on('itemHide', function (node) {
	  node.innerHTML = '';
	});

	/**
	 * scroll is emitted on every scroll action.
	 */
	productsInstance.on('scroll', function (currentIndex, nextIndex, maxIndex) {
	  if ( ! nextIndex) {
		dhtml.addClass(prev, 'disabled');
	  } else {
		dhtml.removeClass(prev, 'disabled');
	  }

	  if ( ! (nextIndex - maxIndex)) {
		dhtml.addClass(next, 'disabled');
	  } else {
		dhtml.removeClass(next, 'disabled');
	  }
	});
  }
}