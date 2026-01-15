console.log("DOM Methods Learning Activity - Script Running");

/* 
================================================================================
SECTION 1: getElementById() - Exercises
================================================================================

WHY USE getElementById?
- IDs are UNIQUE - each ID appears only once on a page
- Perfect for finding ONE specific element
- Fast and efficient
- Best for: unique buttons, forms, containers

SYNTAX: document.getElementById('id-name')
RETURNS: A single element (or null if not found)

NOTE: In CSS you use #id-name, but in getElementById you use just 'id-name' (no #)
*/

// ============================================
// EXERCISE 1: DEMO - Shows how getElementById works
// ============================================
const runDemo1 = document.getElementById('run-demo-1');
const demoBtn1 = document.getElementById('demo-btn-1');
const demoText1 = document.getElementById('demo-text-1');
const demoBox1 = document.getElementById('demo-box-1');
const demoResult1 = document.getElementById('demo-result-1');

if (runDemo1) {
  runDemo1.addEventListener('click', function() {
    console.log("=== DEMO 1: getElementById ===");
    
    // Select elements by ID
    console.log("Selecting button by ID:", demoBtn1);
    console.log("Selecting text by ID:", demoText1);
    console.log("Selecting box by ID:", demoBox1);
    
    // Change text using textContent
    if (demoText1) {
      demoText1.textContent = "Text changed with textContent!";
      demoText1.style.color = "#10b981";
      demoText1.style.fontSize = "20px";
    }
    
    // Change HTML using innerHTML
    if (demoBox1) {
      demoBox1.innerHTML = "<strong>HTML</strong> changed!";
      demoBox1.style.backgroundColor = "#fef3c7";
    }
    
    // Change button style
    if (demoBtn1) {
      demoBtn1.textContent = "Clicked!";
      demoBtn1.style.backgroundColor = "#10b981";
    }
    
    // Show result
    if (demoResult1) {
      demoResult1.innerHTML = `
        <strong>Demo Results:</strong><br>
        ✓ Selected button with getElementById('demo-btn-1')<br>
        ✓ Changed text with .textContent<br>
        ✓ Changed HTML with .innerHTML<br>
        ✓ Changed styles with .style property
      `;
    }
    
    // Reset after 3 seconds
    setTimeout(() => {
      if (demoText1) {
        demoText1.textContent = "Original text";
        demoText1.style.color = "";
        demoText1.style.fontSize = "";
      }
      if (demoBox1) {
        demoBox1.innerHTML = "Box 1";
        demoBox1.style.backgroundColor = "";
      }
      if (demoBtn1) {
        demoBtn1.textContent = "Click Me!";
        demoBtn1.style.backgroundColor = "";
      }
      if (demoResult1) {
        demoResult1.innerHTML = "";
      }
    }, 3000);
  });
}

// ============================================
// EXERCISE 2: Student Practice - textContent
// ============================================
// TODO: Students should complete this exercise
// Select the element with id 'practice-text-1' and change its textContent
const practiceBtn1 = document.getElementById('practice-btn-1');

if (practiceBtn1) {
  practiceBtn1.addEventListener('click', function() {
    // STUDENT CODE HERE:
    // 1. Use getElementById to select 'practice-text-1'
    // 2. Change its textContent to "I changed this text!"
    
    // Example solution (students should write this):
    const practiceText1 = document.getElementById('practice-text-1');
    if (practiceText1) {
      practiceText1.textContent = "I changed this text!";
      practiceText1.style.color = "#10b981";
      practiceText1.style.fontWeight = "bold";
    }
    
    console.log("Exercise 2: Changed text with textContent");
  });
}

// ============================================
// EXERCISE 3: Student Practice - innerHTML
// ============================================
// TODO: Students should complete this exercise
// Select the element with id 'practice-html-1' and change its innerHTML
const practiceBtn2 = document.getElementById('practice-btn-2');

