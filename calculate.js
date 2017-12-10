var firstTag = document.getElementById("first");
var secondTag = document.getElementById("second");
var answerTag = document.getElementById("answer");

function isInputValid() {
    var isValid = false;

    if (firstTag.value != '' && secondTag.value != '') {
        isValid = true;
    }

    if (firstTag.value == '' && secondTag.value == '') {
        isValid = false;
        firstTag.style.borderColor = "red";
        secondTag.style.borderColor = "red";
    } else if (firstTag.value == '') {
        isValid = false;
        firstTag.style.borderColor = "red";
    } else if (secondTag.value == '') {
        isValid = false;
        secondTag.style.borderColor = "red";
    }

    return isValid;
}

function addition() {
    if (isInputValid()) {
        var firstNum = firstTag.valueAsNumber;
        var secondNum = secondTag.valueAsNumber;
        answerTag.innerHTML = firstNum + secondNum;
        firstTag.style.borderColor = "black";
        secondTag.style.borderColor = "black";
    }
}

function subtraction() {
    if (isInputValid()) {
        var firstNum = firstTag.valueAsNumber;
        var secondNum = secondTag.valueAsNumber;
        answerTag.innerHTML = firstNum - secondNum;
        firstTag.style.borderColor = "black";
        secondTag.style.borderColor = "black";
    }
}

function multiplication() {
    if (isInputValid()) {
        var firstNum = firstTag.valueAsNumber;
        var secondNum = secondTag.valueAsNumber;
        answerTag.innerHTML = firstNum * secondNum;
        firstTag.style.borderColor = "black";
        secondTag.style.borderColor = "black";
    }
}

function division() {
    if (isInputValid()) {
        var firstNum = firstTag.valueAsNumber;
        var secondNum = secondTag.valueAsNumber;
        answerTag.innerHTML = firstNum / secondNum;
        firstTag.style.borderColor = "black";
        secondTag.style.borderColor = "black";
    }
}