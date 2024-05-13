class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }
    // Método para adicionar nó
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}


const list = new LinkedList();
list.prepend();
list.prepend();
list.prepend();
console.log(list);
/* Saída:
LinkedList {
    head Node { data: 3, next: Node { data: 2, next: [Node] } }
}
*/