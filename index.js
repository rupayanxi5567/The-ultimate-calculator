let btn = document.querySelectorAll(".btn");
let container = document.querySelector(".container");
let identity = document.querySelector(".identity");

btn.forEach((btt) => {
  btt.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      container.style.backgroundColor = e.target.id;
      identity.style.color = "white";
    }
    if (e.target.id === "yellow") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "lime") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "brown") {
      container.style.backgroundColor = e.target.id;
    }
  });
});