if (practiceBtn2) {
  practiceBtn2.addEventListener('click', function() {
    // STUDENT CODE HERE:
    // 1. Use getElementById to select 'practice-html-1'
    // 2. Change its innerHTML to "<strong>Bold HTML</strong> and <em>italic text</em>"
    
    // Example solution (students should write this):
    const practiceHtml1 = document.getElementById('practice-html-1');
    if (practiceHtml1) {
      practiceHtml1.innerHTML = "<strong>Bold HTML</strong> and <em>italic text</em>";
      practiceHtml1.style.backgroundColor = "#fef3c7";
    }
    
    console.log("Exercise 3: Changed HTML with innerHTML");
  });
}

// ============================================
// EXERCISE 4: Student Practice - style
// ============================================
// TODO: Students should complete this exercise
// Select the element with id 'practice-style-1' and change its style
const practiceBtn3 = document.getElementById('practice-btn-3');

if (practiceBtn3) {
  practiceBtn3.addEventListener('click', function() {
    // STUDENT CODE HERE:
    // 1. Use getElementById to select 'practice-style-1'
    // 2. Change its color to "red"
    // 3. Change its fontSize to "24px"
    // 4. Change its backgroundColor to "lightblue"
    
    // Example solution (students should write this):
    const practiceStyle1 = document.getElementById('practice-style-1');
    if (practiceStyle1) {
      practiceStyle1.style.color = "red";
      practiceStyle1.style.fontSize = "24px";
      practiceStyle1.style.backgroundColor = "lightblue";
      practiceStyle1.style.padding = "20px";
    }
    
    console.log("Exercise 4: Changed styles");
  });
}

/* 
================================================================================
SECTION 2: getElementsByClassName() - Exercises
================================================================================

WHY USE getElementsByClassName?
- Classes are REUSABLE - same class can be on many elements
- Perfect for selecting MULTIPLE elements at once
- Best for: groups of similar items (cards, buttons, list items)
- Returns HTMLCollection (like an array) - you MUST loop through it!

SYNTAX: document.getElementsByClassName('class-name')
RETURNS: HTMLCollection (array-like object) of all matching elements

NOTE: In CSS you use .class-name, but in getElementsByClassName you use just 'class-name' (no .)
*/

// ============================================
// EXERCISE 1: DEMO - Shows how getElementsByClassName works
// ============================================
const runDemo2 = document.getElementById('run-demo-2');
const demoResult2 = document.getElementById('demo-result-2');

if (runDemo2) {
  runDemo2.addEventListener('click', function() {
    console.log("=== DEMO 2: getElementsByClassName ===");
    
    // Select ALL elements with class 'demo-card'
    const demoCards = document.getElementsByClassName('demo-card');
    console.log("Found cards:", demoCards);
    console.log("Number of cards:", demoCards.length);
    
    // Loop through the collection and change each one
    for (let i = 0; i < demoCards.length; i++) {
      demoCards[i].style.backgroundColor = "#dbeafe";
      demoCards[i].style.borderColor = "#3b82f6";
      demoCards[i].textContent = `Card ${i + 1} - Updated!`;
      demoCards[i].style.transform = "scale(1.1)";
    }
    
    // Show result
    if (demoResult2) {
      demoResult2.innerHTML = `
        <strong>Demo Results:</strong><br>
        ✓ Selected ${demoCards.length} cards with getElementsByClassName('demo-card')<br>
        ✓ Looped through the collection with for loop<br>
        ✓ Changed each card's textContent and style<br>
        <strong>Remember:</strong> getElementsByClassName returns a collection, so you must loop!
      `;
    }
    
    // Reset after 3 seconds
    setTimeout(() => {
      for (let i = 0; i < demoCards.length; i++) {
        demoCards[i].style.backgroundColor = "#fef3c7";
        demoCards[i].style.borderColor = "#f59e0b";
        demoCards[i].textContent = `Card ${i + 1}`;
        demoCards[i].style.transform = "";
      }
      if (demoResult2) {
        demoResult2.innerHTML = "";
      }
    }, 3000);
  });
}

// ============================================
// EXERCISE 2: Student Practice - textContent with loop
// ============================================
// TODO: Students should complete this exercise
const practiceBtn4 = document.getElementById('practice-btn-4');

