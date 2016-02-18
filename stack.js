var stack = (function () {
    var size = 0, arr = [];
    return {
        getSize: () => { return size; },
        isEmpty: () => { return size == 0; },
        push: (e) => {
            size++;
            arr.push(e)
        },
        pop: () => {
            size--;
            arr.pop();
        }
    }
})()



