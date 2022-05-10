
//Store Variable
var filled = false;
var button = document.getElementById("donateButton");
var input = document.getElementById("donateInput");
var mask = document.getElementById("buttonMask");

//Start
setInterval(UpdateCheck,100);

button.onmouseover = function(event){
	if(filled) {
		mask.classList.remove("maskDisabled");
		mask.classList.add("maskEnabled");}
}

button.onmouseout = function(event){
	if(filled) {
		mask.classList.remove("maskEnabled");
		mask.classList.add("maskDisabled");}
}

//Function
function UpdateCheck() // #donateInput
{
	CheckFilled();
	CheckInputField();
}

function CheckFilled() // #donateInput
{
	if(filled)
	{
		button.classList.remove("btnDisabled");
		button.classList.add("btnEnabled");
	}
	else if(!filled)
	{
		button.classList.remove("btnEnabled");
		button.classList.add("btnDisabled");
	}
}

function valueVerified() // #donateInput
{
	val = Math.round(input.value);
	input.value = val;
}

function CheckInputField() // #donateInput
{
	if(input.value != null && input.value != 0)
	{
		filled = true;
	}
	else {filled = false;}
}

function CharManagement(evt) // #donateInput
{
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
	return false;
	return true;
}

function DonateButtonClicked() // #donateButton
{
	if(filled)
	{
		alert("You has been donated $" + input.value );
		alert("Thanks for your donation");
	}
}