// .append-btn, .prep

var append_btn, prepend_btn, after_btn, replace_btn;
append_btn  = query('.append-btn');
prepend_btn = query('.prepend-btn');
after_btn   = query('.after-btn');
replace_btn  = query('.replace-btn');


var txt_group, replace_list;
txt_group     = query('.txt-group');
replace_list  = query('.replace-list');


//replace_list.children
var choose_target = null;

var cnt = 0;
// active 클래스로 만들기
var chkList =function(){
  choose_target = this;
  var className = cnt%2 ? 'second' : 'active';
  cnt = cnt%2 ? 0 : cnt;
  console.log('className:',className);
  this.setAttribute('class', className);
  replace_list.children[2].onclick = null;
  cnt++;
};
replace_list.children[0].onclick = chkList;

for(var i=0; i<replace_list.children.length; i++){
  replace_list.children[i].onclick = chkList;
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

replace_btn.onclick = function(){
  var changeItem = queryAll('.active', replace_list)[0];
  var removeItem = queryAll('.second', replace_list)[0];

  var changeItem_preSibling = changeItem.previousElementSibling;
  if(changeItem_preSibling === null){
    changeItem_preSibling = changeItem.nextElementSibling;
    if(changeItem_preSibling === removeItem){
      changeItem_preSibling = removeItem.nextElementSibling;
    }
  }
  var target = replace(removeItem, changeItem);
  append(changeItem_preSibling,target);
  // before(target,)

};
