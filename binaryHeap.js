var binaryHeap = (() => {
    var arr = [0];
    return {
        insert: (e) => {
            var temp;
            arr.push(e);
            for (var i = arr.length - 1; i >> 1 > 0 && arr[i] > arr[i >> 1]; i = i >> 1) {
                temp = arr[i]; arr[i] = arr[i >> 1]; arr[i >> 1] = temp;
            }
            console.log(arr)
        },
        remove: () => {
            if (arr.length == 1) return null;
            var temp, res = arr[1];
            arr[1] = arr[arr.length - 1];
            arr.pop();
            for (var i = 1; 2 * i < arr.length;) {
                var j;
                if (2 * i + 1 == arr.length) { j = 2 * i }
                else if (arr[2 * i] > arr[2 * i + 1]) { j = 2 * i }
                else { j = 2 * i + 1 }
                if (arr[i] < arr[j]) {
                    temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
                    i = j;
                } else break;
            }
            console.log(arr)
            return res;
        },
        toString: () => {
            console.log(arr)
        }
    }
})();

module.exports = binaryHeap;