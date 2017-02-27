// 고려해야 할점
// 1) 만약에 2개이상의 선택을 했을시
// 문제점
// 1) 처음 선택시 안된다 ㅠ

// 버튼
var append_btn, prepend_btn, after_btn, replace_btn;
append_btn    = query('.append-btn');
prepend_btn   = query('.prepend-btn');
after_btn     = query('.after-btn');
replace_btn   = query('.replace-btn');

// 그룹, 리스트
var txt_group, replace_list;
txt_group     = query('.txt-group');
replace_list  = query('.replace-list');


//replace_list.children
var choose_target = null;
var cnt = 0;

// active 클래스로 만들기
var chkList =function(e){
  choose_target = this;
  this.setAttribute('class', cnt%2 ? 'second' : 'active');
  cnt = cnt%2 ? 0 : cnt+1 ;
  replace_list.children.onclick = null;
};

// replace_list.children[0].onclick = chkList;

// 리스트의 모든 li요소에 클릭이벤트 만들기
for(var i=0; i<replace_list.children.length; i++){
  replace_list.children[i].onclick = chkList;
}

function checkAnswer(){
  console.log("checkAnswer:",replace_list);
  var answer = "";
  for(var i=0; i<replace_list.children.length; i+=1){
    console.log(replace_list.children[i]);
    answer += replace_list.children[i].innerText;
  }
  var replace_grammer = "parentNode.replaceChild(newChild,oldChild);";
  if( replace_grammer === answer ){
    console.log("good");
    goodAnimation();

  }
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



function removeClass(el_node){
  if( el_node.nodeType !== 1 ){ throw new Error("첫번째 인자는 요소노드여야 합니다."); }
  el_node.removeAttribute('class');
}


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
    var success = document.createTextNode('GOOD!');
    var modal = document.createElement('div');
    modal.setAttribute('class','modal-good');
    modal.appendChild(success);

    document.body.appendChild(modal);
}
