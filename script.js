// Get user credentials
var passWord = document.getElementById('password');
var userName = document.getElementById('name');
var submit = document.getElementById("submitButton");

var userData = [
{
"name": "Wim",
"password":"Wim123"
}
];

function userSigonDetails(username, password) {
	this.username1 = username;
	this.password1 = password;
}
userSigonDetails(userName, passWord);

function getUserDetails(){
	userData.push({"name": username1.value, "password": password1.value});
	passWord.value = "";
	userName.value = "";
}
submit.addEventListener("click", getUserDetails);