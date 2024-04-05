asynchonous the computer is working on multiple tasks at the same time instead of completing one task at a time.

synchronous computers do one task at a time

synchronous is bad for large programs because it can lead to blocking. blocking is a program being stuck on one task and not progressing to the others because of that. creates unresponsive applications or frozen

asynchronous good because the tasks gets done even with other unexpected delays to some of the tasks.

it improves the performance and responsiveness of applications

the setTimeOut(func, 2000) will allow the other code to run while it counts down and finishes its task. it performs asynchronously

in javascript asynchronous thins can be done using callbacks (method?)

callback function is like a clown waiting to be called to arrive at party

the "guests arriving" are other tasks that need to be completed/code to be executed before the callback function is called.

callback function is a function that is passed as an argument to another function. only executed after the original function has finished running.

callbacks are use in asynchr. operations such as getting data from the server, waiting for user input, or handling events.

callback hell is when many callback functions are nested into each other creating a pyramid like structure.

to avoid callback hell we can use promises.

promises more organized than callbacks and are more readable.

promises are placeholders for future values and actions. we are telling javascript tp promise to run or do certain tasks at some point and then tell us.

callback functions are attached to the promise to handle outcome of action. and these callbacks are invoked when the promise is fulfilled oor when its not.

syntax: const myPromise = new Promise(function(resolve, reject) {});

declare the initiation of a promise by calling the promise constructor

the constructor takes a single argument that is the executor function
it is called immediately when promise is created
the function takes two arguments resolve and reject functions

the function inside promise is the "executor function"
resolve: is a function to call if promise is fulfilled
reject: function to call if promise fails

after iitializing our promise and outputting into the console, it returns the promise object. inside the object we have a "pending status" and an "undefined value" since we set up the object.

after inputting some things like:
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from the promise!");
    }, 2000);
});
we have a string that should be output into console after 2s

when we check our object, the status is no longer pending but fulfilled and the result now has a string that has been passed to the resolve function

a promise has 3 states:
- pending: this is the initial state. with empty code bracket.
- fulfilled: meaning that what we were trying to do was a success.
- rejected: meaning that no we failed.

the promise is complete when it is either resolved or rejected. thats the end goal. to get one of the two.

how to consume a promise:
- obtaining a reference to the promise: this can be the variable where you store your promise object
-attach callbacks to the promise: this refers to attaching callback functions to our reference point like the .then and .catch methods.
    + .then method is called when the promise is fulfilled.
    + .catch method is called when it has been rejected
-wait for the promise to be fulfilled or rejected: so you just waiting after attaching callback methods.

for example: 
myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

so when the promise is fulfilled the .then method will be called with the resolve value which is stored in 'result'

otherwise the .catch method is called with an error message

we can also use the .finally() method which is called at the end when the promise is done running. and is invoked regardless of the status of the promise: whether its rejected or fulfilled

for example: 
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //code here will be executed regardless of the status
    //of a promise (fulfilled or rejected)
  });

chaining promises involves connecting multiple promises in a sequencence. output of one promise is passed as an input of another.

the linking of the promises is achieved using .then() method. which uses a callback function as an argument and returns a new promise.

the new promise is resolved with the value from the callback function

here is example:
fetch('https://example.com/data')
    .then(response => response.json())
    .then(data => processData(data))
    .then(processedData => {
        // do something with the processed data
    })
    .catch(error => console.log(error))
there are three promises being handled here. the fetch is asynchr. and the tasks are done in order. the returned value of each promise is passed as input of the next.

another way to handle errors in promises is by using the "try-catch" block inside a .then method.

for example:
fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => {
    try {
      //processing received data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => console.log(error));
the "try-catch" will process any error that results from that block.
the outer .catch will catch errors that occur during the fetch request

handling errors makes sure the user experience is better by providing feedback and ensuring that the program continues to run

