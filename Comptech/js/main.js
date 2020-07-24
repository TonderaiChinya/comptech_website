const phoneNumber = document.getElementById("phoneNumber");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (phoneNumber.value == "") {
    messages.push("Please enter a number!");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

const flipCards = document.querySelector(".flip-cards");
const flipCard = document.getElementsByClassName("flip-front");
const logo = document.getElementsByClassName("company-logo");

logo.addEventListener("click", move);

function click() {
  logo.classList.add(" moving");
}

flipCard.addEventListener("load", slideIn);

function slideIn() {
  flipCard.classList.add(" spin");

  // if (!loadPage) {
  //   flipCards.classList.add("slide");
  //   flipCard.forEach((item) => item.classList.add("spin"));

  //   // set menu state
  //   loadPage = true;
  // } else {
  //   flipCards.classList.remove("slide");
  //   flipCard.forEach((item) => item.classList.remove("spin"));

  //   // set menu state
  //   loadPage = false;
  // }
}
