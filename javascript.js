const slider = document.querySelector(".items");
let isDown = false;
let startX;
let ScrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    // console.log(e.pageX);
    startX = e.pageX - slider.offsetLeft;
    console.log(startX);
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", () => {
    // stop the function from running
    if (!isDown) return; 
    console.count(isDown);
    console.log(startX);
    // console.log(isDown);
    // console.log("do work");
});