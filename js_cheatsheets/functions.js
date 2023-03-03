// === JS Cheatsheet: Functions Basic ====================

// --- General Syntax ------------------------------------

// - Function as Declaration - - - - - - - - - - - - - - -
function functionName(param1, param2, ...) {
	/** Statements */
}
// Function Declarations dont matter where they are
// defined to be invoked


// - Function as Expression - - - - - - - - - - - - - - - 
let val = function() {
	/** Statements */
}; // ! <- Semicolon!
// ! A Function Expression is created when the execution 
// ! reaches it and is usable only from that moment.
// ! It matters where they are defined!
// ! Useful for conditional declarations, but rather use
// ! an Arrow function for this case


// - Anonymous Function - - - - - - - - - - - - - - - - - 
(function () {
	/** Statements */
})
// You'll often see anonymous functions when a function 
// expects to receive another function as a parameter. 
// In this case the function parameter is often passed 
// as an anonymous function.


// - Arrow Function - - - - - - - - - - - - - - - - - - -
// Single Parameter:
param1 => /** Single Expression */
param1 => {
	/** Statements */
}
// You can omit the brackets and parantheses if you only
// have a single parameter and expression

// Multiple Parameters:
(param1, param2, ...) => /** Single Expression */
(param1, param2, ...) => {
	/** Statements */
}


// --- Example -------------------------------------------
// Usual:
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener('keydown', logKey);

// With anonymous function:
textBox.addEventListener('keydown', function(event) {
	console.log(`You pressed "${event.key}".`);
});

// With arrow function:
textBox.addEventListener('keydown', (event) => {
	console.log(`You pressed "${event.key}".`);
});
