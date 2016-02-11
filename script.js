document.addEventListener("DOMContentLoaded", function () {

    var main = document.querySelector("#main");

    for (var i = 1; i < 7; i++) {

        var p = document.createElement("p");
        p.textContent = "Click Me";
        main.appendChild(p);
        // add an IIFE with a closure
        p.addEventListener("click", (function (i) {
            return function () {
                this.textContent = i;
            };

        })(i));
    }
    (function () {

        var heading = document.querySelector("#second h2");
        heading.addEventListener("click", function () {

            var list = document.getElementById("theList");
            for (var i = 0; i < 6; i++)
                setTimeout(createlist(list, i), (i * 1000));
        });

    })();

    function createlist(list, i) {
        return function () {
            var listelement = document.createElement("li");
            listelement.textContent = "WHATS GOOD BRUH" + (i + 1);
            list.appendChild(listelement);
        };
    }

});