$(function () {

    let $container = $("#container");
    let $shuffleBtn = $("#shuffle");
    let $checkBtn = $("#check");
    let $message = $("#message");

    let dragged = null;
    function attachDragEvents() {

        $("#container img").attr("draggable", true);

        $("#container img").off("dragstart dragend dragover drop");

        $("#container img").on("dragstart", function () {
            dragged = this;
            $(this).css("opacity", "0.5");
        });

        $("#container img").on("dragend", function () {
            $(this).css("opacity", "1");
        });

        $("#container img").on("dragover", function (e) {
            e.preventDefault();
        });

        $("#container img").on("drop", function (e) {
            e.preventDefault();

            if (dragged !== this) {

                let $dragged = $(dragged);
                let $target = $(this);

                // 🔁 swap
                let $dragClone = $dragged.clone(true);
                let $targetClone = $target.clone(true);

                $dragged.replaceWith($targetClone);
                $target.replaceWith($dragClone);
                attachDragEvents();
            }
        });
    }

    $shuffleBtn.on("click", function () {

        let $images = $container.children().toArray();

        for (let i = $images.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [$images[i], $images[j]] = [$images[j], $images[i]];
        }

        $container.empty();

        $images.forEach(img => {
            $container.append(img);
        });

        attachDragEvents();
    });


    $checkBtn.on("click", function () {

        let correct = true;

        $("#container img").each(function (index) {
            if ($(this).data("order") != index + 1) {
                correct = false;
                return false;
            }
        });

        if (correct) {
            $message.text("Vous avez gagné ").css("color", "green");
        } else {
            $message.text("Vous avez perdu ").css("color", "red");
        }
    });

    attachDragEvents();

});