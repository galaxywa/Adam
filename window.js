window.onload = function () {
    document.querySelector("h1").textContent = "Hello World";
    console.log("window loaded");
}

window.addEventListener("load", function() {
    console.log("page loaded");
});

// scroll event
window.addEventListener("scroll",function() {
    console.log(`scrolled to ${window.scrollX} x ${window.screenY}`);
});

window.addEventListener("blur",function() {
    document.querySelector("p").forEach((p) => {p.style.color ="blank"})
})