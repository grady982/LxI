
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		};
		
		this.tail = this.head;
	}

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        return this;
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value);
        }

        const targetNode = this._getTargetNode(index - 1);
        const newNode = new Node(value);
        newNode.next = targetNode.next;
        targetNode.next = newNode;
        return this;
    }

    _getTargetNode(index) {
        let currentIndex = 0;
        let targetNode = this.head;
        while (currentIndex !== index) {
            targetNode = targetNode.next;
            currentIndex++;
        }

        return targetNode
    }

    remove(index) {
        if (index === 0) {
            const newNode = this.head.next;
            this.head = newNode;
            return this;
        }
        const preNode = this._getTargetNode(index - 1);
        const removeNode = preNode.next;

        preNode.next = removeNode.next;

        return this;
    }

    prinyList() {
        const list = [];
        let currentNode = this.head;
        while (currentNode) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(list);
    }

    reverse(prev) {
        let currentNode = prev ? prev.next : this.head;

        if (currentNode.next) {
            this.reverse(currentNode);
            currentNode.next = prev;
        } else {
            this.tail = this.head;
            this.head = currentNode;
            this.head.next = prev;
        }
    }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.prepend(1);
linkedList.insert(1,15);
// linkedList.remove(2);
linkedList.reverse();
linkedList.prinyList();

// console.log(JSON.stringify(linkedList));