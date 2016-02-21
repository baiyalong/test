'use strict'









var binarySearchTree = (() => {

    function Node(k, v) {
        this.k = k;
        this.v = v;
        this.l = null;
        this.r = null;
    }

    var root = new Node(0, 0);

    return {
        find: (k) => {
            for (var node = root; node != null;) {
                if (node.key == k) return node;
                else if (node.key < k) node = node.l;
                else if (node.key > k) node = node.r;
            }
            return null;
        },
        insert: (k, v) => {
            for (var node = root; node != null;) {
                if (node.key == k) {
                    node.v += v;
                    return;
                }
                else if (node.k < k) {
                    if (node.l == null) { node.l = new Node(k, v); return; }
                    else node = node.l;
                }
                else if (node.k > k) {
                    if (node.r == null) { node.r = new Node(k, v); return; }
                    else node = node.r;
                }
            }


        },
        max: () => {
            for (var node = root; node.r != null; node = node.r) {

            }
            return node;
        },
        min: () => {
            for (var node = root; node.l != null; node = node.l) {

            }
            return node;
        },
        floor: (e) => { },
        ceiling: (e) => { },
        remove: (k) => {
            for (var node = root, pnode = root; node != null;) {
                if (node.k = k) {
                    if (pnode == node) { root = null; }
                    else if (node.l == null && node.r == null) {
                        if (pnode.l == node) pnode.l = null;
                        if (pnode.r == node) pnode.r = null;
                    } else if (node.l == null || node.r == null) {
                        if (node.l == null) {
                            if (pnode.l == node) pnode.l = node.r;
                            if (pnode.r == node) pnode.r = node.r;
                        }
                        if (node.r == null) {
                            if (pnode.l == node) pnode.l = node.l;
                            if (pnode.r == node) pnode.r = node.l;
                        }
                    } else if (node.l != null && node.r != null) {
                        for (var m = node.r, p = node; m.l != null; p = m, m = m.l) {

                        }
                        if (p.l == m) p.l = null;
                        if (p.r == m) p.r = null;
                        if (pnode.l == node) pnode.l = m;
                        if (pnode.r == node) pnode.r = m;
                        m.l = node.l;
                        m.r = node.r;
                        delete node;
                    }
                }
                else if (node.k < k) { pnode = node; node = node.l; }
                else if (node.k > k) { pnode = node; node = node.r; }
            }
        },

    }
})();