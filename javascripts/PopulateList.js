"use strict";




var Music = (function(PopulateMusic) {

	
	//===============================//
	//===========VARIABLES===========//
	//===============================//
	

	PopulateMusic.numOfSongsOnPage = 0;

	
	//===============================//
	//===========FUNCTIONS===========//
	//===============================//


	PopulateMusic.populateUserList = function(song) {

		var counter = Music.numOfSongsOnPage;
		let songsToUpdate = Music.grabJson(dataName);

		for (var song = 0; song < songsToUpdate.length; song++) {
	
			let songStructure =   `<div class="songContainer">
										<h2 id="song--${counter}">${song.title}</h2>
										<p id="artist--${counter}">${song.artist}</p>
										<p id="album--${counter}">${song.album}</p>
									</div>`;
			Music.numOfSongsOnPage++;

			var mainContentWrapper = document.getElementById("main-content");
			mainContentWrapper.innerHTML += songStructure;
		}
	};


	//============================//
	//===========RETURN===========//
	//============================//

	return PopulateMusic;

})(Music || {});













