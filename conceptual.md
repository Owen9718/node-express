### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Using async functions to await for a return value.

- What is a Promise?
A promise is a object that will return a value in the future.

- What are the differences between an async function and a regular function?

A async function will await a value before continuing the function. A regular function runs it all fast as possible.
- What is the difference between Node.js and Express.js?

NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.

- What is the error-first callback pattern?
The error-first pattern consists of executing a function when the asynchronous operation ends (such as an incoming AJAX response) which takes as first argument an error, if one occurred, and the result of the request as extra arguments.


- What is middleware?
Middleware is code/function that runs in the middle of the request / response cycle!

- What does the `next` function do?
next function allows you to continue on with your code

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
Using Promise.all will acheive the same goal but in less code/time.
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
