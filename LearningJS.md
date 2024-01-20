
# JavaScript Bascis

JavaScript is a programming language that adds interactivity to your website. It was invented by Brendan Eich.

The reason the instruction to place the `<script>` element near the bottom of the HTML file is that the browser reads code in the order it appears in the file. If the JavaScript loads first and it is supposed to affect the HTML that hasn't loaded yet, there could be problems. Placing JavaScript near the bottom of an HTML page is one way to accommodate this dependency. 

### Hello World Example

- In your index.html file, enter this code on a new line, just before the closing `</body>` 

  tag: `<script src="scripts/main.js"></script>`
- Add this code to the main.js file:

  `const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";`

- The heading text changed to Hello world! using JavaScript. 

- using a function called `querySelector()` to grab a reference to your heading, and then store it in a variable called `myHeading`. This is similar to what we did using CSS selectors. When you want to do something to an element, you need to select it first.
- Following that, the code set the value of the `myHeading` variable's `textContent` property (which represents the content of the heading) to Hello world!.


## Variables

- Variables are containers that store values. 
- JavaScript is case sensitive. 
- Everything in JavaScript is an object and can be stored in a variable. 

  ![Alt text](image.png)

## Operators

- An operator is a mathematical symbol that produces a result based on two values (or variables).
 
  ![Alt text](image-1.png)












