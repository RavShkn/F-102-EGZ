let result;

function dodawanie(a, b) {
    result =  a + b;
  }

  function odejmowanie(a, b) {
    result = a - b;
  }

  function mnozenie(a, b) {
    result = a * b;
  }

  function dzielenie(a, b) {
    if (b === 0) {
      alert("Pamietaj cholero nie dziel przez 0")
    } else {
      result = a / b;
    }
  }

  function modulo(a, b) {
    result =  a % b;
  }

  function nextOperation() {
    operation = prompt(`Wynik działania to: ${result} \nPodaj kolejny operator arytmetyczny (+, -, *, /, %):`);
  }

  let firstNumber = Number.parseFloat(prompt("Podaj pierwszą liczbę"));
  let operation = prompt("Jakie działanie chcesz wykonać? + - * / %");
  let secondNumber = Number.parseFloat;

  while (operation == "+" || operation == "-" || operation == "*" || operation == "/" || operation == "%") {
    switch (operation) {
        case "+":
          secondNumber = Number.parseFloat(prompt("Podaj drugą liczbę"));
          dodawanie(firstNumber, secondNumber);
          firstNumber = result;
          nextOperation();
          break;
      
        case "-":
          secondNumber = Number.parseFloat(prompt("Podaj drugą liczbę"));
          odejmowanie(firstNumber, secondNumber);
          firstNumber = result;
          nextOperation();
        break;
        
        case "*":
          secondNumber = Number.parseFloat(prompt("Podaj drugą liczbę"));
          mnozenie(firstNumber, secondNumber);
          firstNumber = result;
          nextOperation();
        break;

        case "/":
          secondNumber = Number.parseFloat(prompt("Podaj drugą liczbę"));
          dzielenie(firstNumber, secondNumber);
          firstNumber = result;
          nextOperation();
        break;
    
        case "%":
          secondNumber = Number.parseFloat(prompt("Podaj drugą liczbę"));
          modulo(firstNumber, secondNumber);
          firstNumber = result;
          nextOperation();
        break;
    
    }}