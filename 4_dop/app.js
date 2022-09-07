
const text = document.getElementById("h1");
const btn = document.getElementById("button");

function RandomsColorTXT() {
    let color = Math.floor(Math.random() * Math.pow(111, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
  
}

btn.onclick = () => {
    h1.style.color = RandomsColorTXT();
}
