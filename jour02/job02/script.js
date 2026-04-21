function showhide() { 
    let article = document.getElementById("dynamic-article"); 
    if (article) { 
        article.remove();
    } else { 
        article = document.createElement("article"); 
        article.id = "dynamic-article"; 
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    } 
} 
  

document.getElementById("button").addEventListener("click", showhide);