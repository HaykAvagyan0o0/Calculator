var firstTag = document.getElementById("first");
var secondTag = document.getElementById("second");
var answerTag = document.getElementById("answer");

function isInputValid(firstNum, secondNum) {
    var isValid = false;

    if (isNaN(firstNum) && isNaN(secondNum)) {
        firstTag.style.borderColor = "red";
        secondTag.style.borderColor = "red";
        isValid = false;
        return isValid;
    } else if (!isNaN(firstNum) && !isNaN(secondTag)) {
        firstTag.style.borderColor = "black";
        secondTag.style.borderColor = "black";
        isValid = true;
    }

    if (isNaN(firstNum)) {
        firstTag.style.borderColor = "red";
        isValid = false;
    } else if (!isNaN(firstNum)) {
        firstTag.style.borderColor = "black";
        isValid = true;
    }

    if (isNaN(secondNum)) {
        secondTag.style.borderColor = "red";
        isValid = false;
    } else {
        secondTag.style.borderColor = "black";
        if (isValid) {
            isValid = true;
        }
    }

    console.log(isValid);
    console.log(firstNum);
    console.log(secondNum);

    return isValid;
}

function addition() {
    var firstNum = firstTag.valueAsNumber;
    var secondNum = secondTag.valueAsNumber;

    if (isInputValid(firstNum, secondNum)) {
        answerTag.innerHTML = firstNum + secondNum;
    }
}

function subtraction() {
    var firstNum = firstTag.valueAsNumber;
    var secondNum = secondTag.valueAsNumber;

    if (isInputValid(firstNum, secondNum)) {
        answerTag.innerHTML = firstNum - secondNum;
    }
}

function multiplication() {
    var firstNum = firstTag.valueAsNumber;
    var secondNum = secondTag.valueAsNumber;

    if (isInputValid(firstNum, secondNum)) {
        answerTag.innerHTML = firstNum * secondNum;
    }
}

function division() {
    var firstNum = firstTag.valueAsNumber;
    var secondNum = secondTag.valueAsNumber;

    if (isInputValid(firstNum, secondNum)) {
        answerTag.innerHTML = firstNum / secondNum;
    }
}