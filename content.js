var sideNav = document.getElementsByClassName('leftSideBarParent');
var header = document.getElementById('MasterHead');
var secondaryContent = document.getElementById('secondary');
header.remove();
sideNav[0].remove();
secondaryContent.remove();

//Error handling - These errors already exists as part of GfG site
var elem = document.createElement("div");
elem.setAttribute("id", "feedbackButtonDiv");
document.body.appendChild(elem);
var elem1 = document.createElement("div");
elem1.setAttribute("id", "addNoteButtonDiv");
document.body.appendChild(elem1);
var elem2 = document.createElement("div");
elem2.setAttribute("id", "improveArticleButtonDiv");
document.body.appendChild(elem2);