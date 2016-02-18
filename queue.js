var queue = (() => {
    let size = 0, arr = [];
    return {
        getSize: () => { return size; },
        isEmpty: () => { return size == 0; },
        enqueue: (e) => {
            size++;
            arr.push(e);
        },
        dequeue: () => {
            size--;
            return arr.shift()
        }
    }
})()