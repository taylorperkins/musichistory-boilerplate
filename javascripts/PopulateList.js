"use strict";




var Music = (function(PopulateMusic) {

	
	//===============================//
	//===========VARIABLES===========//
	//===============================//
	

	PopulateMusic.numOfSongsOnPage = 0;

	
	//===============================//
	//===========FUNCTIONS===========//
	//===============================//


	PopulateMusic.populateUserList = function(song, counter) {
	
		let songStructure =   `<div class="songContainer">
									<h2 id="song--${counter}">${song.title}</h2>
									<p id="artist--${counter}">${song.artist}</p>
									<p id="album--${counter}">${song.album}</p>
								</div>`;
		Music.numOfSongsOnPage++;

		var mainContentWrapper = document.getElementById("main-content");
		mainContentWrapper.innerHTML += songStructure;
	};

	PopulateMusic.populateJsonList = function() {
		let songsToUpdate = Music.grabJson();

		console.log("You are about to populate");

		let myMusic = songsToUpdate.myMusic;
		console.log(myMusic);

		var taylorSong1 = {album: "NewBorn Sun", artist: "Chon", title: "Bubble Dream"};
		var taylorSong2 = {album: "MuteMath", artist: "MuteMath", title: "Chaos"};
		myMusic.unshift(taylorSong1);
		myMusic.push(taylorSong2);

		for (var song = 0; song < myMusic.length; song++) {
			Music.populateUserList(myMusic[song], Music.numOfSongsOnPage);
		}
	};

	//============================//
	//===========RETURN===========//
	//============================//

	return PopulateMusic;

})(Music || {});













