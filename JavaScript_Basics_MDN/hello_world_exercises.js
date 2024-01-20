/*
 * Based on the given hello world example here are some exercises to update the html element by using DOM.
 */

// Uses ID to select the element and then update it.
const helloWorldID = document.getElementById("hello-world");
helloWorldID.textContent = "Hello World by ID";

// Uses class to select the element and then update it.
const helloWorldClass = document.getElementsByClassName("hello-world")[0]; // Using index we can select a specific occurence
helloWorldClass.textContent = "Hello World by Class";

// Uses tag to select the element and then update it.
const helloWorldTag = document.getElementsByTagName("hello")[0];
helloWorldTag.textContent = "Hello World by Tag";

// Uses query selector to select the element and then update it.
const helloWorldQuery = document.querySelector(".hello-world-query")[0];
helloWorldQuery.textContent = "Hello World by Query"

// TODO: Update the elements using other than .textContent
