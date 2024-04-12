let currentinput = '';
let currentsentence = document.createElement('p');
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

function updateDisplay(value) {
    document.getElementById("numberoutput")
}
function deleteprev() {
    currentinput.pop();
    updatesentence();
}

function clear() {
    currentinput = [];
    updatesentence();
}

function inputequal() {
    let answer = currentinput[0];
    console.log(currentinput);
    answer = calculateanswer();
    const answerpara = document.createElement('p');
    answerpara.innerHTML = '= ' + answer.toString();
    //answerpara.setAttribute("font-size", "24");
    //answerpara.setAttribute("font-weight", "bold");
    //answerpara.setAttribute("text-align", "center");
    document.getElementById('numberoutput').appendChild(answerpara);
    currentinput = '';

}

function calculateanswer() {
    let answer = 0;
    if (currentinput[1] == '+') {
        answer = currentinput[0] + currentinput[2];
    } else if (currentinput[1] == '-') {
        answer = currentinput[0] - currentinput[2];
    } else if (currentinput[1] == 'x') {
        answer = currentinput[0] * currentinput[2];
    } else {
        answer = currentinput[0] / currentinput[2];
    }
    answer = math.evaluate(currentinput);
    console.log(answer);
    return answer;
}

function updatesentence() {
    let numout = document.getElementById('numberoutput');
    let sentence = '';
    while (numout.firstChild) {
        numout.removeChild(numout.firstChild);
    }
    for (let i = 0; i < currentinput.length; i++) {
        if (currentinput[i] == '*') {
            sentence = sentence + 'X '
        } else {
            sentence = sentence + currentinput[i] + ' ';
        }
    }
    currentsentence.innerHTML = sentence;
    numout.appendChild(currentsentence);
}

function display(val) {

}
