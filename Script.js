let currentinput = [];
let currentsentence = document.createElement('p');
function input1() {
    currentinput.push(1);
    updatesentence();
}

function input2() {
    currentinput.push(2);
    updatesentence();
}

function input3() {
    currentinput.push(3);
    updatesentence();
}

function input4() {
    currentinput.push(4);
    updatesentence();
}

function input5() {
    currentinput.push(5);
    updatesentence();
}

function input6() {
    currentinput.push(6);
    updatesentence();
}

function input7() {
    currentinput.push(7);
    updatesentence();
}

function input8() {
    currentinput.push(8);
    updatesentence();
}

function input9() {
    currentinput.push(9);
    updatesentence();
}

function input0() {
    currentinput.push(0);
    updatesentence();
}

function inputplus() {
    currentinput.push('+');
    updatesentence();
}

function inputminus() {
    currentinput.push('-');
    updatesentence();
}

function inputtimes() {
    currentinput.push('x');
    updatesentence();
}

function inputdivide() {
    currentinput.push('/');
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
    if (currentinput.length == 3) {
        answer = calculateanswer();
    }
    const answerpara = document.createElement('p');
    answerpara.innerHTML = '= ' + answer.toString();
    //answerpara.setAttribute("font-size", "24");
    //answerpara.setAttribute("font-weight", "bold");
    //answerpara.setAttribute("text-align", "center");
    document.getElementById('numberoutput').appendChild(answerpara);
    currentinput = [];

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
    return answer;
}

function updatesentence() {
    let numout = document.getElementById('numberoutput');
    let sentence = '';
    while (numout.firstChild) {
        numout.removeChild(numout.firstChild);
    }
    for (let i = 0; i < currentinput.length; i++) {
        sentence = sentence + currentinput[i] + ' ';
    }
    currentsentence.innerHTML = sentence;
    numout.appendChild(currentsentence);
}

function display(val) {

}
