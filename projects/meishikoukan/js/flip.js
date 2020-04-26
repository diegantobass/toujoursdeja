var init = function() {
  var cards = document.getElementsByClassName('card');
  
  for (var i = 0; i < cards.length; i++) {
  	thecard = cards[i];
	  thecard.getElementsByClassName('front')[0].addEventListener('click', function(iday){
	    	document.getElementById(iday.target.parentNode.parentNode.id).toggleClassName('flipped');
	  	}, false);

	  thecard.getElementsByClassName('back')[0].addEventListener( 'click', function(iday){
	    	document.getElementById(iday.target.parentNode.parentNode.id).toggleClassName('flipped');
	  }, false);
	};
};

window.addEventListener('DOMContentLoaded', init, false);