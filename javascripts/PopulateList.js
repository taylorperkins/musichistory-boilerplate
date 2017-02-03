"use strict";




var Music = (function(PopulateMusic) {

	
	//===============================//
	//===========VARIABLES===========//
	//===============================//
	

	PopulateMusic.numOfSongsOnPage = 0;

	
	//===============================//
	//===========FUNCTIONS===========//
	//===============================//


	PopulateMusic.populateUserList = function(songs) {

		let songsToUpdate = Music.grabJson(songs);

		for (var song = 0; song < songsToUpdate.length; song++) {

			let currentSong = songsToUpdate[song];
			var counter = Music.numOfSongsOnPage;
	
			let songStructure =   `<div class="song-container">
										<div class="content-wrapper">
											<h2 id="song--${counter}">${currentSong.title}</h2>
											<p id="artist--${counter}">${currentSong.artist}</p>
											<p id="album--${counter}">${currentSong.album}</p>
										</div>
										<button class="song-delete">Delete</button>
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













