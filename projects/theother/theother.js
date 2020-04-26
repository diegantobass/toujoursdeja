function createProject(project){
	var td = document.createElement('td');
	var div_img = document.createElement('div');
	var div_descript = document.createElement('div');
	var img = document.createElement('img');
	var p1 = document.createElement('p');
	var p2 = document.createElement('p');
	td.className = project.type;
	p1.className = "title";
	p2.className = "descript";
	div_img.className = project.type + '_img';
	div_descript.className = project.type + '_descript';
	td.onclick = function() { launchGallery(project.name);};
	p1.innerHTML = project.name;
	p2.innerHTML = project.description;
	img.src = project.pictures + 'cover.jpg';
	div_img.appendChild(img);
	div_descript.appendChild(p1);
	div_descript.appendChild(p2);
	td.appendChild(div_img);
	td.appendChild(div_descript);
	return td;
};

function createProjects(jsonFile){
	var tr = document.createElement('tr');
	tr.className = "slitray_shelf";
	$.getJSON(jsonFile, function(data){
		$.each(data.projects, function(index, object) {
  			var project = createProject(object);
  			tr.appendChild(project);
  		});
  	});
  	return tr;
};

function generateSerie(serieObject) {
	var items = [];

	var height = 1500;
	if (serieObject.name === "If 6 was 9") {
		height = 2200;
	};

	for (i = 1; i <= serieObject.number; i++) {
		var src_img = serieObject.pictures + i + '.jpg';
		var image = {
			src: src_img,
			w: 1500,
			h: height
		};
		items.push(image);
	}
	return items;
};

function generateItems(jsonFile){
	var items = {};
	$.getJSON(jsonFile, function(data){
		$.each(data.projects, function(index, object){
			var serie = generateSerie(object);
			serieName = object.name;
			items[serieName] = serie;
		});
	});
	return items;
};

function launchGallery(item) {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	console.log(series[item]);
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, series[item]);
	gallery.init();
};