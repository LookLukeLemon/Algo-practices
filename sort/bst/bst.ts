
class TreeNode {
    leftNode: TreeNode| undefined;
    rightNode: TreeNode | undefined;
    value: number;

    constructor(value) {
        this.value = value;
    }

    preOrder(){
        if(this.value){
            process.stdout.write(`${this.value }`);
            this.leftNode?.preOrder();
            this.rightNode?.preOrder();
        }
    }

    inOrder(){
        if(this.value){
            this.leftNode?.inOrder();
            process.stdout.write(`${this.value }`);
            this.rightNode?.inOrder();
        }
    }

    postOrder(){
        if(this.value){
            this.leftNode?.postOrder();
            this.rightNode?.postOrder();
            process.stdout.write(`${this.value }`);
        }
    }
}

const insertLevelOrder = (arr: number[], i:number) =>
{
    let root:TreeNode | undefined;
    
    if (i < arr.length) {
        root = new TreeNode(arr[i]);
        root.leftNode = insertLevelOrder(arr, 2 * i + 1);
        root.rightNode = insertLevelOrder(arr, 2 * i + 2);
    }
    return root;
}


const sourceArr :number[] = [4,5,1,6,8,10]
const rootNode = insertLevelOrder(sourceArr, 0);

if (rootNode){
    rootNode.preOrder()
    console.log()
    rootNode.inOrder()
    console.log()
    rootNode.postOrder()
}