if (practiceBtn4) {
  practiceBtn4.addEventListener('click', function() {
    // STUDENT CODE HERE:
    // 1. Use getElementsByClassName to select all 'item-text' elements
    // 2. Loop through the collection
    // 3. Change each element's textContent to "Updated Item"
    
    // Example solution (students should write this):
    const itemTexts = document.getElementsByClassName('item-text');
    for (let i = 0; i < itemTexts.length; i++) {
      itemTexts[i].textContent = `Updated Item ${i + 1}`;
      itemTexts[i].style.color = "#10b981";
      itemTexts[i].style.fontWeight = "bold";
    }
    
    console.log("Exercise 2: Changed all items with textContent");
  });
}

// ============================================
// EXERCISE 3: Student Practice - innerHTML with loop
// ============================================
// TODO: Students should complete this exercise
const practiceBtn5 = document.getElementById('practice-btn-5');

if (practiceBtn5) {
  practiceBtn5.addEventListener('click', function() {
    // STUDENT CODE HERE:
    // 1. Use getElementsByClassName to select all 'box-item' elements
    // 2. Loop through the collection
    // 3. Change each element's innerHTML to "<span style='color: green;'>Updated!</span>"
    
    // Example solution (students should write this):
    const boxItems = document.getElementsByClassName('box-item');
    for (let i = 0; i < boxItems.length; i++) {
      boxItems[i].innerHTML = `<span style="color: #10b981; font-weight: bold;">Updated Box ${i + 1}!</span>`;
      boxItems[i].style.backgroundColor = "#d1fae5";
    }
    
    console.log("Exercise 3: Changed all boxes with innerHTML");
  });
}

// ============================================
// EXERCISE 4: Student Practice - style with loop
// ============================================
// TODO: Students should complete this exercise
const practiceBtn6 = document.getElementById('practice-btn-6');

if (practiceBtn6) {
  practiceBtn6.addEventListener('click', function() {
    // STUDENT CODE HERE:
    // 1. Use getElementsByClassName to select all 'color-box' elements
    // 2. Loop through the collection
    // 3. Change each element's backgroundColor to "lightblue"
    // 4. Change each element's color to "darkblue"
    
    // Example solution (students should write this):
    const colorBoxes = document.getElementsByClassName('color-box');
    for (let i = 0; i < colorBoxes.length; i++) {
      colorBoxes[i].style.backgroundColor = "lightblue";
      colorBoxes[i].style.color = "darkblue";
      colorBoxes[i].style.borderColor = "#3b82f6";
      colorBoxes[i].textContent = `Box ${i + 1}`;
    }
    
    console.log("Exercise 4: Changed all colors");
  });
}

/* 
================================================================================
SECTION 3: querySelector() - Exercises
================================================================================

WHY USE querySelector?
- Most FLEXIBLE method - works with any CSS selector
- Can select by ID (#id), class (.class), tag (div), or complex selectors
- Modern and commonly used
- Returns the FIRST matching element only
- For all matches, use querySelectorAll() instead

SYNTAX: document.querySelector('css-selector')
RETURNS: First matching element (or null if not found)

SELECTOR EXAMPLES:
- '#myId' - selects by ID (note the #)
- '.myClass' - selects by class (note the .)
- 'div' - selects by tag name
- 'div.product-card' - selects div with class product-card
*/

// ============================================
// EXERCISE 1: DEMO - Shows how querySelector works
// ============================================
const runDemo3a = document.getElementById('run-demo-3a');
const runDemo3b = document.getElementById('run-demo-3b');
const runDemo3c = document.getElementById('run-demo-3c');
const demoResult3 = document.getElementById('demo-result-3');

