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

	PopulateMusic.populateJsonList = function(dataName) {
		let songsToUpdate = Music.grabJson(dataName);

		for (var song = 0; song < songsToUpdate.length; song++) {
			Music.populateUserList(songsToUpdate[song], Music.numOfSongsOnPage);
		}
	};


	//============================//
	//===========RETURN===========//
	//============================//

	return PopulateMusic;

})(Music || {});













