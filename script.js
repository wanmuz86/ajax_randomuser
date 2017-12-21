var buttonlike = document.getElementById("button1");
var button = document.getElementById("button2");
var nameDiv = document.getElementById("name");
var locationSpan = document.getElementById("location");
var dobSpan = document.getElementById("dob");
var cellSpan = document.getElementById("cell");
var emailSpan = document.getElementById("email");
var image = document.getElementsByTagName("img")[0];
var table = document.getElementById("favTable")

var favArray;

if (localStorage.favourite){
	favArray = localStorage.favourite;
	loadUsers();
}
else {
	favArray = [];
}

function loadUsers(){
	for (i=0; i< favArray.length;i++){
		
	}
}

buttonlike.addEventListener("click", function(){
	var name = document.getElementById("name").innerHTML;
	var location = document.getElementById("location").innerHTML;
	var dob = document.getElementById("dob").innerHTML;
	var cell = document.getElementById("cell").innerHTML;
	var email = document.getElementById("email").innerHTML;
	var newUser = {
		name:name,
		location:location,
		dob:dob,
		cell:cell,
		email:email
	}

	favArray.push(newUser);
	var newTr = document.createElement("tr");
	var nameTd = document.createElement("td");
	var locTd = document.createElement("td");
	var emailTd = document.createElement("td");
	var cellTd = document.createElement("td");
	var dobTd = document.createElement("td");

	nameTd.innerHTML = name;
	locTd.innerHTML = location;
	emailTd.innerHTML = email;
	dobTd.innerHTML = dob;
	cellTd.innerHTML = email;

	newTr.appendChild(nameTd);
	newTr.appendChild(locTd);
	newTr.appendChild(dobTd);
	newTr.appendChild(cellTd);
	newTr.appendChild(emailTd);

	table.appendChild(newTr);

	localStorage.setItem("favourite", JSON.stringify(favArray))
	loadDoc();
})
button.addEventListener("click", function(){
	loadDoc();
})

 function loadDoc() {
var xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
	console.log(this.response);
	var resultJSON = JSON.parse(this.response)
	var user = resultJSON["results"][0];
	nameDiv.innerHTML = user["name"]["title"]+" "+user["name"]["first"]+" "+user["name"]["last"]

	locationSpan.innerHTML = user["location"]["street"] + " "+user["location"]["city"]+ " "+user["location"]["postcode"];
	dobSpan.innerHTML = user["dob"];

	cellSpan.innerHTML = user["cell"];
	emailSpan.innerHTML = user["email"];
	image.src = user["picture"]["large"];
} };


xhttp.open("GET", "https://www.randomuser.me/api", true);
xhttp.send(); }

loadDoc();