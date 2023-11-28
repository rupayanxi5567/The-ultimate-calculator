document.addEventListener("DOMContentLoaded", function () {
  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let plus = document.getElementById("plus");

  let four = document.getElementById("four");
  let five = document.getElementById("five");
  let six = document.getElementById("six");
  let minus = document.getElementById("minus");

  let seven = document.getElementById("seven");
  let eight = document.getElementById("eight");
  let nine = document.getElementById("nine");
  let star = document.getElementById("star");
  let equal = document.getElementById("equal");

  let clear = document.getElementById("clear");
  let deleted = document.getElementById("delete");
  let dot = document.getElementById("dot");
  let divide = document.getElementById("divide");
  let singleZero = document.getElementById("singleZero");

  let dbZero = document.getElementById("dbZero");

  let displayUSD = document.getElementById("displayUSD");

  let displayINR = document.getElementById("displayINR");

  let buttons = document.querySelectorAll("button");

  let input = null;

  let display = document.getElementsByName("display")[0];

  // constant functionality for both USD and INR starting

  displayUSD.addEventListener("click", () => {
    input = displayUSD;
  });

  displayINR.addEventListener("click", () => {
    input = displayINR;
  });

  // constant functionality for both USD and INR ending

  //double zero button

  dbZero.addEventListener("click", () => {
    if (input) {
      input.value += "00";
    } else if (input === null) alert(`Please select any input field`);
  });

  //single zero button

  singleZero.addEventListener("click", () => {
    if (input) {
      input.value += "0";
    } else if (input === null) alert(`Please select any input field`);
  });

  equal.addEventListener("click", () => {
    if (input) {
      input.value = eval(input.value);
    } else if (input === null) alert(`Please select any input field`);
  });

  one.addEventListener("click", () => {
    if (input) {
      input.value += "1";
    } else if (input === null) alert(`Please select any input field`);
  });

  two.addEventListener("click", () => {
    if (input) {
      input.value += "2";
    } else if (input === null) alert(`Please select any input field`);
  });

  three.addEventListener("click", () => {
    if (input) {
      input.value += "3";
    } else if (input === null) alert(`Please select any input field`);
  });

  plus.addEventListener("click", () => {
    if (input) {
      input.value += "+";
    } else if (input === null) alert(`Please select any input field`);
  });

  four.addEventListener("click", () => {
    if (input) {
      input.value += "4";
    } else if (input === null) alert(`Please select any input field`);
  });

  five.addEventListener("click", () => {
    if (input) {
      input.value += "5";
    } else if (input === null) alert(`Please select any input field`);
  });

  six.addEventListener("click", () => {
    if (input) {
      input.value += "6";
    } else if (input === null) alert(`Please select any input field`);
  });

  minus.addEventListener("click", () => {
    if (input) {
      input.value += "-";
    } else if (input === null) alert(`Please select any input field`);
  });

  seven.addEventListener("click", () => {
    if (input) {
      input.value += "7";
    } else if (input === null) alert(`Please select any input field`);
  });

  eight.addEventListener("click", () => {
    if (input) {
      input.value += "8";
    } else if (input === null) alert(`Please select any input field`);
  });

  nine.addEventListener("click", () => {
    if (input) {
      input.value += "9";
    } else if (input === null) alert(`Please select any input field`);
  });

  star.addEventListener("click", () => {
    if (input) {
      input.value += "*";
    } else if (input === null) alert(`Please select any input field`);
  });

  clear.addEventListener("click", () => {
    if (input) {
      input.value += "";
    } else if (input === null) alert(`Please select any input field`);
  });

  deleted.addEventListener("click", () => {
    if (input) {
      input.value += "*";
    } else if (input === null) alert(`Please select any input field`);
  });

  dot.addEventListener("click", () => {
    if (input) {
      input.value += ".";
    } else {
      alert(`Please select any input field`);
    }
  });

  divide.addEventListener("click", () => {
    if (input) {
      input.value = "/";
    } else {
      alert("Please select any input field");
    }
  });
});
