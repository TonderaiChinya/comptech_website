// TEXT ANIMATION
const data = document.querySelector(".brandname");
const newData = document.querySelector(".name");

function animateText(text) {
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";
  for (i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span";
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }
}

animateText(data);
let next = animateText(newData);
setInterval(next, 550);
