/* Knowing how code is executed in JavaScript
 
*   JavaScript is single-threaded, meaning it can only execute one task at a time in a single call stack. 
    This design simplifies code execution but introduces challenges when handling tasks like I/O or timers. 

*   Javascript Execution Context
    The JavaScript Execution Context refers to the environment in which JavaScript code is executed. 
    It defines what variables, objects,and functions are accessible and determines behavior of this keyword.

#   Javascript run code in two phases within a Execution Context
    1. Memory-Creation Phase:
        This phase happens before code execution.
        JavaScript sets up the environment for the code to run:
        Hoisting:
        Variables declared with var are hoisted to the top of their scope and initialized to undefined.
        Function declarations are hoisted with their entire definition.
        let and const variables are also hoisted but remain in a Temporal Dead Zone (TDZ) 
        until assigned a value.
        Memory Allocation:
            Memory is allocated for variables, functions, and objects.
        Determination of this:
            The value of this is set depending on the context (global object, specific object, etc.).
    2. Execution Phase
        JavaScript executes the code line by line in this phase.
        Variables are assigned values, and functions are invoked.
        The execution phase relies on the environment set up in the creation phase.
        Any references to variables still in the Temporal Dead Zone will throw an error.
    
    {code}->global Execution Context -> stored in this keyword

#   Types of Execution Contexts
    1. Global Execution Context (GEC):
        ->Created by default when a JavaScript file runs.
        ->Contains global variables and functions.
        ->The this keyword refers to the global object (window in browsers, global in Node.js).

    2. Function Execution Context (FEC):
        ->Created when a function is invoked.
        ->Has its own scope and this value.
        Contains:
        Arguments object: Local arguments passed to the function.
        Scope chain: Access to its own variables and outer scopes.
        this binding: Depends on how the function is called.
        
    3. Eval Execution Context (rare):
        ->Created when eval() is executed.
        ->Not commonly used due to security and performance concerns.

Phases of Execution Context
Creation Phase:

Memory is allocated for variables, functions, and objects.
Variables are hoisted with undefined, and functions are hoisted with their definitions.
The this value is determined.
Execution Phase:
Code runs line by line.
Variables are assigned values, and functions are executed.

3. Call Stack
Manages execution contexts in a Last In, First Out (LIFO) manner.
Global execution context is pushed first, followed by function contexts as they are called.
When a function finishes, its context is popped off the stack.
4. Key Concepts
Lexical Environment: Determines variable accessibility based on code location.
Hoisting: Variables and functions are moved to the top of their scope during the creation phase.
Scope Chain: Enables access to outer variables in nested functions.
Understanding execution context is crucial for debugging, working with closures, and managing this.


1. Types of Execution Contexts
Global Execution Context (GEC):

Created by default when a JavaScript file runs.
Contains global variables and functions.
The this keyword refers to the global object (window in browsers, global in Node.js).
Function Execution Context (FEC):

Created when a function is invoked.
Has its own scope and this value.
Contains:
Arguments object: Local arguments passed to the function.
Scope chain: Access to its own variables and outer scopes.
this binding: Depends on how the function is called.
Eval Execution Context (rare):

Created when eval() is executed.
Not commonly used due to security and performance concerns.
2. Phases of Execution Context
Creation Phase:

Memory is allocated for variables, functions, and objects.
Variables are hoisted with undefined, and functions are hoisted with their definitions.
The this value is determined.
Execution Phase:

Code runs line by line.
Variables are assigned values, and functions are executed.
3. Call Stack
Manages execution contexts in a Last In, First Out (LIFO) manner.
Global execution context is pushed first, followed by function contexts as they are called.
When a function finishes, its context is popped off the stack.
4. Key Concepts
Lexical Environment: Determines variable accessibility based on code location.
Hoisting: Variables and functions are moved to the top of their scope during the creation phase.
Scope Chain: Enables access to outer variables in nested functions.
Understanding execution context is crucial for debugging, working with closures, and managing this.
*/
