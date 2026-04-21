function citation() {
    const citationElement = document.getElementById("citation");
    console.log(citationElement.textContent);
}

const button = document.getElementById("button");
button.addEventListener("click", citation);