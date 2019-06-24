import LinkedList from '../../src/LinkedList/LinkedList';

describe('new LinkedList', () => {
  test('without error', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });
});

describe('add node', () => {
  let list = null;

  beforeEach(() => {
    list = new LinkedList();
  });
  afterEach(() => {
    list = null;
  });

  test('by append', () => {
    list
      .append(1)
      .append(2)
      .append(3);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.tail.value).toBe(3);
    expect(list.toString()).toBe('1 -> 2 -> 3');
  });

  test('by prepend', () => {
    list
      .prepend(3)
      .prepend(2)
      .prepend(1);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.tail.value).toBe(3);
    expect(list.toString()).toBe('1 -> 2 -> 3');
  });
});

describe('delete node', () => {
  let list = null;
  let deletedNode = null;

  beforeEach(() => {
    list = new LinkedList();
    list
      .append(1)
      .append(2)
      .append(2)
      .append(3);
  });
  afterEach(() => {
    list = null;
    deletedNode = null;
  });

  test('empty', () => {
    const emptyList = new LinkedList();
    deletedNode = emptyList.delete(1);
    expect(deletedNode).toBeNull();
  });

  test('at head', () => {
    deletedNode = list.delete(1);
    expect(list.head.value).toBe(2);
    expect(list.head.next.value).toBe(2);
    expect(list.tail.value).toBe(3);
    expect(list.toString()).toBe('2 -> 2 -> 3');
    expect(deletedNode).toHaveProperty('value', 1);
  });

  test('at middle', () => {
    deletedNode = list.delete(2);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.tail.value).toBe(3);
    expect(list.toString()).toBe('1 -> 2 -> 3');
    expect(deletedNode).toHaveProperty('value', 2);
  });

  test('at tail', () => {
    deletedNode = list.delete(3);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.tail.value).toBe(2);
    expect(list.toString()).toBe('1 -> 2 -> 2');
    expect(deletedNode).toHaveProperty('value', 3);
  });
});

describe('delete node', () => {
  let list = null;

  beforeEach(() => {
    list = new LinkedList();
    list
      .append(1)
      .append(2)
      .append(3);
  });
  afterEach(() => {
    list = null;
  });

  test('empty', () => {
    const emptyList = new LinkedList();
    expect(emptyList.find(1)).toBeNull();
  });

  test('found', () => {
    expect(list.find(1)).toHaveProperty('value', 1);
    expect(list.find(2)).toHaveProperty('value', 2);
    expect(list.find(3)).toHaveProperty('value', 3);
  });

  test('not found', () => {
    expect(list.find(4)).toBeNull();
  });
});

describe('reverse list', () => {
  let list = null;

  beforeEach(() => {
    list = new LinkedList();
    list
      .append(1)
      .append(2)
      .append(3);
  });
  afterEach(() => {
    list = null;
  });

  test('(1 -> 2 -> 3) => (3 -> 2 -> 1)', () => {
    expect(list.reverse().toString()).toBe('3 -> 2 -> 1');
  });
});
