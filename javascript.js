const slider = document.querySelector(".items");
let isDown = false;
let startX;
let ScrollLeft;

slider.addEventListener("mousedown", () => {
    isDown = true;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
});

slider.addEventListener("mouseup", () => {
    isDown = false;
});

slider.addEventListener("mousemove", () => {
    // stop the function from running
    if (!isDown) return; 
    console.count(isDown);
    // console.log(isDown);
    // console.log("do work");
});