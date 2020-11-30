// defining my variablces/ options 
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*_+=~<>|/";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var selected = " ";
     if (document.getElementById("uppercaseSwitch").checked) {
        selected += uppercase;
    }

    if (document.getElementById("lowercaseSwitch").checked) {
        selected += lowercase;
    }

    if (document.getElementById("numberSwitch").checked) {
        selected += numbers;
    }

    if (document.getElementById("symbolSwitch").checked) {
        selected += symbols;
    }

    console.log("generating password...");
    var password = "";
    var length = parseInt(document.getElementById("length").value);

    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * selected.length); 
        password += selected[random]; 
    }

    return password;
}

function copypassword() {

    document.getElementById("password").select(); 
    document.execCommand("Copy");
    alert("Password Copied to Clipboard!");

}