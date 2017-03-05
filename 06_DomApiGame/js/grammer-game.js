

  var append_btn, prepend_btn,   after_btn, before_btn,
      txt_group,  question_list, btn_group,
      choose_target, cnt,
      ul, li, question_array, txt, keyword, random,
      h1_el, h1_contents;

  // 버튼
  btn_group     = document.getElementsByTagName('button');
  append_btn    = query('.append-btn');
  prepend_btn   = query('.prepend-btn');
  after_btn     = query('.after-btn');
  before_btn    = query('.before-btn');

  // 그룹, 리스트
  txt_group     = query('.txt-group');

  choose_target = null;
  cnt           = 0;

  // active 클래스로 만들기
  var chkList =function(e){
    choose_target = this;
    this.setAttribute('class', cnt%2 ? 'second' : 'active');

    if( cnt%2 ){
      cnt = 0;
      switchPosition();
    } else {
      cnt += 1;
    }
  };

  // 랜덤으로 문제만들기
  function makeQuiz(){
    random  = Math.floor((Math.random() * 4) + 1);
    random  = random == 4 ? 0 : random;
    keyword = Object.keys(question)[random];

    question_array = question[keyword].split('|');

    ul = document.createElement('ul');
    ul.setAttribute('class', 'question-list');
    ul.setAttribute('role', 'tab-list');

    for(; question_array.length > 0;){
      random = Math.floor((Math.random() * ((question_array.length-1)+1)));
      li  = document.createElement('li');
      li.setAttribute('role', 'tab');
      txt = question_array.splice(random-1, 1)[0];
      txt = document.createTextNode(txt);
      li.append(txt);
      ul.appendChild(li);
    }
    txt_group.appendChild(ul);
  }
  makeQuiz();
  question_list = document.getElementsByTagName('ul').item(0);

  // 리스트의 모든 li요소에 클릭이벤트
  if(question_list){
    for(var i =0; i<question_list.children.length; i++){
      question_list.children[i].onclick = chkList;
    }
    for(var j=btn_group.length; j>0; j--){
      btn_group[j-1].onclick = checkAnswer;
    }
  }

// h1요소 디자인을 위한 마크업변화
h1_el = document.body.getElementsByTagName('h1').item(0);
h1_contents = h1_el.innerText.split(" ");
h1_el.innerHTML = "<span>"+
                    h1_contents[0]+
                  "</span>"+
                  "<span>"+
                    h1_contents[1]+
                  "</span>"+
                  "<span>"+
                    h1_contents[2]+
                  "</span>";
