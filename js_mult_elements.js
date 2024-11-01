const listItems = document.querySelectorAll(".item");
console.log(listItems[0].innerText);
listItems[1].style.color = "red"
listItems.forEach((item,index) => {
    console.log(item.innerText);
    switch (index) {
        case 0:
        item.remove();
        break;
        case 1:
        item.remove();
        break;
        case 2:
        item.innerHTML = `Orange
                <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`
    }
});
// return : HTMLCollections
const listItem2 = document.getElementsByClassName("item");
console.log(listItem2);
console.log(listItem2[1].innerText);

const listItemArray = Array.from(listItem2);
console.log(listItemArray);

const listItem3 = document.getElementsByTagName("li");
console.log(listItem3);
console.log(listItem3[1].innerText);