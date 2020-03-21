var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("parentList");

function inputValue() {
    return input.value.length;
}

function createLi() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
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


