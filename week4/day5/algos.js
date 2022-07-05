//REMOVE NTH NODE FROM A LINKED LIST

//you will have to console log almost everything to understand how a link list works
//a linked list: tell it to no longer point to a place. Tell 3 to not point to 4 anymore
//how to make something continue to run until something is met
let removeNthFromEnd = function (head, n) {
  let dummyHead = new ListNode(-1); //created a list node at -1 behind head
  dummyHead.next = head; //sets the head in front of dummyhead
  let resultHead = dummyHead; //stores dummyhead into resultHead
  let count = 0; //starts a counter for a while loop
  let tail = head; // stores the head into tail

  while (count < n) {
    //find our correct area for nth node
    count++; //increments the counter up
    tail = tail.next; //increment the tail
  }

  let removeNode = head; //stores head into RN
  let prev = dummyHead; //stores -1 dummy into P

  while (tail) {
    //while there is a tail and it is not null
    //increment our tail all the way to the end
    tail = tail.next; //tail will increment
    removeNode = removeNode.next; //RN = head, increments the head
    prev = prev.next; //P will increment behind head/RN
  }
  prev.next = removeNode.next; //skip over 4
  return resultHead.next; //when tail gets to null, return the result
};

// removeNthFromEnd([1, 2, 3, 4, 5], 2);
//node that goes right before the head gets rid of edge cases

//====== RAYLEIGH'S EXAMPLE
let removeNthFromEndOfList = function (head, n) {
  let l = head;
  let r = head;
  let behind = null;
  while (n > 0) {
    r = r.next;
    n--;
  }

  while (r != null) {
    r = r.next;
    behind = l;
    l = l.next;
    console.log("behind", behind, "left", l, "right", r);
  }
  if (behind == null) {
    return head.next;
    console.log(head.next);
  }
  behind.next = l.next;
  console.log("behind", behind, "left", l, "right", r);

  return head;
};

//========================================
//REMOVE DUPLICATES FROM A SORTED LIST

let deleteDuplicates = function (head) {
  let current = head;

  //[1, 1, 2, 3, 3]

  //while head is not null and the next node is not null
  while (current != null && current.next != null) {
    //if the value of the next node from head is equal to the value of the head
    if (current.next.val === current.val) {
      //the node after head will skip over and become the node that's next to current.next
      current.next = current.next.next;
    } else {
      //otherwise, the head will go to the next node
      current = current.next;
    }
  } //return the head
  return head;
};

// console.log(deleteDuplicates([1, 1, 2, 3, 4]));
