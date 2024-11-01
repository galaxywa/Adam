const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title","my Element");
div.textContent = "My Element";

const text = document.createTextNode("hello world");
div.appendChild(text);
document.querySelector("ul").appendChild(div);
console.log(document.querySelector("ul"));
