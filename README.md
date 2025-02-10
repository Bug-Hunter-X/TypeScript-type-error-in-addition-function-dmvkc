# TypeScript Type Error in Addition Function

This repository demonstrates a common type error in TypeScript: attempting to add a number and a string. The `add` function is designed to take two numbers as input and return their sum.  However, when calling the function with a string ('10'), TypeScript correctly throws a type error because the string cannot be directly added to a number. 

The solution involves type checking and explicit type conversion to handle different input types gracefully. 