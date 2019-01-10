'use strict';
const list = require("../data-structures-and-algorithms/linkedList/linked-list");
let current = list.head;

while(current.next) {
    console.log(current.node);
    current = current.next;
}
console.log(current.node);

