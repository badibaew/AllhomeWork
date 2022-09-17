const text = document.querySelector(".text");
const title = document.querySelector(".title");

text.onmouseenter = () => {
  text.setAttribute("class", "title");
};

text.onmouseleave = () => {
  text.classList.remove("title");
  text.setAttribute("class", "text");
};
