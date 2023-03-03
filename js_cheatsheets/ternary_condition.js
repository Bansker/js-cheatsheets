// === JS Cheatsheet: Ternary Condition =====================

// --- General Syntax
const value = isValue
	? 'True '	// Return this value if isValue equals True
	: 'False';	// Return this value if isValue equals False

// --- Example
function getFee(isMember) {
	return (isMember ? '$2.00' : '$10.00');
}
	
console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"