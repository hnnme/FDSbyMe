var inputGroup =document.querySelector('.input-group');
var inputTodo = document.querySelector("#input-todo");
var btnInput = document.querySelector(".input-btn");

var todolist = document.querySelector('.todolist');
var todolistItem = document.querySelector('.todolist_item');

var checkbox = document.querySelector('.chkbox_item');

var chkbox;
// input에 값을 담고 버튼을 누르면 리스트에 추가
btnInput.onclick = function(){
  actButton();
  var item = document.createElement('li');
  var txt = document.createTextNode(inputTodo.value);
  chkbox = document.createElement('input');
  chkbox.setAttribute('type','checkbox');
  chkbox.setAttribute('class','chkbox_item');

  item.appendChild(chkbox);
  item.appendChild(txt);
  todolist.appendChild(item);

  inputTodo.value = '';
  inputTodo.focus();

  chkbox.onclick = function(e){
    var value = e.target.value;

    activeCheckbox(value);
  };

};

function actButton(){
  // window.setInterval
  console.log('do');
}


function activeCheckbox(value){
    var success = document.createTextNode('GOOD!');
    var modal = document.createElement('div');
    modal.setAttribute('class','modal_good');
    modal.appendChild(success);
    modal.style.cssText = "transform: scale(2,2); font-size:100px";
    document.body.appendChild(modal);


}
