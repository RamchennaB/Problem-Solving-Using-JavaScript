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
reverse(){
    let prev= null;
    let current=this.head;
    let next=null;
    
    while(current !==null){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    this.head=prev;
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
ll.printAll();
ll.reverse();
ll.printAll();
