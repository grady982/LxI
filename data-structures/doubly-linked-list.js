class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
            prev: null
		};
		
		this.tail = this.head;
	}

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        newNode.prev = null; 
        this.head.prev = newNode;
        this.head = newNode;

        return this;
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value);
        }

        const leader = this._getTargetNode(index - 1);
        const follower = leader.next;
        const newNode = new Node(value);
        newNode.next = leader.next;
        newNode.prev = leader;
        leader.next = newNode;
        follower.prev = newNode;
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
        removeNode.next.prev = preNode;

        return this;
    }

    printList() {
        const list = [];
        let currentNode = this.head;
        while (currentNode) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(list);
    }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.prepend(1);
// linkedList.insert(1,15);
// linkedList.remove(2);
// linkedList.printList();

console.log(linkedList);