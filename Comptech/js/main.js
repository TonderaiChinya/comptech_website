// CONTACT FORM
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
