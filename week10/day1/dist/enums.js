"use strict";
//enumerate -> mention a number of things one by one
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 1] = "up";
    Directions[Directions["down"] = 1] = "down";
    Directions[Directions["left"] = 1] = "left";
    Directions[Directions["right"] = 1] = "right";
})(Directions || (Directions = {}));
const small = "s" /* TshirtSizes.Small */;
const medium = "m" /* TshirtSizes.Medium */;
if ("m" /* TshirtSizes.Medium */ === "m") {
    console.log("Medium shirt");
}
