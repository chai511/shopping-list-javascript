var inpt=document.getElementById("input");
var btn=document.getElementById("button");
var ul_tag=document.getElementById("list");
var li_tags=ul_tag.querySelectorAll("li");

function inputLength(){
	return inpt.value.length
}

function createListElement(){
	var li=document.createElement("li");
	console.log(inpt.value);
	li.appendChild(document.createTextNode(inpt.value))
	ul_tag.appendChild(li);
    li.addEventListener('dblclick',strikeThrough);
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

function strikeThrough(event){
	li_tags_list=ul_tag.querySelectorAll('li');
	console.log(li_tags_list);
	for (i=0;i<li_tags_list.length;i++){
		console.log('I am here')
		console.log(event.target.innerText,li_tags_list[i].innerText)
		if (li_tags_list[i].innerText == event.target.innerText)
		{
			li_tags_list[i].innerHTML=li_tags_list[i].innerText.strike();
			console.log('I am done')
			break;
		}
	}
}


inpt.addEventListener("keypress", addListAfterKeyPress);
btn.addEventListener("click", addListAfterBtnClick);
for (li_tag of li_tags){
	li_tag.addEventListener('dblclick',strikeThrough);
}
