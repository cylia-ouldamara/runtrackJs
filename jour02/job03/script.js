function addOne() {
    let counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
}

document.getElementById("button").addEventListener("click", addOne);