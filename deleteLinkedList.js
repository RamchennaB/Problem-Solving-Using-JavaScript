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
    add(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }
    deleteAtBeg(){
        if(!this.head){
            return;
        }else{
            this.head=this.head.next;
        }
    }
    deleteAtPos(index){
        if(index === 1){
            this.head=this.head.next;
        }
        else{
            let current=this.head;
            for(let i=1;i<index-1 && current!=null;i++){
                current=current.next;
            }
            if(current==null){
                console.log("invalid index");
            }else{
                current.next=current.next.next;
            }
        }
    }
    deleteAtEnd(){
        let current=this.head;
        while(current.next.next!==null){
            current=current.next;
        }
        current.next=null;
    }
    printAll(){
        let current=this.head;
        let list="";
        while(current!==null){
            list+=current.data;
            current=current.next;
        }
        console.log(list);
    }
}
const ll=new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.printAll();
ll.deleteAtBeg();
ll.deleteAtEnd();
ll.deleteAtPos(2);
ll.printAll();
