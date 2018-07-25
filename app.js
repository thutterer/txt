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

function removeTxt(txt, focus) {
  // if(focus) {
  //   var closest_txt = txt.previousElementSibling;
  //   if(!closest_txt && txt.nextElementSibling && txt.nextElementSibling.className == 'txt') closest_txt = txt.nextElementSibling;
  //   if(!closest_txt) {
  //     var previous_row = txt.closest('.row').previousElementSibling;
  //     var next_row = txt.closest('.row').nextElementSibling;
  //     if(previous_row) closest_txt = previous_row.querySelector('.txt:last-of-type')
  //     else closest_txt = next_row.querySelector('.txt:first-of-type');
  //   }
  //   closest_txt.getElementsByTagName('textarea')[0].focus();
  // }

  // if(confirm("Changes won't be saved.")) txt.remove();
  txt.remove();
}

function appendTxtAfter(here) {
  var this_txt = here.closest('.txt');
  var new_txt = newTxt();

  new_txt.appendAfter(this_txt);

  var txt_area = new_txt.getElementsByTagName('textarea')[0]
  txt_area.focus();  // TODO: DRY!

  return new_txt;
}

function appendTxtBefore(here) {
  var this_txt = here.closest('.txt');
  var new_txt = newTxt();

  new_txt.appendBefore(this_txt);

  var txt_area = new_txt.getElementsByTagName('textarea')[0]
  txt_area.focus();  // TODO: DRY!

  return new_txt;
}

function appendTxtToRow() {
  var row = document.getElementsByClassName('row')[0];
  var new_txt = newTxt();

  row.appendChild(new_txt);
  // new_txt.scrollIntoView({behavior: 'smooth'});

  var txt_area = new_txt.getElementsByTagName('textarea')[0]
  txt_area.focus();  // TODO: DRY!

  return new_txt;
}

function keyEvents(e) {
  if(e.ctrlKey) {
    var this_txt = document.activeElement.closest('.txt');
    var this_row = document.activeElement.closest('.row');

    if(e.shiftKey) {
      switch (e.keyCode) {
        case 37: // arrow-left
          var new_txt = appendTxtBefore(this_txt);
          break;
        case 38: // arrow-up
          break;
        case 39: // arrow-right
          var new_txt = appendTxtAfter(this_txt);
          break;
        case 40: // arrow-down
          break;
        default:
      }
      document.getElementById(new_txt.id).getElementsByTagName('textarea')[0].focus();
    }
  }
}

function changeColor(color) {
  var this_panel = document.activeElement.closest('.panel').getElementsByTagName('header')[0];
  this_panel.style.background = color;
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

function changeTxtWidth(select){
  var txt_area = select.closest('.panel').getElementsByTagName('textarea')[0];
  txt_area.style.width = (select.value * 250 + 400) + 'px';
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

function showFab(condition) {
  var fab = document.getElementById('fab');
  if(condition) fab.classList.remove('hidden');
  else fab.classList.add('hidden');
}
