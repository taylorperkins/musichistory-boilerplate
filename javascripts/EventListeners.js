"use strict";



var Music = (function(List) {
	List.connected = function() {
		return "I am connected!";
	};	

	//===============================//
	//===========VARIABLES===========//
	//===============================//

	var header = document.getElementById("nav-header");
	
	//===============================//
	//===========FUNCTIONS===========//
	//===============================//

	List.eventListeners = {
		populateHomePage: function() {
			console.log("populate songs");
			window.onload = Music.populateSongs;
		},
		updateHeader: function(headerName) {
			var addPage = document.getElementById("add-page");
			var homePage = document.getElementById("list-page");
			if (headerName === "ADD") {
				addPage.classList.toggle("hidden");
				homePage.classList.toggle("hidden");
			} else if (headerName === "LIST") {
				homePage.classList.toggle("hidden");
				addPage.classList.toggle("hidden");
			}
		}, 
		deleteSongs: function() {
			if (event.target.classList.contains("song-delete")) {
				let mainContent = document.getElementById("main-content");
				mainContent.removeChild(event.target.parentNode);	
			}
		}, 
		uploadSecondJson: function() {
			Music.populateUserList("myMusic2");
		}
	};

	//============================//
	//===========RETURN===========//
	//============================//

	return List;

})(Music || {});

Music.eventListeners.populateHomePage();


































