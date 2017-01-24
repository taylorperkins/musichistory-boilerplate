var homeLink = document.getElementById("link-home");
var listLink = document.getElementById("link-list");
var addLink = document.getElementById("link-add");
var header = document.getElementById("nav-header");
var mainContent = document.getElementById("main-content");

var updateHeader = function(headerName) {
	var newSection = document.createElement("section");
	while (header.firstChild) {
		header.removeChild(header.firstChild);
	}
	if (document.title === "Music History") {
		newSection.innerHTML = "HOME";
	} else if (document.title === "Music List") {
		newSection.innerHTML = "LIST";
	} else if (document.title === "Music Add") {
		newSection.innerHTML = "ADD";
	}
	header.appendChild(newSection);
}

homeLink.addEventListener("click", updateHeader("HOME"));
listLink.addEventListener("click", updateHeader("LINK"));
addLink.addEventListener("click", updateHeader("ADD"));






/*
This file takes a bunch of songs and their descriptions,
adds them to an array, picks out the bad characters, 
then displays each string onto the index.html page
in the form of a list item.
*/

//Original song array
var songs = [];
//Array to keep "clean" songs
var newSongs = [];

//Retrieving the <ul> element to connect the 
//newSongs array to
var element = document.getElementById("songs");

//Original song list, notice bad characters
songs[songs.length] = "Legs > Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > Alanis Moris*ette on the album Jagged Little Pill";

//Putting new songs at the beginning and end of songs[]
songs.unshift("Bubble Dream > Chon on the album Newborn Sun");
songs.push("Chaos > MuteMath on the album MuteMath");



console.log("songs with artists and albums", songs);

// Letter Validation Function
function onlyLetters() {
	//Iterating through each string set in array songs
	for (var song = 0; song < songs.length; song++) {  
		//Using regular expressions to both replace >
		//with -
		//and taking out remaining unwanted characters
		var y = songs[song].replace(/>/g, "-").replace(/\*|!|@|\(|/g, "");
		//Add the new song-string to our list
		newSongs.push(y);
	}
};
onlyLetters();



var songs = [];
newSongs.forEach(function(song) {
	var mySongObject = {};

	//grab song name
	var firstSearch = "-";
	var secondSearch = "on the album";
    var patternPlace = song.indexOf(firstSearch);
    var songName = song.substring(0, patternPlace - 1);
    mySongObject.song = songName;
    console.log(songName, "| song name length:", songName.length);

    //grab artist name
    var artistStartingPoint = (patternPlace + firstSearch.length + 1);
    var artistEndPoint = song.indexOf(secondSearch) - 1
    var artistName = song.substring(artistStartingPoint, artistEndPoint);
    mySongObject.artist = artistName;
    console.log(artistName, "| artist name length: ", artistName.length);

    //grab album name
    var albumStartingPoint = (artistEndPoint + secondSearch.length + 2);
    var albumEndPoint = song.length;
    var albumName = song.substring(albumStartingPoint, song.length);
    mySongObject.album = albumName;
    console.log(albumName, "| album name length: ", albumName.length);
    console.log("==========")
    console.log(mySongObject);
    console.log("==========");

    songs.push(mySongObject);
   // return (firstSection + artistName);
});

console.log(songs);

//Create counter to help label song id names
var counter = 1;
songs.forEach(function(song){

	//create song container with custom class name
	var songContainer = document.createElement("DIV");
	songContainer.className = "songContainer";
	songContainer.id = ("songContainer--" + counter);

	//create new <p> for each key in song (song, artist, album)
	var songName = document.createElement("H2");
	songName.id = ("song--" + counter);
	songName.innerHTML = song.song;

	var artistName = document.createElement("P");
	artistName.id = ("artist--" + counter);
	artistName.innerHTML = (song.artist);

	var albumName = document.createElement("P");
	albumName.id = ("album--" + counter);
	albumName.innerHTML = (song.album);

	mainContent.appendChild(songContainer);

	songContainer.appendChild(songName);
	songContainer.appendChild(artistName);
	songContainer.appendChild(albumName);
	counter++;
});











































