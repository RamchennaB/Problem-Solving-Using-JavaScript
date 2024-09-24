class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class BinaryTree{
    constructor(){
        this.root=null;
    }
    insert(data){
        const newNode =new Node(data);
        if(this.root == null){
            this.root=newNode;       
        }else{
            this._insertNode(this.root, newNode);
        }
    }
    _insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left=newNode;
            }
            else{
                this._insertNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                node.right=newNode;
            }
            else{
                this._insertNode(node.right, newNode);
            }
        }
    }
    inorderTraversal(node = this.root){
        if(node!==null){
            this.inorderTraversal(node.left);
            console.log(node.data);
            this.inorderTraversal(node.right);
        }
    }
    preorderTraversal(node = this.root){
        if(node!==null){
            console.log(node.data);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }
    postorderTraversal(node = this.root){
        if(node!==null){
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.data);
        }
    }
}
const tree=new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.inorderTraversal();
tree.postorderTraversal();
tree.preorderTraversal();
