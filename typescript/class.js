"use strict";
exports.__esModule = true;
exports.dog = void 0;
var dog = /** @class */ (function () {
    //constructor
    function dog(x, y) {
        this.x = x;
        this.y = y;
    }
    dog.prototype.bark = function () {
        console.log(this.x + this.y);
    };
    return dog;
}());
exports.dog = dog;
