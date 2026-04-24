const button = document.getElementById("button");
const container = document.getElementById("container");

button.addEventListener("click", () => {
    fetch("expression.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de chargement du fichier");
            }
            return response.text();
        })
        .then(data => {
            const p = document.createElement("p");
            p.textContent = data;

            container.innerHTML = ""; 
            container.appendChild(p);
        })
        .catch(error => {
            console.error("Erreur :", error);
        });
});