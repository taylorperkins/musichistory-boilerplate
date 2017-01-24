var homeLink = document.getElementById("link-home");
var listLink = document.getElementById("link-list");
var addLink = document.getElementById("link-add");
var header = document.getElementById("nav-header");

var updateHeader = function(headerName) {
	var newSection = document.createElement("section");
	while (header.firstChild) {
		header.removeChild(header.firstChild);
	}
	newSection.innerHTML = headerName;
	header.appendChild(newSection);
}

homeLink.addEventListener("click", updateHeader("HOME"));
listLink.addEventListener("click", updateHeader("LINK"));
addLink.addEventListener("click", updateHeader("ADD"));









































