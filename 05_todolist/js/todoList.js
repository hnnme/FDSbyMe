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

chkbox.onclick = function(){
  console.log('click');
  activeCheckbox();
};
// 해보고 싶었던것:
// 할일을 적고 버튼을 누르면 버튼의 애니메이션이 생기고
// 다시 원래대로 가는것
function actButton(){
  // window.setInterval
  console.log('do');
}

// 할일을 하고 체크를 하면
function activeCheckbox(){
    var success = document.createTextNode('GOOD!');
    var modal = document.createElement('div');
    modal.setAttribute('class','modal_good');
    modal.appendChild(success);
  
    document.body.appendChild(modal);
}
