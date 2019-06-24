import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  toArray() {
    let nodes = [];
    let node = this.head;
    while (node) {
      nodes.push(node);
      node = node.next;
    }
    return nodes;
  }

  toString() {
    return this.toArray()
      .map(({ value }) => value.toString())
      .join(' -> ');
  }

  append(value) {
    const node = new LinkedListNode(value);
    if (!this.head) this.head = node;
    if (this.tail) this.tail.next = node;
    this.tail = node;
    return this;
  }

  prepend(value) {
    const node = new LinkedListNode(value, this.head);
    this.head = node;
    if (!this.tail) this.tail = node;
    return this;
  }

  delete(value) {
    let deletedNode = null;
    if (!this.head) return null;

    if (this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      return deletedNode;
    }
    let node = this.head;
    // 删除操作其实是将 node.next 设置为 node.next.next，即跳过待删除的节点实现的
    // 因此需要保留对待删除结点的上一个结点的引用，所以
    // - node: 待删除结点的上一个结点
    // - node.next: 待删除结点
    // - node.next.next: 待删除结点的下一个结点
    while (node.next) {
      if (node.next.value === value) {
        deletedNode = node.next;
        // 这里用来判断待删除的结点是否是最后一个结点，即 node.next.next 不存在
        // 如果是的话，需要重新赋值 this.tail
        if (!node.next.next) {
          this.tail = node;
        }
        // 这就是删除~
        node.next = node.next.next;
        return deletedNode;
      } else {
        node = node.next;
      }
    }
  }

  find(value) {
    if (!this.head) return null;
    let node = this.head;
    while (node) {
      if (value === node.value) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    // 将 prev, curr, next 整体向后移位，同时将 curr.next 指向 prev
    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
