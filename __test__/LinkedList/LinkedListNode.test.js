import LinkedListNode from '../../src/LinkedList/LinkedListNode';

describe('new LinkedListNode', () => {
  test('with correct value', () => {
    const node = new LinkedListNode(1);
    expect(node.toString()).toBe(1);
  });
  test('with correct next', () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);
    expect(node1.next).toBe(node2);
    expect(node2.next).toBe(null);
  });
});
