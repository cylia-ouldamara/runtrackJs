function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    }
    else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    }
    else {
        return "Erreur : ordre invalide (utiliser 'asc' ou 'desc')";
    }
}



let tab = [5, 2, 9, 1, 7];
console.log(tri(tab, "asc"));
console.log(tri(tab, "desc"));
console.log(tri(tab, "invalid"));
console.log(tri([3, 8, 4, 6], "asc"));
console.log(tri([3, 8, 4, 6], "desc"));