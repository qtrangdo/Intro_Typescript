define(["require", "exports", "./math/circle", "./math/rectangle"], function (require, exports, circle_1, rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(circle_1.PI);
    console.log(circle_1.calculateCircumference(2));
    console.log(rectangle_1.calculateRectangle(3, 5));
});
