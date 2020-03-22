//Background-generator code
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2'); 


console.log(color1.value);

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









