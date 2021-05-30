// Assignment code here
var passLength = function () {
    var choiceLength = prompt("Choose a Password length 8 - 128");

    while (choiceLength < 8 || choiceLength > 128) {
        var choiceLength = prompt("Incorrect length. Choose a Password length 8 - 128");
    }

    choiceLength = parseInt(choiceLength);
    console.log(choiceLength);

    return choiceLength;
};

var charTypeLower = function () {
    var choiceType = prompt("Do you want to include lowercase characters? Types yes or no");

    choiceType = choiceType.toLowerCase();
    console.log(choiceType);

    if (choiceType === "" || choiceType === null) {
        alert("Incorrect answer. Try again!");
        return charTypeLower();
    }

    if (choiceType === "yes") {
        return true;
    }
    else {
        return false;
    }
};

var charTypeUpper = function () {
    var choiceType = prompt("Do you want to include uppercase characters? Types yes or no");

    choiceType = choiceType.toLowerCase();
    console.log(choiceType);

    if (choiceType === "" || choiceType === null) {
        var choiceType = alert("Incorrect answer. Try again!");
        return charTypeUpper();
    }

    if (choiceType === "yes") {
        return true;
    }
    else {
        return false;
    }
};

var numChoice = function() {
    var choiceType = prompt("Do you want to include numeric values? Types yes or no");

    choiceType = choiceType.toLowerCase();
    console.log(choiceType);

    if (choiceType === "" || choiceType === null) {
        var choiceType = alert("Incorrect answer. Try again!");
        return charTypeUpper();
    }

    if (choiceType === "yes") {
        return true;
    }
    else {
        return false;
    }
};

var generatePassword = function () {
    var passwordLength = passLength();
    var charChoiceLower = charTypeLower();
    var charChoiceUpper = charTypeUpper();
    var numVal = numChoice ();

    // PasswordLength has a value 8 - 128
    // Other functions return true for yes and false for no

    return 0;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);