# ES6 Basics
![08806026ef621f900121](https://github.com/Ckimatu/alx-backend-javascript/assets/110534527/a4f158a4-1d83-46c0-9874-2625c700403b)

# Resources
- [ECMAScript](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javasript ES6 - iterables and iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=d2cfc168d31d) 

# Learning Objectives
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Tasks
### 0. Const or let?

Modify

- function taskFirst to instantiate variables using const
- function taskNext to instantiate variables using let
```Javascipt
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

Execution example:

bob@dylan:~$ cat 0-main.js
```Javascript
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);
```

bob@dylan:~$

bob@dylan:~$ npm run dev 0-main.js

I prefer const when I can. But sometimes let is okay

bob@dylan:~$ 