if (runDemo3a) {
  runDemo3a.addEventListener('click', function() {
    console.log("=== DEMO 3a: querySelector with ID ===");
    
    // Select by ID using # prefix (like CSS!)
    const element = document.querySelector('#query-demo-1');
    console.log("Selected by ID:", element);
    
    if (element) {
      element.style.backgroundColor = "#dbeafe";
      element.style.borderColor = "#3b82f6";
      element.textContent = "Selected by #query-demo-1";
    }
    
    if (demoResult3) {
      demoResult3.innerHTML = `
        <strong>Selected by ID:</strong><br>
        querySelector('#query-demo-1')<br>
        <strong>Note:</strong> Use # for IDs in querySelector!
      `;
    }
    
    setTimeout(() => {
      if (element) {
        element.style.backgroundColor = "";
        element.style.borderColor = "";
        element.textContent = "Selected by ID";
      }
      if (demoResult3) {
        demoResult3.innerHTML = "";
      }
    }, 2000);
  });
}

if (runDemo3b) {
  runDemo3b.addEventListener('click', function() {
    console.log("=== DEMO 3b: querySelector with Class ===");
    
    // Select by class using . prefix (like CSS!)
    const element = document.querySelector('.query-box');
    console.log("Selected by class:", element);
    
    if (element) {
      element.style.backgroundColor = "#fce7f3";
      element.style.borderColor = "#ec4899";
      element.textContent = "Selected by .query-box (first match)";
    }
    
    if (demoResult3) {
      demoResult3.innerHTML = `
        <strong>Selected by Class:</strong><br>
        querySelector('.query-box')<br>
        <strong>Note:</strong> Returns FIRST matching element only!<br>
        <strong>Note:</strong> Use . for classes in querySelector!
      `;
    }
    
    setTimeout(() => {
      if (element) {
        element.style.backgroundColor = "";
        element.style.borderColor = "";
        element.textContent = "Selected by class";
      }
      if (demoResult3) {
        demoResult3.innerHTML = "";
      }
    }, 2000);
  });
}

if (runDemo3c) {
  runDemo3c.addEventListener('click', function() {
    console.log("=== DEMO 3c: querySelector with Tag ===");
    
    // Select by tag name (no prefix needed)
    const element = document.querySelector('p.query-text');
    console.log("Selected by tag:", element);
    
    if (element) {
      element.style.backgroundColor = "#d1fae5";
      element.style.border = "2px solid #10b981";
      element.textContent = "Selected by tag 'p.query-text'";
    }
    
    if (demoResult3) {
      demoResult3.innerHTML = `
        <strong>Selected by Tag:</strong><br>
        querySelector('p.query-text')<br>
        <strong>Note:</strong> Can combine tag and class!
      `;
    }
    
    setTimeout(() => {
      if (element) {
        element.style.backgroundColor = "";
        element.style.border = "";
        element.textContent = "Selected by tag";
      }
      if (demoResult3) {
        demoResult3.innerHTML = "";
      }
    }, 2000);
  });
}

// ============================================
// EXERCISE 2: Student Practice - querySelector with ID
// ============================================
// TODO: Students should complete this exercise
const practiceBtn7 = document.getElementById('practice-btn-7');

if (practiceBtn7) {
  practiceBtn7.addEventListener('click', function() {
    // STUDENT CODE HERE:
    // 1. Use querySelector('#target-id') to select the element
    // 2. Change its textContent to "Selected with querySelector!"
    // 3. Change its style
    
    // Example solution (students should write this):
    const targetElement = document.querySelector('#target-id');
    if (targetElement) {
      targetElement.textContent = "Selected with querySelector!";
      targetElement.style.backgroundColor = "#dbeafe";
      targetElement.style.borderColor = "#3b82f6";
      targetElement.style.color = "#1e40af";
    }
    
    console.log("Exercise 2: Selected by ID with querySelector");
  });
}

// ============================================
// EXERCISE 3: Student Practice - querySelector with Class
// ============================================
// TODO: Students should complete this exercise
const practiceBtn8 = document.getElementById('practice-btn-8');

