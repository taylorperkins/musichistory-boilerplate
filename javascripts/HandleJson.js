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
			if (customVariable === "myMusic") {
				myData[customVariable].push({album: "MuteMath", artist: "MuteMath", title: "Chaos"});
				myData[customVariable].unshift({album: "NewBorn Sun", artist: "Chon", title: "Bubble Dream"});
				Music.populateJsonList(customVariable);
			}
		});
		musicData.open("GET", fileName);
		musicData.send(); 
	};

	LoadJson.grabJson = function(dataName) {
		return myData[dataName];
	};

	return LoadJson;

})(Music || {});

window.onload = Music.loadMusic("../songs.json", "myMusic");
window.onload = Music.loadMusic("../songs2.json", "myMusic2");
