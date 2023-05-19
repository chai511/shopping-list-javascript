var inpt=document.getElementById("input");
var btn=document.getElementById("button");
var ul_tag=document.getElementById("list");

function inputLength(){
	return inpt.value.length
}

function createListElement(){
	var li=document.createElement("li");
	console.log(inpt.value);
	li.appendChild(document.createTextNode(inpt.value))
	ul_tag.appendChild(li);
	input.value = "";
}

function addListAfterKeyPress(event){
	if (inputLength()>0 && event.keyCode === 13){
		createListElement();
	}

}

function addListAfterBtnClick(){
	if (inputLength()>0){
		createListElement();
	}
}


inpt.addEventListener("keypress", addListAfterKeyPress);
btn.addEventListener("click", addListAfterBtnClick);
