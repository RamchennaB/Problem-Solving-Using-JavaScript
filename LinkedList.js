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
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }
   addAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {

        this.tail.next = newNode;
        this.tail = newNode; 
    }
  }
  addAtPos(data,index){
      const newNode=new Node(data);
      if(index < 0){
          console.log("invalid position");
      }
      if(index == 0){
          newNode.next=this.head;
          this.head=newNode;
      }
      else{
          let current = this.head;
          for(let i=0;i<index-1 && current!==null;i++){
              current=current.next;
          }
          if(!current){
              console.log("invalid position");
          }
          else{
              newNode.next=current.next;
              current.next=newNode;
          }
      }
  }

    printAll(){
        let current = this.head;
        while(current!==null){
            console.log(current.data);
            current=current.next;
        }
    }
}
const ll=new LinkedList();
ll.addAtBeg(1);
ll.addAtBeg(2);
ll.addAtEnd(3);
ll.addAtPos(4,2);
ll.printAll();
