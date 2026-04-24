const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const percent = scrollTop / maxScroll;

    
    const red = Math.floor(255 * percent);
    const green = Math.floor(255 * (1 - percent));

    footer.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
});