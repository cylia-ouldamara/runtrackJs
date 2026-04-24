document.addEventListener("keydown", function (event) {
    let textarea = document.getElementById("keylogger");


    if (/^[a-z]$/i.test(event.key)) {
        let lettre = event.key;

        
        if (document.activeElement === textarea) {
            textarea.value += lettre;
        } else {
            textarea.value += lettre;
        }
    }
});
