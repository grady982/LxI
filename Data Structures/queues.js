class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    peak() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return this;
    }

    dequeue() {
        if (!this.first) return null;

        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }

        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
console.log(myQueue.peak());

myQueue.dequeue();

console.log(myQueue);

// Implement Queue using Stacks