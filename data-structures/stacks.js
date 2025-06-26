// stack implementation using  Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
    }

    peak() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        console.log('pushing', value);
        
        if (!this.top) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        return this;
    }

    pop() {
        if (!this.top) return null;

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;

        return this;
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);

// ===

class StackArray {
    constructor() {
        this.items = [];
    }

    peak() {
        return this.items[this.items.length - 1];
    }

    push(value) {
        this.items.push(value);
        return this;
    }

    pop() {
        this.items.pop();
        return this;
    }
}

const myStackArray = new StackArray();
myStackArray.push(10);
myStackArray.push(20);
myStackArray.push(30);
console.log(myStackArray.peak());
console.log(myStackArray);