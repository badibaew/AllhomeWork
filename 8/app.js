const list = [];

const addbtn = document.getElementById("button");
const input = document.querySelector("#input");

function change(id) {
  const item = list.findIndex((t) => t.id === id);
  const text = prompt("Изменить текст?");
  list[item].text = text;
  redder();
}

function redder() {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "list");

  for (let i = 0; i < list.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "todo");
    const h3 = document.createElement("h3");
    h3.innerText = list[i].text;

    div.append(h3);

    const buttons = document.createElement("button");
    buttons.setAttribute("class", "actions");

    const changeBtn = document.createElement("button");
    changeBtn.setAttribute("class", "change");
    changeBtn.innerText = "change";

    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "delete");
    delBtn.innerText = "delete";

    buttons.append(changeBtn, delBtn);

    div.append(buttons);

    mainDiv.append(div);
    input.value = "";
  }

  const form = document.querySelector(".form");
  document.querySelector(".list").remove();

  form.append(mainDiv);
}

function handleClick(event) {
  event.preventDefault();

  const obj = {
    id: list.length + 1,
    text: input.value,
  };

  // function change(cha){
  //     changeBtn.innerText =
  // }

  list.push(obj);
  console.log(list);
  redder();
}

addbtn.addEventListener("click", handleClick);
