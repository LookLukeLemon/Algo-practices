class Node {
    value;
    left;
    right;

    constructor(value){
        this.value = value;
    }

    preOrder = (root) => {
        console.log(root.value)

        if(root.left) this.preOrder(root.left)
        if(root.right) this.preOrder(root.right)
    }

    inOrder = (root) => {
        if(root.left) this.inOrder(root.left)
        console.log(root.value)
        if(root.right) this.inOrder(root.right)
    }

    postOrder = (root) => {
        if(root.left) this.postOrder(root.left)
        if(root.right) this.postOrder(root.right)
        console.log(root.value)
    }

    levelOrder = (root) => {
        const levelQueue = [root]

        while(levelQueue.length > 0){
            const root = levelQueue.shift()
            console.log(root.value)

            if(root.left) levelQueue.push(root.left)
            if(root.right) levelQueue.push(root.right)
        }
    }
}

const solution = () => {
    const node1 = new Node(2)
    const node2 = new Node(5)
    const node3 = new Node(1)
    const node4 = new Node(9)
    const node5 = new Node(4)
    const node6 = new Node(6)
    const node7 = new Node(7)

    node1.left = node2
    node1.right = node3
    
    node2.left = node4
    node2.right = node5

    node3.left = node6
    node3.right = node7

    node1.levelOrder(node1)
}

solution()