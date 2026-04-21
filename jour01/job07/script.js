function jourTravaille(date) {

    let jours = [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
    ];

    let mois = [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
    ];

    let joursFeries2022 = [
        "2022-01-01",
        "2022-04-18",
        "2022-05-01",
        "2022-05-08",
        "2022-05-26",
        "2022-06-06",
        "2022-07-14",
        "2022-08-15",
        "2022-11-01",
        "2022-11-11",
        "2022-12-25"
    ];

    let jourNom = jours[date.getDay()];
    let jour = date.getDate();
    let moisNom = mois[date.getMonth()];
    let annee = date.getFullYear();

    let dateTexte =
        annee + "-" +
        String(date.getMonth() + 1).padStart(2, "0") + "-" +
        String(jour).padStart(2, "0");

    if (joursFeries2022.includes(dateTexte)) {
        console.log("Le " + jourNom + " " + jour + " " + moisNom + " " + annee + " est un jour férié");
    }
    else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, " + jourNom + " " + jour + " " + moisNom + " " + annee + " est un week-end");
    }
    else {
        console.log("Oui, " + jourNom + " " + jour + " " + moisNom + " " + annee + " est un jour travaillé");
    }
}



jourTravaille(new Date("2022-01-01"));
jourTravaille(new Date("2022-06-09"));
jourTravaille(new Date("2022-06-25"));