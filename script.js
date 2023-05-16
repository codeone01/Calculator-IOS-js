let currentResult = '';

function buttonPressed(value) {
  currentResult += value;
  document.getElementById('result').value = currentResult;
}

function clearResult() {
  currentResult = '';
  document.getElementById('result').value = currentResult;
}

function calculate() {
  try {
    currentResult = eval(currentResult);
    document.getElementById('result').value = currentResult;
  } catch (error) {
    alert("Invalid input");
    clearResult();
  }
}