const screen = document.getElementById("screen-text")

const onOffButton = document.getElementById("on-off-btn")
const onOfButtonText = document.getElementById("on-text");


const clearButton = document.getElementById("clear")
const negButton = document.getElementById("neg")
const posButton = document.getElementById("pos")
const sevenButton = document.getElementById("7")
const eightButton = document.getElementById("8")
const nineButton = document.getElementById("9")
const fourButton = document.getElementById("4")
const fiveButton = document.getElementById("5")
const sixButton = document.getElementById("6")
const oneButton = document.getElementById("1")
const twoButton = document.getElementById("2")
const threeButton = document.getElementById("3")
const zedButton = document.getElementById("zed")
const dubZedButton = document.getElementById("dubZed")
const decimalButton = document.getElementById("decimal")
const aButton = document.getElementById("A")
const bButton = document.getElementById("B")
const percentButton = document.getElementById("percent")
const sqrRootButton = document.getElementById("sqr-root")
const multiplyButton = document.getElementById("multiply")
const divideButton = document.getElementById("divide")
const addButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const equalsButton = document.getElementById("equals")

let firstNumber = '';
let secondNumber = '';
let output;
let operation = '';
let working = 'no';

onOffButton.addEventListener("click", () => {
  console.log("on!");
  onOffButton.classList.toggle("on")
  if (onOfButtonText.textContent === 'On') {
    onOfButtonText.textContent = 'Off'
    working = 'no'
    screen.textContent = ''
  } else {
    onOfButtonText.textContent = 'On'
    working = 'yes'

  }
})

function setNumber(num) {

  if (working === 'no') {
    return
  } else {
    if (operation !== '') {
      secondNumber += `${num}`;
      screen.textContent = secondNumber;

      if (secondNumber.toString().length > 10) {
        screen.textContent = '..' + secondNumber.slice(secondNumber.length - 8, secondNumber.length)
      }
    } else {
      firstNumber += `${num}`;
      screen.textContent = firstNumber;
      secondNumber = ''

      if (firstNumber.toString().length > 10) {
        screen.textContent = '..' + firstNumber.slice(firstNumber.length - 8, firstNumber.length)
      }
    }
  }
}

sevenButton.addEventListener("click", () => {
  setNumber(7)
});

eightButton.addEventListener("click", () => {
  setNumber(8)
});

nineButton.addEventListener("click", () => {
  setNumber(9)
});

fourButton.addEventListener("click", () => {
  setNumber(4)
});

fiveButton.addEventListener("click", () => {
  setNumber(5)
});

sixButton.addEventListener("click", () => {
  setNumber(6)
});

oneButton.addEventListener("click", () => {
  setNumber(1)
});

twoButton.addEventListener("click", () => {
  setNumber(2)
});

threeButton.addEventListener("click", () => {
  setNumber(3)
});

zedButton.addEventListener("click", () => {
  setNumber(0)
});

dubZedButton.addEventListener("click", () => {
  setNumber('00')
});

addButton.addEventListener("click", () => {
  operation = "add"
  secondNumber = ''
})

minusButton.addEventListener("click", () => {
  operation = "subtract"
  secondNumber = ''
})

multiplyButton.addEventListener("click", () => {
  operation = "multiply"
  secondNumber = ''
})

divideButton.addEventListener("click", () => {
  operation = "divide"
  secondNumber = ''
})

percentButton.addEventListener("click", () => {
  output = Number(firstNumber) / 100;
  firstNumber = output;
  secondNumber = ''
  screen.textContent = output;
})

sqrRootButton.addEventListener("click", () => {
  operation = "sqr-root";
  secondNumber = '';
})


equalsButton.addEventListener("click", () => {
  if (operation === "add") {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    output = num1 + num2;
    firstNumber = output;
  } else if (operation === "subtract") {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    output = num1 - num2;
    firstNumber = output;
  } else if (operation === "multiply") {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    output = num1 * num2;
    firstNumber = output;
  } else if (operation === "divide") {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    output = num1 / num2;
    firstNumber = output;
  } else if (operation === "sqr-root") {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    output = num1;
    for (i = 0; i < num2 - 1; i++) {
      output = output * num1
    }
    firstNumber = output;
  } else {
    return
  }

  if (output.toString().length > 10) {
    console.log("greater!")
    let roundedNumber = output.toExponential(3);
    if (roundedNumber.length > 11) {
      roundedNumber = roundedNumber.slice(0, 11);
    }
    screen.textContent = roundedNumber;
  } else {
    screen.textContent = output;
  }


})

clearButton.addEventListener("click", () => {
  firstNumber = '';
  secondNumber = '';
  output = '';
  operation = '';
  screen.textContent = '';
})
