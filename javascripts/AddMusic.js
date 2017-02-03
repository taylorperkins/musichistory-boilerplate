"use strict";



var Music = (function(AddMusic) {

	
	//===============================//
	//===========VARIABLES===========//
	//===============================//
	

	//Array to keep all user's songs
	let userSongs = [];

	
	//===============================//
	//===========FUNCTIONS===========//
	//===============================//

	AddMusic.updateSongs = function() {
		let counter = Music.numOfJsonSongs;

		if (document.getElementsByName("song-input")[0].value === "" ||
			document.getElementsByName("song-input")[1].value === "" ||
			document.getElementsByName("song-input")[2].value === "") {
			alert("Don't leave out anything!!");
		} else {
			var song = {};
			song.title = document.getElementsByName("song-input")[0].value;
			song.artist = document.getElementsByName("song-input")[1].value;
			song.album = document.getElementsByName("song-input")[2].value;

			userSongs.push(song);
			console.log(userSongs);
			Music.populateUserList(song, Music.numOfSongsOnPage);
		}
	};

	//function to return array of objects that 
	//contain all of user's personal songs
	AddMusic.personalSongs = function() {
		return userSongs;
	};
	//============================//
	//===========RETURN===========//
	//============================//

	return AddMusic;


})(Music || {});


























