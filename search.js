'use strict'

Array.prototype.binarySearch = function (e, i, j) {
    var m = (i + j) >> 1;
    if (e < this[m])
        return this.binarySearch(e, i, m);
    else if (e > this[m])
        return this.binarySearch(e, m, j);
    else if (e == this[m])
        return this[m];
    else
        return null;
}