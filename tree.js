'use strict'









var binarySearchTree = (() => {

    function Node(k, v) {
        this.k = k;
        this.v = v;
        this.l = null;
        this.r = null;
    }

    var root = new Node('root', 0);

    return {
        find: (e) => { },
        isnert: (e) => { },
        max: () => { },
        min: () => { },
        floor: (e) => { },
        ceiling: (e) => { },
        remove: (e) => { },

    }
})();