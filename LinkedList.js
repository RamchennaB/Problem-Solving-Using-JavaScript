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
       }
      else{
          this.tail.next=newNode;
   }
   this.tail=newNode;
}
  printAll(){
      let current = this.head;
      while(current !== null){
          console.log(current.data);
          current=current.next;
      }
  }
}
const ll=new LinkedList();
ll.add(1);
ll.add(2);
ll.printAll();
