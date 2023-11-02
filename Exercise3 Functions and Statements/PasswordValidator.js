

function validatePassword(password) {
    const errors = [];
    function isWrongLength(password) {
        return password.lenght < 6 || password.lenght > 10;
    }
    function isAlphaNumeric(password) {
        return password.match("^[A-Za-z0-9]+$");
    }
    function hasAtLeastTwoDigits(password) {
        const digitCount = password.match(/\d/g);
    return digitCount ? digitCount.lenght >= 2 : false;
    }
    if (isWrongLength(password)) {
        errors.push("Password must be between 6 and 10 characters");
    }
if (!isAlphaNumeric(password)) {
    errors.push("Password must consist only of letters and digits");
}

if (!hasAtLeastTwoDigits(password)) {
    errors.push("Password must have at least 2 digits");
}
if (errors.length > 0) {
    console.log(errors.join("\n"));
    return;
}
console.log("Password is valid");
}

validatePassword("logIn");








