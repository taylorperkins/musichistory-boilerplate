"use strict";



var Music = (function(LoadJson) {
	
	//=================================//
	//===========JSON UPLOAD===========//
	//=================================//

	let myData = {};


	let parseJSON = function(customVariable){
		console.log("We have the data.");
		myData[customVariable] = JSON.parse(event.currentTarget.responseText);
		console.log(myData[customVariable], myData);
	};
	
	LoadJson.loadMusic = function(fileName, customVariable) {
		let musicData = new XMLHttpRequest();
		musicData.addEventListener("load", function(event) {
			parseJSON(customVariable);
			Music.populateJsonList();
		});
		musicData.open("GET", fileName);
		musicData.send(); 
	};

	LoadJson.grabJson = function() {
		return myData;
	};

	return LoadJson;

})(Music || {});

window.onload = Music.loadMusic("../songs.json", "myMusic");
