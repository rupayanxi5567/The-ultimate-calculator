let equal = document.querySelector(".equal");
let result = document.querySelector(".result");
let display = document.getElementsByName("display")[0];
let btn = document.querySelectorAll(".btn");
let container = document.querySelector(".container");
let identity = document.querySelector(".identity");

let equalFNC = () => {
  // display.value = 82 * eval(display.value)

  result.innerHTML = ` The value in USD is $${0.012 * display.value}   `;
};

btn.forEach((btt) => {
  btt.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      container.style.backgroundColor = e.target.id;
      identity.style.color = "black";
      result.style.color = "black";
    }
    if (e.target.id === "blue") {
      container.style.backgroundColor = e.target.id;
      identity.style.color = "white";
      result.style.color = "white";
    }
    if (e.target.id === "yellow") {
      container.style.backgroundColor = e.target.id;

      identity.style.color = "black";
      result.style.color = "black";
    }
    if (e.target.id === "lime") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "brown") {
      container.style.backgroundColor = e.target.id;
    }
  });
});
