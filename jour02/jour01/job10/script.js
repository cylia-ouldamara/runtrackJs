function compterVoyelles(phrase) {
    let compteur = 0;
    let voyelles = "aeiouyAEIOUY";

    for (let i = 0; i < phrase.length; i++) {
        if (voyelles.includes(phrase[i])) {
            compteur++;
        }
    }

    console.log("La phrase contient " + compteur + " voyelles");
}

compterVoyelles("Bonjour le monde");
compterVoyelles("JavaScript est génial");
compterVoyelles("AEIOUY");
compterVoyelles("bcdfghjklmnpqrstvwxz");
compterVoyelles("Le ciel est bleu");
compterVoyelles("L'ordinateur est allumé");
compterVoyelles("Il fait beau aujourd'hui");