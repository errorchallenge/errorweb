const sections = document.querySelectorAll("section");

const prevBtn = document.querySelector(".btnPrev")

const nextBtn = document.querySelector(".btnNext")
let index = 0;
const animationDuration = 1000;
let lastTime = 0;
const scrollopacity = document.querySelector(".header div.scroll")



nextBtn.addEventListener("click", function () {

    if (index > 2) {
        index = -1;
    }
    index = index + 1
    sections.forEach((section, i) => {
        if (i === index) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    })
})
prevBtn.addEventListener("click", function () {
    if (index < 1) {
        index = 4;
    }
    index = index - 1
    sections.forEach((section, i) => {
        if (i === index) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    })
})
window.addEventListener("wheel", (e) => {
    const delta = e.wheelDelta;
    const currentTime = new Date().getTime();
    if (currentTime - lastTime < animationDuration) {
        e.preventDefault();
        return;
    }
    if (delta < 0) {
        const nextBtnClick = new Event("click");
        nextBtn.dispatchEvent(nextBtnClick);
    } else {
        const prevBtnClick = new Event("click");
        prevBtn.dispatchEvent(prevBtnClick);
    }
    lastTime = currentTime;
})