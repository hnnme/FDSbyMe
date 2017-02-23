// [ todo list 만들기 ]

// todo list 를 위한 input 요소와 버튼을 묶은 그룹
var inputGroup  = document.querySelector('.input-group');
var inputTodo   = document.querySelector("#input-todo");
var btnInput    = document.querySelector(".input-btn");
// 입력한 todo아이템들이 들어갈 부분 리스트, 아이템, 체크박스
var todolist      = document.querySelector('.todolist');
var todolistItem  = document.querySelector('.todolist_item');

// 체크박스를 위한 변수
var chkbox;

// input에 할일을 입력하고 버튼을 눌렀을때 리스트에 추가
btnInput.onclick = function(){
  var input_todo_value = inputTodo.value;
  // 할일을 입력했는지 검사
  if( input_todo_value === '' ){ throw new Error ('할일을 적어주세요.'); }

  actButton();
  // 리스트를 만들기 위해 li요소, 텍스트노드
  var item = document.createElement('li');
  item.setAttribute('class','hope');
  var txt = document.createTextNode(input_todo_value);
  // 체크박스를 위한 input요소 만들고 속성 설정
  chkbox = document.createElement('input');
  chkbox.setAttribute('type','checkbox');
  chkbox.setAttribute('class','chkbox_item');
  // 만든 요소들 붙이기
  item.appendChild(chkbox);
  item.appendChild(txt);
  todolist.appendChild(item);
  // 리스트아이템이 만들어지면 input요소를 초기화 하고 포커스가게 하기
  inputTodo.value = '';
  inputTodo.focus();
  // 체크박스 클릭시
  chkbox.onclick = function(e){
    console.log('check-target:',e.target);
    //체크박스 상태
    var value = e.target.value;
    console.log('value.length:',value.length);
    var doneItem = document.querySelectorAll('.hope');
    console.log('체크한리스트길이:',doneItem.length);


    goodAnimation();
  };

};


function actButton(){
  // window.setInterval
  console.log('actButton');
}

// 해당 할일의 체크박스에 체크를 하면
function goodAnimation(){
    var success = document.createTextNode('GOOD!');
    var modal = document.createElement('div');
    modal.setAttribute('class','modal-good');
    modal.appendChild(success);

    document.body.appendChild(modal);
}
