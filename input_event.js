const itemInput = document.getElementById("item-input");
const priorityInput = document.querySelector("h1");
const checkboxInput = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput (e) {
    heading.textContent = e.target.value;
}

itemInput.addEventListener("input", onInput);
function onChecked (e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? "checked" : "unchecked";
}
checkedBox.addEventListener("input" ,onChecked)
function onfocus(e) {
    console.log("Input is focused");
    itemInput.style.outlineStyle = "solid";
    itemInput.style.outlineColor = "red";
    itemInput.style.outlineWidth = "3px";
}
itemInput.addEventListener("onfocus", onfocus);
function onblur() {
    console.log("input is not focused");
    itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("blur", onblur);
priorityInput.addEventListener("change",onInput);