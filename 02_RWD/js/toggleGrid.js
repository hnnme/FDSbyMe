(function(global) {
   //var page = document.querySelector('#page');

  var _page = document.createElement('div');
  _page.setAttribute('id', 'toggleGridLayer');
  document.body.appendChild(_page);

  document.onkeydown = function(event) {
    var key = event.keyCode;
    if (key === 71 && event.shiftKey === true) {
      _page.classList.toggle('grid');
    }
  }
})(window);
