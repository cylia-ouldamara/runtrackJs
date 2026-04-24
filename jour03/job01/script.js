let $showBtn = $("#showBtn");
let $hideBtn = $("#hideBtn");
let $citation = $("#citation");

$showBtn.on("click", function () {
    $citation.text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.");
});

$hideBtn.on("click", function () {
    $citation.text("");
});