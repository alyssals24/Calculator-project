let currentinput = '';
let currentsentence = document.createElement('p');

// if the '1' button is clicked, add '1' to the current input and display it
function input1() {
    currentinput = currentinput + '1';
    updatesentence();
}

function input2() {
    currentinput = currentinput + '2';
    updatesentence();
}

function input3() {
    currentinput = currentinput + '3';
    updatesentence();
}

function input4() {
    currentinput = currentinput + '4';
    updatesentence();
}

function input5() {
    currentinput = currentinput + '5';
    updatesentence();
}

function input6() {
    currentinput = currentinput + '6';
    updatesentence();
}

function input7() {
    currentinput = currentinput + '7';
    updatesentence();
}

function input8() {
    currentinput = currentinput + '8';
    updatesentence();
}

function input9() {
    currentinput = currentinput + '9';
    updatesentence();
}

function input0() {
    currentinput = currentinput + '0';
    updatesentence();
}

function inputplus() {
    currentinput = currentinput + '+';
    updatesentence();
}

function inputminus() {
    currentinput = currentinput + '-';
    updatesentence();
}

function inputtimes() {
    currentinput = currentinput + '*';
    updatesentence();
}

function inputdivide() {
    currentinput = currentinput + '/';
    updatesentence();
}

// removes the last number or sign from the current input
function deleteprev() {
    currentinput = currentinput.slice(0,-1);
    updatesentence();
}

// removes everything from the current input
function clearnum() {
    currentinput = '';
    updatesentence();
}

// when the '=' button is clicked, calulate the answer and display it
function inputequal() {
    let answer = currentinput[0];
    answer = calculateanswer();
    const answerpara = document.createElement('p');
    answerpara.innerHTML = '= ' + answer.toString();
    document.getElementById('numberoutput').appendChild(answerpara);
    currentinput = '';

}

// calculates the answer and reutrns it
function calculateanswer() {
    let answer = 0;
    answer = math.evaluate(currentinput);
    return answer;
}

// updates the current equation input and displays it
function updatesentence() {
    let numout = document.getElementById('numberoutput');
    let sentence = '';
    while (numout.firstChild) {
        numout.removeChild(numout.firstChild);
    }
    for (let i = 0; i < currentinput.length; i++) {
        if (currentinput[i] == '*') { // if 'times' is inputted, display 'x' instead of '*'
            sentence = sentence + 'x '
        } else {
            sentence = sentence + currentinput[i] + ' ';
        }
    }
    currentsentence.innerHTML = sentence;
    numout.appendChild(currentsentence);
}
