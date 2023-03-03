// === JS Cheatsheet: Callback Functions ===========================

// --- General Syntax

// --- Example 
// - Function as Declaration - - - - - - - - - - - - - - - - - - - - 
function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}
  
  function showOk() {
	alert( "You agreed." );
}
  
  function showCancel() {
	alert( "You canceled the execution." );
}
  
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


// - Function as Expression (Better) - - - - - - - - - - - - - - - - 
function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

ask(
	"Do you agree?",
	function() { alert("You agreed."); },
	function() { alert("You canceled the execution."); }
);