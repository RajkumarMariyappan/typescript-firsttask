"use strict";
exports.__esModule = true;
exports.like = void 0;
var like = /** @class */ (function () {
    function like(count, isSelected) {
        this.count = count;
        this.isSelected = isSelected;
    }
    like.prototype.onclick = function () {
        this.count += (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
        console.log(this.count, this.isSelected);
    };
    return like;
}());
exports.like = like;
