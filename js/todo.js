const button = document.querySelector("button"); // selects the button
const list = document.querySelector("ul"); // selects the whole list
let chkBxs = document.querySelectorAll("ul > input"); // selects all check boxes inside the list
let allLists = document.querySelectorAll("li"); // selects each element of the list
let numOfItems = 0; // used to keep track of id's

button.onclick = function() {
	// create the check box
	let chkBx = document.createElement("input");
	chkBx.setAttribute("type","checkbox");
	chkBx.setAttribute("id",`chk${numOfItems}`);

	// create the delete
	let dlt = document.createElement("button");
	dlt.textContent = "Delete";
	dlt.setAttribute("id",`dlt${numOfItems}`);

	// create the paragraph 
	let para = document.createElement("p");
	let todo = document.querySelector("input").value;
	para.textContent = todo;
	para.setAttribute("id",`p${numOfItems}`);

	// create the list item and add everything
	let listAdd = document.createElement("li");
	listAdd.append(chkBx);
	listAdd.appendChild(para);
	listAdd.appendChild(dlt);
	listAdd.setAttribute("id",`list${numOfItems}`);
	list.appendChild(listAdd);

	// refreshs the variables
	numOfItems ++;
	chkBxs = document.querySelectorAll("li > input");
	allLists = document.querySelectorAll("li");
	console.log(chkBxs);
}


list.onclick = function(event) {
	if (event.target.nodeName == "INPUT") { // if they click on the check box
		let id = event.target.getAttribute("id").substring(3); // get the id, which is anything after the chk
		let thisList = document.querySelector(`#list${id}`); // get the specifc list
		let p = document.querySelector(`#p${id}`); // get the paragraph
		if(p.style.textDecoration != "line-through"){ // if it isn't already struck through
			p.style.textDecoration = "line-through"; // strike through
			list.appendChild(thisList); // move it to the bottom
		}
		else
			p.style.textDecoration = "none"; // add it back
	}
	else if (event.target.nodeName == "BUTTON") { // if it is the button
		let id = event.target.getAttribute("id").substring(3); // get the id
		let li = document.querySelector(`#list${id}`); // get the list
		li.remove(); // remove the list
	}
}
