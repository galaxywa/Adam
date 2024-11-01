const itemInput = document.getElementById("item-input");
// a. simple keypress
const onkeyPress = (e) => {
    console.log("keypress");
};

itemInput.addEventListener("keypress", onkeyPress);


// b.onkeydown
const onkeyDown = (e) => {
    //check key code
    /* if (e.key === "Enter") {
        alert("enter");
    } */
   if (e.keyCode === 13) {
    alert("password enter");
   }
   if (e.code === "Digit1") {
    console.log("password 1");
   }
   if (e.repeat) {
    console.log("you are holding down" + e.key);
   }
   console.log("Shift" + e.shiftKey);
   console.log("Alt" + e.altKey);
   console.log("Control" + e.ctrlKey);
   if (e.shiftKey) {

   }
};
itemInput.addEventListener("keydown", onkeyDown);
// c.onkeyup
const onkeyup = (e) => {
    console.log("keyup");
};
itemInput.addEventListener("keyup",onkeyup);
