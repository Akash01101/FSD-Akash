const calculate = (a, b, c = null, operator) => {
  switch (operator) {
    case '+':
      return c !== null ? a + b + c : a + b;
    case '-':
      return c !== null ? a - b - c : a - b;
    case '*':
      return c !== null ? a * b * c : a * b;
    case '/':
      if (b === 0 || (c === 0 && c !== null)) return "Error: Division by zero";
      return c !== null ? a / b / c : a / b;
    default:
      return "Invalid operator";
  }
};

document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let cInput = document.getElementById("num3").value;
  let c = cInput ? parseFloat(cInput) : null;
  let operator = document.getElementById("operator").value;

  document.getElementById("result").innerText = "Result: " + calculate(a, b, c, operator);
});
