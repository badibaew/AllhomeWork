
const text = document.getElementById("h1");
const btn = document.getElementById("button");

const testh1 = document.getElementById("test_h1");
const testbtn = document.getElementById("test_button");

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

testbtn.onclick = () => {
    testh1.innerHTML = "Bye";
}
