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
   }
   else{
      this.tail.next=newNode;
      this.tail=newNode;
 }
}
findMiddle(){
    if(this.head==null){
        return;
    }
    let slow=this.head;
    let fast=this.head;
    
    while(fast !=null && fast.next !=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow.data;
}
printAll(){
    let current =this.head;
    while(current!==null){
        console.log(current.data);
        current=current.next;
    }
}
}
const ll=new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.printAll();
console.log(ll.findMiddle());
