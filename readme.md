
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**getElementById** : It selects a single element by its's id attribute and return single Element object or null
**getElementsByClassName**: It selets all elements that prosses a specific classname and return HTML collection
**querySelector**:Selects the first element that matches a CSS selector.
Works with id, class, tag, or complex selectors and return  a single Element object, or null
**querySelectorAll**:Selects all elements that match a CSS selector and return a NodeList


2. How do you **create and insert a new element into the DOM**?
Create element:const newDiv = document.createElement('div'); 
Add attributes:const textNode = document.createTextNode('This is a new div!'); newDiv.appendChild(textNode);
Insert the new element: const parentElement = document.getElementById('container');
parentElement.appendChild(newDiv);

3. What is **Event Bubbling** and how does it work?
  Event bubbling is the default process in a browser's Document Object Model (DOM) where an event, triggered on a specific element, "bubbles" or propagates upwards through its parent elements to the document's root.
  
  Event Bubbling is when an event on an element triggers its handler first and then propagates up to parent elements, allowing parent handlers to respond unless stopped with e.stopPropagation().
   
4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is basically a pattern to handle events efficiently.

Useful beceause Performance Optimization,Handling Dynamic Content,Code Simplicity and Maintainability,Reduced Memory Footprint.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
 **preventDefault()**:stops the default browser behavior
 
**stopPropagation()**:stops the event from reaching parent elements.


