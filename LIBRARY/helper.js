/*! helper.js © yamoo9.net, 2017 */

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
/**
 *  querySelectorAll 헬퍼 함수
 *  @param    {String}   selector_str
 *  @return   {Nodelist} 문서 요소노드 집합 반환
 */
function queryAll(selector_str, context) {
  var parent = null;
  if ( context !== undefined ) {
    parent = context;
  } else {
    parent = document;
  }
  return parent.querySelectorAll(selector_str);
}

/**
 *  부모 노드 내부에 마지막 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  parent_node 부모노드
 *  @param    {HTMLElement}  child_node  자식노드
 */
function append(parent_node, child_node) {
  parent_node.appendChild(child_node);
  return parent_node;
  // return child_node;
}
/**
 *  부모 노드 내부에 첫번째 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  parent_node 부모노드
 *  @param    {HTMLElement}  child_node  자식노드
 */
function prepend(parent_node, child_node) {
  var first = parent_node.children[0];
  parent_node.insertBefore(child_node, first);
  return child_node;
}

/**
 *  insertNode를 targetNode 앞에 삽입하는 헬퍼 함수 (형제로서 삽입)
 *  @param    {HTMLElement}  insert_node 삽입 요소 노드
 *  @param    {HTMLElement}  target_node 목표 요소 노드
 *  @return   {HTMLElement}  삽입 요소 노드를 반환
 */
function before(insert_node, target_node) {
  target_node.parentNode.insertBefore(insert_node, target_node);
  return insert_node;
}
/**
 *  insertNode를 targetNode 뒤에 삽입하는 헬퍼 함수 (형제로서 삽입)
 *  @param    {HTMLElement}  target_node 목표 요소 노드
 *  @param    {HTMLElement}  insert_node 삽입 요소 노드
 *  @return   {HTMLElement}  삽입 요소 노드를 반환
 */
function after(target_node, insert_node) {
  var next = target_node.nextElementSibling;
  // 조건 1. target_node 뒤에 형제 노드가 없다면?
  if ( next === null ) {
    append(target_node.parentNode, insert_node);
  }
  // 조건 2. target_node 뒤에 형제 노드가 있다면?
  else {
    before(insert_node, next);
  }
  return insert_node;
}
/**
 *  전달된 요소노드를 부모노드로부터 제거하는 헬퍼 함수
 *  @param    {HTMLElement}  element_node 제거할 요소노드
 *  @return   {HTMLElement}  제거된 요소노드 반환
 */
function remove(element_node) {
  element_node.parentNode.removeChild(element_node);
  return element_node;
}

// 새로운 노드로 이전 노드를 대체하는 핼퍼함수
// function replace(replace_node, replaced_node){
//   // 표준 DOM API 사용
//   replace_node.parentNode.replaceChild(replace_node, replaced_node);
//   return replaced_node;
// }
function replace(replace_node, replaced_node) {
  replaced_node.parentNode.replaceChild(replace_node, replaced_node);
  return replaced_node;
}
// 노드 A와 노드 B의 위치를 교체하는 헬퍼함수
function change(replace_node, replaced_node){
  var target = replace_node.nextElementSibling || replace_node.parentNode;

  if( target != null){
    // before(삽입, 목표)
    before(replaced_node, replace_node);
  }else{
    target = replace_node.parentNode;
    append(target, replaced_node);
  }

}
// 매개변수: 복제할아이템, 복제될부모, 안에까지복제될건지말건지
// 리턴값: 복제값이 필요한 경우 복제될부모지정이 없을시 복제된친구를 리턴
// 아니면 해당 위치에 적용
function clone(will_clone_node, place_clone_node,  ask_all){
  var ansPositionWhere = place_clone_node === null ? '' : place_clone_node;
  var ansCopyAll = ask_all ? true : '';
  var cloneNode = will_clone_node.cloneNode(ansCopyAll);
  if(place_clone_node !== null){
    append(place_clone_node, cloneNode);
    cloneNode = '';
  }
  return cloneNode;
}



// function replace(target_node, insert_node){
//   target_node.parentNode.replaceChild(insert_node, target_node);
//   return target_node;
// }
//
// function createEl(element_node){
//   return document.createElement(element_node);
// }
//
// function createTxt(content_node){
//   return document.createTextNode(content_node);
// }
