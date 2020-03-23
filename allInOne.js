//Background-generator code
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const body = document.getElementById("gradient");
const colorValue = document.getElementById("colorValue");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    colorValue.textContent = body.style.background;
}


color1.addEventListener("input", setGradient); // It calls the function setGradient whenever the input is invoked. Hence, no () is added

color2.addEventListener("input", setGradient);

// Todo-List code
const mapConfig = {
    saif: 'barkat',
    panda: 'barkat',
    's a i f': 'barkat',
};

const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.getElementById("parentList");

function inputValue() {
    return input.value.length;
}


function createLi() {

    const li = document.createElement("li");
    let text = input.value.split(' ');
    text = text.map(item => mapConfig[item] || item);
    text = text.join(' ');
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);

    input.value = "";

}

function clickAddLi() {
    if (inputValue() > 0) {
        createLi();
    }
}

function enterAddLi(event) {
    if (inputValue() > 0 && event.which === 13) {
        createLi();
    }
}


button.addEventListener("click", clickAddLi);

input.addEventListener("keypress", enterAddLi);









