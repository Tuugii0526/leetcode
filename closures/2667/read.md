# Javascript Function Types

## Anonymous function

```const add=function(a,b){
    return a+b
}
```

## Immediately Invoked Function Expression (IIFE)

const result =(function (a,b){
const sum= a+b
return sum
})(3,4)
This is for **_encapsulating_** the variable sum. This variable can't be accessed outside this function.

## Functions within functions

function createNewFunction(
return function(a,b){
return a+b
}
)
const f=createNewFunction()
console.log(f(1,2))

## Closure

This( lexical environment)+(inner function)

## Rest arguments

You can use rest syntax to access all the passed arguments as an array.

## Higher order functions

If a function accepts a function argument or returns a function ,it will then be called as _Higher order function._
