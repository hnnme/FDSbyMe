// 고려해야 할점
// 1) 만약에 2개이상의 선택을 했을시
// 문제점
// 1) 처음 선택시 안된다 ㅠ

var append_btn, prepend_btn, after_btn, replace_btn,
    txt_group,  replace_list;

// 버튼
append_btn    = query('.append-btn');
prepend_btn   = query('.prepend-btn');
after_btn     = query('.after-btn');
replace_btn   = query('.replace-btn');

// 그룹, 리스트
txt_group     = query('.txt-group');
replace_list  = query('.replace-list');


var choose_target = null;
var cnt = 0;

// active 클래스로 만들기
var chkList =function(e){
  choose_target = this;
  this.setAttribute('class', cnt%2 ? 'second' : 'active');
  cnt = cnt%2 ? 0 : cnt+1 ;
  replace_list.children.onclick = null;
};


// 리스트의 모든 li요소에 클릭이벤트 만들기
for(var i=0; i<replace_list.children.length; i++){
  replace_list.children[i].onclick = chkList;
}
/**
 * 유저가 선택한 답을 체크하는 함수
 */
function checkAnswer(){
  var answer = "";
  for(var i=0; i<replace_list.children.length; i+=1){
    answer += replace_list.children[i].innerText;
  }
  if( answerGame("replace") === answer ){
    goodAnimation();
  }
}

/**
 * 문제의 답을 주는 함수
 * @param  {String} function_name - 함수 이름
 * @return {String}               - 답을 문자열로 반환
 */
function answerGame(function_name){
  var answer = "";
  switch (function_name) {
    case replace:
      answer = "parentNode.replaceChild(newChild,oldChild);";
      break;

    case append:
      answer = "";
      break;

    case prepend:
      answer = "";
      break;

    case after:
      answer = "";
      break;

    case replace:
      answer = "";
      break;

    default: throw new Error("첫번째 인자값으로 함수명을 주셔야 합니다.");
  }
  return answer;
}

function removeClass(el_node){
  if( el_node.nodeType !== 1 ){ throw new Error("첫번째 인자는 요소노드여야 합니다."); }
  el_node.removeAttribute('class');
}

replace_btn.onclick = function(){
  var changeItem = queryAll('.active', replace_list)[0];
  var removeItem = queryAll('.second', replace_list)[0];
  // 위치 바꾸기
  change(changeItem, removeItem);
  // 클래스속성을 없애서 배경색 없애기
  removeClass(changeItem);
  removeClass(removeItem);
  checkAnswer();
};





append_btn.onclick = function(){
  // 교체할 아이와
  // 교체될 아이 찾기
  // 클릭하면 교체될 아이 뒤에 교체할 아이가 들어감

};

prepend_btn.onclick = function(){

};

after_btn.onclick = function(){

};

// 해당 할일의 체크박스에 체크를 하면
function goodAnimation(){
    var success, modal, txt;
    txt = "Good Job!";
    success = document.createTextNode(txt);
    modal = document.createElement('div');
    modal.setAttribute('class','modal-good');
    modal.appendChild(success);
    document.body.appendChild(modal);
}

var h1_el, h1_contents;
h1_el = document.body.getElementsByTagName('h1').item(0);
h1_contents = h1_el.innerText.split(" ");
// [ heading 데코용 ]
// h1_el.innerHTML = "<span>"+
//                     h1_contents[0]+
//                   "</span>"+
//                   "<span>"+
//                     h1_contents[1]+
//                   "</span>"+
//                   "<span>"+
//                     h1_contents[2]+
//                   "</span>";

// 랜덤으로 문제 내기
// 동적으로 리스트에 문제 넣기
// 1) 랜덤함수를 이용해서 배열에서 문제들을 갖고 와서 li요소에 랜덤으로 뿌려주고
// 동적으로 넣기
// 문제를 갖고 있는 배열 만들기
// 배열아이템을 분할하기
var question ={
  "append"  : "element.appendChild(aChild);",
  "prepend" : "parentNode.insertBefore(newNode, referenceNode);",
  "after"   : "",
  "replace" : "parentNode.replaceChild(newChild,oldChild);",
};
