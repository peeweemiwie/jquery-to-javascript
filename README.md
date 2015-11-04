# javascript
jQuery `.parent()` -> js `.parentNode`

jQuery `.siblings()` -> js `.parentNode.childNodes[]`

jQuery `.addClass()` -> js `.className = "new-class-name"` also `.classList.add("new-class-name")`

jQuery `.removeClass()` -> js `.className = ""` also `.classList.remove("class-name")`

jQuery `.hasClass()` -> js `.classList.contains("class-name")`

jQuery `.append()` -> js `.insertAdjacentHTML(position, text)` https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

  * `beforebegin` Before the element itself.
  * `afterbegin` Just inside the element, before its first child.
  * `beforeend` Just inside the element, after its last child.
  * `afterend` After the element itself.

jQuery `.siblings()` -> js `.nextSibling`? `.nextElementSibling`?

##insertAdjacentHTML
element.insertAdjacentHTML(position, text);

https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

##insertedNode
var insertedNode = parentNode.insertBefore(newNode, referenceNode);

https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

##Node.insertBefore()

https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

var insertedNode = parentNode.insertBefore(newNode, referenceNode);

  // Get a reference to the element in which we want to insert a new node
  
  `var parentElement = document.getElementById('parentElement');`
  
  // Get a reference to the first child
  
  `var theFirstChild = parentElement.firstChild;`

  // Create a new element
  
  `var newElement = document.createElement("div");`

  // Insert the new element before the first child
  
 `parentElement.insertBefore(newElement, theFirstChild);`

##toggle class
 
 
    function a(){
        this.classList.toggle('first');
        this.classList.toggle('sec');
    }
    document.querySelector('#container').addEventListener('mouseenter', a )
    document.querySelector('#container').addEventListener('mouseleave', a )