if (practiceBtn8) {
  practiceBtn8.addEventListener('click', function() {
    // STUDENT CODE HERE:
    // 1. Use querySelector('.target-class') to select the FIRST element
    // 2. Change its innerHTML to "<strong>First item selected!</strong>"
    // 3. Change its style
    
    // Example solution (students should write this):
    const firstTarget = document.querySelector('.target-class');
    if (firstTarget) {
      firstTarget.innerHTML = "<strong>First item selected!</strong>";
      firstTarget.style.backgroundColor = "#dbeafe";
      firstTarget.style.borderColor = "#3b82f6";
    }
    
    console.log("Exercise 3: Selected first by class with querySelector");
  });
}

// ============================================
// EXERCISE 4: Student Practice - querySelector with complex selector
// ============================================
// TODO: Students should complete this exercise
const practiceBtn9 = document.getElementById('practice-btn-9');

if (practiceBtn9) {
  practiceBtn9.addEventListener('click', function() {
    // STUDENT CODE HERE:
    // 1. Use querySelector('div.special') to select the FIRST div with class special
    // 2. Change its textContent and style
    
    // Example solution (students should write this):
    const specialDiv = document.querySelector('div.special');
    if (specialDiv) {
      specialDiv.textContent = "This div was selected with 'div.special'!";
      specialDiv.style.backgroundColor = "#fef3c7";
      specialDiv.style.borderColor = "#f59e0b";
      specialDiv.style.fontWeight = "bold";
    }
    
    console.log("Exercise 4: Selected with complex selector");
  });
}

/* 
================================================================================
FINAL CHALLENGE: Shopping Cart using all methods
================================================================================
*/

let cart = [];
let total = 0;

// Get all "Add to Cart" buttons using getElementsByClassName
const addToCartButtons = document.getElementsByClassName('add-to-cart');

// Loop through all buttons and add event listeners
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', function() {
    // Get the parent product item
    const productItem = this.parentElement;
    
    // Use querySelector to find product name and price within the product item
    const productName = productItem.querySelector('.product-name').textContent;
    const productPriceText = productItem.querySelector('.product-price').textContent;
    const productPrice = parseFloat(productPriceText.replace('$', ''));
    
    // Add to cart
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    
    // Update cart display using getElementById
    updateCartDisplay();
    
    console.log(`Added ${productName} to cart. Total: $${total.toFixed(2)}`);
  });
}

// Function to update cart display
function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  if (cartItems) {
    // Clear previous items
    cartItems.innerHTML = '';
    
    // Add each cart item
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `<strong>${item.name}</strong> - $${item.price.toFixed(2)}`;
      cartItems.appendChild(itemDiv);
    });
    
    if (cart.length === 0) {
      cartItems.innerHTML = '<p style="color: #999;">Cart is empty</p>';
    }
  }
  
  if (cartTotal) {
    cartTotal.textContent = total.toFixed(2);
  }
}

// Clear cart button using getElementById
const clearCartBtn = document.getElementById('clear-cart');
if (clearCartBtn) {
  clearCartBtn.addEventListener('click', function() {
    cart = [];
    total = 0;
    updateCartDisplay();
    console.log("Cart cleared!");
  });
}

// Initialize cart display
updateCartDisplay();

/* 
================================================================================
KEY TAKEAWAYS - Summary
================================================================================

1. getElementById('id-name')
   - Use when: Element is UNIQUE (only one exists)
   - Returns: Single element
   - NO # prefix needed
   - Best for: Buttons, forms, unique containers

2. getElementsByClassName('class-name')
   - Use when: MULTIPLE elements share the same purpose
   - Returns: HTMLCollection (array-like)
   - NO . prefix needed
   - MUST loop through the collection!
   - Best for: Cards, buttons, list items

3. querySelector('selector')
   - Use when: You want flexibility with CSS selectors
   - Returns: First matching element
   - YES, use # for IDs and . for classes (like CSS!)
   - Best for: Modern JavaScript, complex selectors

ID vs CLASS:
- ID = Unique identifier (one per page) → Use getElementById
- Class = Reusable style/group identifier (many per page) → Use getElementsByClassName

textContent vs innerHTML:
- textContent = Plain text only (safer, faster)
- innerHTML = Can include HTML tags (more powerful, but be careful!)

Remember: Always check if element exists before using it!
if (element) { ... }
*/
