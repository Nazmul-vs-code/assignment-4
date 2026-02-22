# assignment-4

Q1. ( What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? ) 
  Ans:  getElementById finds a single and unique element from the html code, and (getElementsByClassName) finds an element that is typically common. 
        ( querySelector / querySelectorAll ) and these two function finds the elements based on CSS.

Q2. ( How do you create and insert a new element into the DOM? )
  Ans: I usally use document.createElement() to create an element and than I use innerHTML() to insert html property, and sometimes I just use innertext() if I need to just add        text.
Q3.  (What is Event Bubbling? And how does it work? )
  Ans : Event Bubbling is a process in the DOM where an event (like a click) starts at the specific target element (the child) and then "bubbles up" through all of its parent           elements in order, one by one, until it reaches the root of the document. When we click on any btton (for example), we can see some changes on the page and this way it           works.
Q4.  (What is Event Delegation in JavaScript? Why is it useful?)
  Ans : Event Delegation is a design pattern in JavaScript used to handle events efficiently by attaching a single event listener to a parent element instead of adding multiple         listeners to every individual child element.Event delegation is useful because it allows you to handle multiple events using only one listener on a parent element
Q5.  ( What is the difference between preventDefault() and stopPropagation() methods? )
  Ans : 1. preventDefault() What it does: Stops the default browser behavior of an event.
      Use case: Use it when you don't want a link to open a URL or a submit button to refresh the page.
      Example: Clicking a link <a> usually takes you to a new page. preventDefault() keeps you on the same page but lets you run your own code instead.
      2. stopPropagation()
      What it does: Stops the event from bubbling up the DOM tree.
      Use case: Use it when you have an element inside another element (like a button inside a div) and you don't want the parent’s click handler to fire when you click the        child.
      Example: If you click a "Delete" button inside a clickable card, stopPropagation() ensures only the delete function runs and the "Open Card" function does not.
