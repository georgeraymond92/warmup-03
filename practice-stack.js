'use strict';

class Node {
  constructor(value) {

    this.value = value;
    this.next = null;

  }
}

class Stack {
  constructor() {
    this.top = null;
    this.next = null;
  }
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node
  }
  pop() {
    let nodePass = this.top;
    this.top = this.top.next;
    return nodePass;
  }
  peek(){
    return this.top.value;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null
  }

  enqueue(value){
    const node = new Node(value);
    if(!this.front){
      this.front = node;
      this.back = node;
    }

    this.back.next = node;
    this.back = node;
  }
  dequeue() {
    const dataPass = this.front.value
    if (!this.front.next){
      this.front = null;
      this.back = null;

    }else{
      this.front = this.front.next;
    }

    return dataPass;


  }

  peek() {
    return this.front.value;
  }
}
let stack = new Stack()
let queue = new Queue();

stack.push('test');
console.log(stack.peek());
console.log(stack.pop());

queue.enqueue('value');
console.log(queue.peek());
console.log(queue.dequeue());