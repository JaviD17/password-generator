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

var symFun = function () {
    var choiceType = prompt("Do you want to include symbols? Types yes or no");

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

var numChoice = function () {
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
    var symChoice = symFun();
    var numVal = numChoice();

    // PasswordLength has a value 8 - 128
    // Other functions return true for yes and false for no
    // character sets
    var lowerSet = "abcdefghijklmnopqrstuvwxyz";
    var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var symbolSet = " !&quot;#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numSet = "0123456789";
    var retVal = "";

    debugger;

    // All four questions are yes
    if (charChoiceLower === true && charChoiceUpper === true && symChoice === true && numVal === true) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = lowerSet.concat(upperSet, symbolSet, numSet);
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // no numbers
    if (charChoiceLower === true && charChoiceUpper === true && symChoice === true && numVal === false) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = lowerSet.concat(upperSet, symbolSet);
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // no symbols
    if (charChoiceLower === true && charChoiceUpper === true && symChoice === false && numVal === true) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = lowerSet.concat(upperSet, numSet);
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // only lower case
    if (charChoiceLower === true && charChoiceUpper === false && symChoice === false && numVal === false) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = lowerSet;
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // no upper case
    if (charChoiceLower === true && charChoiceUpper === false && symChoice === true && numVal === true) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = lowerSet.concat(symbolSet, numSet);
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // no upper case or numbers
    if (charChoiceLower === true && charChoiceUpper === false && symChoice === true && numVal === false) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = lowerSet.concat(symbolSet);
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // no lower case or symbols
    if (charChoiceLower === false && charChoiceUpper === true && symChoice === false && numVal === true) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = upperSet.concat(numSet);
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // only upper case
    if (charChoiceLower === false && charChoiceUpper === true && symChoice === false && numVal === false) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = upperSet;
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // no lower case
    if (charChoiceLower === false && charChoiceUpper === true && symChoice === true && numVal === true) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = upperSet.concat(symbolSet, numSet);
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // only symbols
    if (charChoiceLower === false && charChoiceUpper === false && symChoice === true && numVal === false) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = symbolSet;
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // only numbers
    if (charChoiceLower === false && charChoiceUpper === false && symChoice === false && numVal === true) {
        for (var i = 0; i < (passwordLength + 1); i++) {
            var charSet = numSet;
            retVal += (charSet.charAt(Math.floor(Math.random() * 96) + 1));
        }
    }

    // all four questions are no
    if (charChoiceLower === false && charChoiceUpper === false && symChoice === false && numVal === false) {
        alert("No characters to choose from. You need at least one yes. Try again!");
        generatePassword();
    }
    return retVal;
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