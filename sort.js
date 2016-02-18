Array.prototype.selectSort = function () {
    var i, j, min, temp;
    for (i = 0; i < this.length; i++) {
        min = i;
        for (j = i + 1; j < this.length; j++) {
            if (this[j] < this[min]) {
                min = j;
            }
        }
        if (min != i) {
            temp = this[i], this[i] = this[min], this[min] = temp;
        }
    }
    return this;
}


Array.prototype.insertionSort = function () {
    var i, j, temp;
    for (i = 1; i < this.length; i++) {
        temp = this[i];
        for (j = i - 1; j >= 0 && temp < this[j]; j--) {
            this[j + 1] = this[j]
        }
        this[j + 1] = temp;
    }
    return this;
}



Array.prototype.shellSort = function () {
    var gap, i, j, temp;
    for (gap = this.length >> 1; gap > 0; gap >>= 1) {
        for (i = gap; i < this.length; i++) {
            temp = this[i];
            for (j = i - gap; j >= 0 && temp < this[j]; j -= gap) {
                this[j + gap] = this[j]
            }
            this[j + gap] = temp
        }
    }
    return this;
}


Array.prototype.mergeSort = function () {
    function merge(l, r) {
        var final = [];
        while (l.length && r.length) {
            final.push(l[0] < r[0] ? l.shift() : r.shift())
        }
        return final.concat(l.concat(r));
    }
    var mid = this.length >> 1;
    if (this.length == 1)
        return this;
    else
        return merge(this.slice(0, mid).mergeSort(), this.slice(mid, this.length).mergeSort());
}


Array.prototype.quickSort = function () {
    if (this.length <= 1)
        return this;
    var i, mid = this[0], l = [], r = [];
    for (i = 1; i < this.length; i++) {
        if (this[i] < mid)
            l.push(this[i])
        else
            r.push(this[i])
    }
    return l.quickSort().concat(mid, r.quickSort())

}