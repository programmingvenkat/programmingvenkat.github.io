
//var thisPage = "Home";
var navbarList = $("#nav-js-list");
function appendNavList(link, name){
	var newLink = document.createElement("li");
	var newAnchor = document.createElement("a");
	if (thisPage === name){
		newLink.className += " active";
		newAnchor.href = '#';
	}
	if (thisPage === "Home"){
		newAnchor.href = "pages/" + link;
	} else{
		newAnchor.href = link;
	}
	var linkName = document.createTextNode(name);
	newLink.appendChild(newAnchor);
	newAnchor.appendChild(linkName);

	document.getElementById('nav-js-list').appendChild(newLink);
}
appendNavList("../index.html", "Home");
appendNavList("forum.html", "Forum");
appendNavList("about.html", "About");


