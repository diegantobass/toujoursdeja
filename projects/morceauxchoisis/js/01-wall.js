window.addEvent("domready", function(){
    var howManyPics = 16717;
    var randomizer = createRandomizer(howManyPics);
    var mywall = new Wall("wall", {
                    "draggable":true,
                    "inertia":true,
                    "width":250,
                    "height":250,
                    "rangex":[-300,300],
                    "rangey":[-300,300],
                    callOnUpdate: function(items){
                        items.each(function(e, i){
                            var pictureNumber = randomizer.pop()
                            var img = "img[src=pictures/" + pictureNumber + ".jpg]"
                            var a = new Element(img);
                            a.inject(e.node).fade("hide").fade("in");
                            a.addEvent("dblclick", function(){
                                launchGallery(pictureNumber + '.jpg');
                                // window.open(big);
                            });
                            if (randomizer.length === 1) {
                                randomizer = createRandomizer(howManyPics);
                            }
                        }.bind(this));
                    }
                });
    mywall.initWall();
});

function createRandomizer(numPictures) {
    var randomizer = [];
    for (var i = numPictures - 1; i >= 0; i--) {
        randomizer.push(i);
    };
    shuffle(randomizer);
    return randomizer;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

function generatePictures(jsonPictures) {
	var items = {};
  $.getJSON(jsonPictures, function(data){
		$.each(data, function(index, object){
      items[index] = object;
		});
	});
	return items;
};

function generateAlbums(jsonAlbums){
	var items = {};
	$.getJSON(jsonAlbums, function(data){
		$.each(data, function(index, object){
			var serie = {};
      serie["pictures"] = object.pictures;
      serie["name"] = object.name;
			items[object.name] = serie;
		});
	});
	return items;
};

function launchGallery(item) {
	var pswpElement = document.querySelectorAll('.pswp')[0];

  var pictureIndexInItsAlbum = parseInt(albums[pictures[item].album].pictures.findIndex(x => x.src === 'pictures/' + item), 10);
  galleryItems = albums[pictures[item].album].pictures;

	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, galleryItems);
  gallery.options.index = pictureIndexInItsAlbum;
  gallery.init();
  var newShareButtons = [gallery.options.shareButtons[3]];
  gallery.options.shareButtons = newShareButtons;

};
