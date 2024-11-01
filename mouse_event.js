const clearBtn = document.querySelector("#clear");
const onClick = () => {
    console.log('click event');
};

clearBtn.addEventListener("click", onClick);

const onDoubleClick = () => {
    if (document.body.style.backgroundColor != "purple") {
        document.body.style.backgroundColor = "purple";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
};

clearBtn.addEventListener("dblclick", onDoubleClick);

const onMouseDown = () => console.log("mouse down");
clearBtn.addEventListener("mousedown", onMouseDown);
const onMouseUp = () => console.log("mouse up");
clearBtn.addEventListener("mouseup", onMouseUp);
const onMouseWheel = () => console.log("mouse wheel");
clearBtn.addEventListener("wheel", onMouseWheel);
const onMouseOver = () => console.log("mouse over");
clearBtn.addEventListener("over", onMouseOver);
const onMouseOut = () => console.log("mouse out");
clearBtn.addEventListener("out", onMouseOut);
const onMouseStart = () => console.log("mouse start");
clearBtn.addEventListener("start", onMouseStart);
const onMouseDrag = () => console.log("mouse drag");
clearBtn.addEventListener("drag", onMouseDrag);
const onMouseEnd = () => console.log("mouse end");
clearBtn.addEventListener("end", onMouseEnd);






