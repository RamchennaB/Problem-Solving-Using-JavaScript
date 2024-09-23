class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    
    addAtBeg(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }
    addAtPos(data, index){
        const newNode=new Node(data);
        if(index < 0){
         console.log("Invalid position");
        }
        if(index < 1){
            newNode.next=this.head;
            this.head=newNode;
        }
        else{
            let current =this.head;
            for(let i=0;i<index - 1&& current!==null;i++){
                current=current.next;
            }
            if(current==null){
                console.log("invalid index");
            }
            else{
                newNode.next=current.next;
                current.next=newNode;
            }
        }
        
    }
    addAtEnd(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }
    
    printAll(){
        let current=this.head;
        while(current!==null){
            console.log(current.data);
            current=current.next;
        }
    }
}
const ll=new LinkedList();
ll.addAtBeg(1);
ll.addAtBeg(2);
ll.addAtPos(3,1);
ll.addAtEnd(4);
ll.printAll();
