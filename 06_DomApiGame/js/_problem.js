var question = {
  "append"  : "target|.insertAdjacentElement|('beforeend'|,el);",
  "prepend" : "target|.insertAdjacentElement|('afterbegin'|,el);",
  "before"  : "target|.insertAdjacentElement|('beforebegin'|,el);",
  "after"   : "target|.insertAdjacentElement|('afterend'|,el);"
};
var game_answer = {
  "append"  : "target.insertAdjacentElement('beforeend',el);",
  "prepend" : "target.insertAdjacentElement('afterbegin',el);",
  "before"  : "target.insertAdjacentElement('beforebegin',el);",
  "after"   : "target.insertAdjacentElement('afterend',el);"
};


/**
 * 문제의 답을 주는 함수
 * @param  {String} function_name - 함수 이름
 * @return {String}               - 답을 문자열로 반환
 */
function answerGame(function_name){

  var answer = "";
  switch (function_name) {
    case 'append':
      answer = game_answer.append;
      break;
    case 'prepend':
      answer = game_answer.prepend;
      break;
    case 'after':
      answer = game_answer.after;
      break;
    case 'before':
      answer = game_answer.before;
      break;
    default:
      answer = "?";
        // throw new Error("첫번째 인자값으로 함수명을 주셔야 합니다.");
  }
  return answer;
}

/**
 * 유저가 선택한 답을 체크하는 함수
 * @return {[type]} [description]
 */
function checkAnswer(e){
  var answer, btn_name, alert_txt;
  answer   = "";
  btn_name = e.path[0].getAttribute('class').split('-')[0];

  for(var i=0; i< question_list.children.length; i+=1){
    answer += question_list.children[i].innerText;
  }
  if( answerGame(btn_name) === answer ){
    alert_txt = 'Good Job!';
    //랜덤으로 다시 문제내기
    makeQuiz();
  } else {
    alert_txt = 'Try again!';
  }
  alertAnimation(alert_txt);
}
// 위치바꾸기
function switchPosition(){
  var changeItem, removeItem;
  changeItem = query('.active');
  removeItem = query('.second');

  // 위치 바꾸기
  changeItem.insertAdjacentElement('afterend', removeItem);
  // 클래스속성을 없애서 배경색 없애기
  removeClass(changeItem);
  removeClass(removeItem);
}
// 클래스 제거하기
function removeClass(el_node){
  if( el_node.nodeType !== 1 ){ throw new Error("첫번째 인자는 요소노드여야 합니다."); }
  el_node.removeAttribute('class');
}

 /**
  * 해당 할일의 체크박스에 체크를 하면 나오는 애니메이션
  * @return {[type]} [description]
  */
 function alertAnimation(txt){
     var success, modal;
     success = document.createTextNode(txt);
     modal = document.createElement('div');
     modal.setAttribute('class','modal-good');
     modal.appendChild(success);
     document.body.appendChild(modal);
 }

 /**
  *  querySelector 헬퍼 함수
  *  @param    {String}      selector_str
  *  @return   {HTMLElement} 문서 요소노드 반환
  */
 function query(selector_str, context) {
   var parent = null;
   if ( context !== undefined ) {
     parent = context;
   } else {
     parent = document;
   }
   return parent.querySelector(selector_str);
 }
