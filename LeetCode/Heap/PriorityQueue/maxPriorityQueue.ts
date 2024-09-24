import { ListNode } from "./listNode";

export class MaxPriorityQueue {
  private head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // Enqueue: Insert element in descending order
  enqueue(val: number): void {
    const newNode = new ListNode(val);

    // If the list is empty or the new value is larger than the head, insert at the head
    if (!this.head || val > this.head.val) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Traverse the list to find the correct position for the new value
    let current = this.head;
    while (current.next && current.next.val > val) {
      current = current.next;
    }

    // Insert the new node at the found position
    newNode.next = current.next;
    current.next = newNode;
  }

  // Dequeue: Remove and return the element at the front (largest element)
  dequeue(): number {
    if (!this.head) {
      return 0;
      //   throw new Error("Queue is empty");
    }

    // Store the value of the largest element
    const maxValue = this.head.val;

    // Remove the head node (which is the largest element)
    this.head = this.head.next;

    // Return the value of the dequeued element
    return maxValue;
  }

  // Return the largest element (element at the front)
  front(): { element: number } {
    if (!this.head) {
      throw new Error("Queue is empty");
    }

    return { element: this.head.val };
  }

  // Return the size of the queue
  size(): number {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

/** Example usage:
 * const maxQueue = new MaxPriorityQueue();
 * maxQueue.enqueue(5);
 * maxQueue.enqueue(10);
 * console.log(maxQueue.dequeue()); // Outputs: 10 (dequeues and returns the largest element)
 * console.log(maxQueue.front().element); // Outputs: 5
 */
