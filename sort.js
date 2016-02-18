Array.prototype.selectSort = () => {
    var i, j, min, temp;
    for (i = 0; i < this.length; i++) {
        min = i;
        for (j = i; j < this.length; j++) {
            if (this[j] < this[i]) {
                min = j;
            }
        }
        if (min != i) {
            temp = this[i], this[i] = this[min], this[min] = temp;
        }
    }
    return this;
}




var arr = [3, 5, 65332, 4, 1, 231, 9, 765, 98798]
console.log(arr)

console.log(arr.selectSort())
