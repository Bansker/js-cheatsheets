// === JS Cheatsheet: Template =====================================

// --- General Syntax
switch (val) {
    case 1:
        // Do Stuff
        break;

	case 'somestr':
		// Do Stuff
		break;

	case val >= 10:
		// Do Stuff
		break;

	default:
		// Do Default Stuff
}

// --- Syntax If Multiple Cases Match Output
switch (val) {
	case 1:
    case 2:
	case 3:
		// Do Stuff
		break;
	
	case 4:
    case 5:
		// Do Stuff
		break;

	default:
		// Do Default Stuff
}

// --- Example
const expr = 'Papayas';

switch (expr) {
	case 'Oranges':
		console.log('Oranges are $0.59 a pound.');
		break;

	case 'Mangoes':
	case 'Papayas':
		console.log('Mangoes and papayas are $2.79 a pound.');
		// Expected output: "Mangoes and papayas are $2.79 a pound."
		break;

	default:
		console.log(`Sorry, we are out of ${expr}.`);
}
