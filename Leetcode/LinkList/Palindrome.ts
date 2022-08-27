/** 234. Palindrome Linked List */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  // reverse link list then compare each node value have to be same
  let originNode = clone(head);
  let reverseNode = reverse(head);

  while (reverseNode && originNode) {
    if (reverseNode.val !== originNode.val) {
      return false;
    }
    reverseNode = reverseNode.next as any;
    originNode = originNode.next;
  }

  return true;
}

function reverse(data: any) {
  let pre: ListNode = new ListNode();

  while (data) {
    const next = data.next;
    data.next = pre;
    pre = data;
    data = next;
  }

  return pre;
}

function clone(data: any) {
  if (!data) return null;

  const newNode: ListNode = new ListNode();
  newNode.val = data.val;
  newNode.next = clone(data.next);

  return newNode;
}
