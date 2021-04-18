

### 1. 定义

链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。

链表分为 单链表 双链表 循环链表

和顺序表的区别：

顺序表是在计算机内存中以数组的形式保存的线性表，是指用一组地址连续的存储单元依次存储数据元素的线性结构。线性表采用顺序存储的方式存储就称之为顺序表。顺序表是将表中的结点依次存放在计算机内存中一组地址连续的存储单元中。

### 2. 特点 逻辑上 物理上

逻辑上属于线性表，物理存储上属于非连续非顺序

线性表包括：栈 队列 链表 顺序表

### 3. 链表的操作

增 删 改 查

### 4. 链表在js里的表示

```
function Node(val) {
    this.val = val;
    this.next = null;
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5
```

### 5. 链表操作的实现

- 查
```
// 链表 找到元素为4的节点
function find(head) {
    let node = head
    while(node.val !== 4) {
        node = node.next;
    }
    return node;
}
```
- 删

```
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```
- 增
```
var insertNode = function(node) {
    item.next = node;
    node.next = item.next.next;
}
```
- 改
```
```


### 6. 链表常见题型

- 插入节点 包括双链表

- 链表反转

迭代 把原链表的node依次拿出来接到新链表的头部
``` 
var reverseList = function(head) {
    // newHead存放新链表的头部
    let newHead = null;
    while(head !== null) {
        let tmp = head.next;
        head.next = newHead;
        newHead = head;
        head = tmp;
    }
    return newHead;
};
```
递归

```
var reverseList = function(head) {
    if(head === null || head.next === null) {
        return head;
    }
    let tmp = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return tmp;
}
```

栈 最笨的方式 需要额外空间

```
var reverseList = function(head) {
    if(head === null || head.next === null) {
        return head;
    } 
}

```

- 寻找倒数第k个元素 快慢指针 当快指针走了完之后，慢指针还有k步没走 从而得到倒数第k个节点

```
var kthToLast = function(head, k) {
    let fast = slow = head;
    let n = 0;
    while(fast) {
        if(n >= k) {
            slow = slow.next;
        }
        fast = fast.next;
        n++;
    }
    return slow.val
};
```

- 找中点  快慢指针

```
var middleNode = function(head) {
    if(head === null || head.next === null) return head;
    let fast = slow = head;
    // 注意循环条件
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow
};
```

- 判断是否循环链表 快慢指针

```
var hasCycle = function(head) {
    if(head === null || head.next === null) return false;
    let fast = slow = head 
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow) return true;
    }
    return false;
    
};

```
- 移动节点 向前 向后
```
```


