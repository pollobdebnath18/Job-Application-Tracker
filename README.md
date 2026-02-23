1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   ans : getElementById --> When we need one element( using unique id)  then we use getelementById. Returns a single element , and it is fastest method .
   getElementsByClassName --> When we need multiple class name then we use getElementsByClassName . Returns live html Collectin.
   querySelector  ---> Finds the FIRST element matching a CSS selector
   querySelectorAll ---> Finds ALL elements matching a CSS selector


2. How do you create and insert a new element into the DOM?
   ans : const div = document.createElement('div');
   div.innerHTML =  '   insert here '
   and then appendChild where insert it.


3. What is Event Bubbling? And how does it work?
   ans : Event bubbling is a process in the browser where an event starts at the element that triggered it (the target) and then propagates
   upward through its parent elements, all the way to the document.



4. What is Event Delegation in JavaScript? Why is it useful?
ans : Event delegation is a technique in JavaScript where instead of attaching event listeners to each child element, you attach a single 
listener to a parent element. Then you detect which child triggered the event using the event object.



5. What is the difference between preventDefault() and stopPropagation() methods?
   ans: preventDefault() --> Stops the default browser action for an event from happening.
   stopPropagation() ---> Stops the event from bubbling up (or capturing down) the DOM tree.
