// .appendBefore(element) Prototype
Element.prototype.appendBefore = function (element) {
  element.parentNode.insertBefore(this, element);
},false;

// .appendAfter(element) Prototype
Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
},false;

function newTxt() {
  var a_txt = document.getElementsByClassName('txt')[0];
  var new_txt = a_txt.cloneNode(true);
  var new_id = 'txt_' + Date.now();
  new_txt.id = new_id;
  new_txt.getElementsByTagName('input')[0].value = '';
  new_txt.getElementsByTagName('textarea')[0].value = '';
  new_txt.style.background = 'background: radial-gradient(circle at 30% 20%, hsl(0, 0%, 100%), hsl(0, 0%, 80%));';

  return new_txt;
}

function appendTxtToRow() {
  var row = document.getElementsByClassName('row')[0];
  var new_txt = newTxt();

  row.appendChild(new_txt);

  var txt_area = new_txt.getElementsByTagName('textarea')[0]
  txt_area.focus();

  return new_txt;
}

function changeColor(hue) {
  var this_panel = document.activeElement.closest('.panel').getElementsByTagName('header')[0];
  this_panel.style.background = 'hsl(' + hue + ', 50%, 50%)';
}

function createColorButton(hue) {
  var colors = document.getElementsByClassName('colors')[0];
  var btn = document.createElement('button');

  btn.style.background = 'hsl(' + hue + ', 100%, 50%)';
  btn.setAttribute('onClick', 'changeColor(' + hue + ')');
  colors.appendChild(btn);
}

// https://www.w3schools.com/html/html5_draganddrop.asp

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.closest('.txt').id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var this_txt = document.getElementById(data);
  if(ev.target.className == 'dropzone after') {
    this_txt.appendAfter(ev.target.parentElement);
  }
  else {
    this_txt.appendBefore(ev.target.parentElement);
  }
}

function changeFontSize(select){
  var this_panel = select.closest('.panel');
  var textarea = this_panel.getElementsByTagName('textarea')[0];
  textarea.style.fontSize = select.value + '%';
}

function minimizeTxt(txt) {
  document.getElementById('minimized').appendChild(txt);
  txt.getElementsByClassName('title')[0].disabled = true;
}

function restoreTxt(txt) {
  document.getElementsByClassName('row')[0].appendChild(txt);
  txt.getElementsByClassName('title')[0].disabled = false;
}
