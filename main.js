let outputscreen = document.getElementById('output-screen');

function display(num) {
  outputscreen.value += num;
}

function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value);
  } catch (err) {
    alert("Invalid");
  }
}

function clr() {
  outputscreen.value = '';
}

function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}

function percentage() {
  let currentValue = outputscreen.value;

  // Find the last operator used
  let lastOperator = currentValue.match(/[\+\-\*\/]/g);
  lastOperator = lastOperator ? lastOperator[lastOperator.length - 1] : null;

  if (lastOperator === '/') {
    // If the last operator is divide, multiply the current value by 100
    let parts = currentValue.split('/');
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      outputscreen.value = (parseFloat(parts[0]) / parseFloat(parts[1])) * 100;
    }
  } else if (lastOperator === '*') {
    // If the last operator is multiply, divide the current value by 100
    let parts = currentValue.split('*');
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      outputscreen.value = (parseFloat(parts[0]) * parseFloat(parts[1])) / 100;
    }
  }
}
