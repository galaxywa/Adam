function insertElement() {
    const filter = document.querySelector(".filter");
    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjustElement";
    // apply insertAdjacentElement can only apply once to the same element
    filter.insertAdjacentElement("beforebegin", h1);
    const h1clone = h1.cloneNode(true);
    filter.insertAdjacentElement("afterend", h1clone);
}
insertElement();

function insertText () {
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("afterbegin","insertAdjacentText");
    item.insertAdjacentText("beforeend","insertAdjacentText");
}
insertText();

function insertHtml() {
    const clearBtn = document.querySelector("#clear")
    clearBtn.insertAdjacentHTML("afterbegin", "<h2>insertAdjacentHTML</h2>")
    clearBtn.insertAdjacentHTML("beforeend","<h2>insertAdjacentHTML</h2>")
}

insertHtml();

function insertBeforeItem() {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "insertBefore";
    const thirdItem = document.querySelector("li:nth-child(3)");
    ul.insertBefore(li,thirdItem);
}

insertBeforeItem();

function insertAfter(newE, existingE) {
    existingE.parentElement.insertBefore(newE, existingE.nextSibling);
}

const li = document.createElement("li");
li.textContent = "insertAfter";
const firstItem = document.querySelector("li:nth-child(4)");
insertAfter(li, firstItem);