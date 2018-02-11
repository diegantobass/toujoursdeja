var typesContenu = ["photocontent", "audiocontent", "textocontent"];

function projectTypeSwitch(type) {
	var typesRestants = typesContenu.filter(function(x) { return x !== type; });
	$.each(typesRestants, function(indexType, valueType){
		hideButtons(indexType, valueType);
		hideProjects(type, indexType, valueType);
	});
};

function hideButtons(indexType, valueType){
	$("#"+valueType+"button").each(function(index, value){
		if(value.style.visibility === "hidden") {
			value.style.visibility = "visible";
	    }
	    else {
	        value.style.visibility = "hidden";
	    }		
	});
};

function hideProjects(type, indexType, valueType){
	$("."+valueType).each(function(index, value){
		if(value.style.display === "none") {
			// $("#"+type+"button")[0].style.color = "#000000";
			value.style.display = "inline-block";
	    }
	    else {
	    	// $("#"+type+"button")[0].style.color = "#808080"
	        value.style.display = "none";
	    }			    
	});
};

function createProject(project){
	var a = document.createElement('a');
	var td = document.createElement('td');
	var p1 = document.createElement('p');
	var p2 = document.createElement('p');
	var div = document.createElement('div');
	a.href = project.page;
	td.className = project.type;
	p1.className = "title";
	p2.className = "descript";
	div.className = "project";
	p1.innerHTML = project.name;
	p2.innerHTML = project.description;
	div.appendChild(p1);
	div.appendChild(p2);
	td.appendChild(div);
	a.appendChild(td);
	return a;
};

function createProjects(jsonFile){
	var tr = document.createElement('tr');
	$.getJSON(jsonFile, function(data){
		$.each(data.projects, function(index, object) {
  			var project = createProject(object);
  			tr.appendChild(project);
  		});
  	});
  	return tr;
};
