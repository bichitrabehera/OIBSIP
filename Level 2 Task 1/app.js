let lastAnswer = 0;

function insert(value) {
  const expression = document.getElementById("expression").value += value;
  
}

function clearScreen() {
  document.getElementById("expression").value = "";
  document.getElementById("result").innerText = "0";
}

function deleteLast() {
  const expression = document.getElementById("expression");
  expression.value = expression.value.slice(0, -1);
}

function calculateSqrt() {
  const expression = document.getElementById("expression");
  const value = parseFloat(expression.value);
  if (!isNaN(value)) {
    const sqrtResult = Math.sqrt(value);
    document.getElementById("result").innerText = sqrtResult;
    lastAnswer = sqrtResult;
    expression.value = "";
  }
}

function calculate() {
  try {
    const expression = document.getElementById("expression");
    const result = eval(expression.value);
    document.getElementById("result").innerText = result;
    lastAnswer = result;
    expression.value = "";
  } catch (error) {
    document.getElementById("result").innerText = "Error";
  }
}

function useLastAnswer() {
  const expression = document.getElementById("expression");
  expression.value += lastAnswer;
}
