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