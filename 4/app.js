const button = document.getElementById("button");
const input = document.getElementById("input");

button.onclick = () => {

    const tag = document.createElement("div");
    // createElement создает новый HTML элемент
    
    tag.setAttribute("class", "block");
    tag.innerText = input.value;
    document.body.append(tag);

const deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";

deleteButton.onclick = () => {
    tag.remove();
}

input.value = "";

tag.append(deleteButton);
}