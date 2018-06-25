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
  if(focus) {
    var closest_txt = txt.previousElementSibling;
    if(!closest_txt && txt.nextElementSibling && txt.nextElementSibling.className == 'txt') closest_txt = txt.nextElementSibling;
    if(!closest_txt) {
      var previous_row = txt.closest('.row').previousElementSibling;
      var next_row = txt.closest('.row').nextElementSibling;
      if(previous_row) closest_txt = previous_row.querySelector('.txt:last-of-type')
      else closest_txt = next_row.querySelector('.txt:first-of-type');
    }
    closest_txt.getElementsByTagName('textarea')[0].focus();
  }

  var its_row = txt.closest('.row');
  txt.remove();
  if(its_row.querySelectorAll('.txt').length == 0) its_row.remove();
}

function appendTxtAfter(here) {
  var this_txt = here.closest('.txt');
  new_txt = newTxt();
  new_txt.appendAfter(this_txt);
  var new_id = new_txt.id;
  return new_txt;
}

function appendTxtBefore(here) {
  var this_txt = here.closest('.txt');
  new_txt = newTxt();
  new_txt.appendBefore(this_txt); // TODO: refactor with appendTxtAfter :/
  var new_id = new_txt.id;
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
    else {
      switch (e.keyCode) {
        case 27: // ESC-left
          console.log('ctrl esc');
          removeTxt(this_txt, true);
          break;
        case 37: // arrow-left
          console.log('ctrl left');
          break;
        case 38: // arrow-up
          console.log('ctrl up');
          break;
        case 39: // arrow-right
          console.log('ctrl right');
          break;
        case 40: // arrow-down
          console.log('ctrl down');
          break;
        default:
      }
    }
  }
}

function changeColor(hue) {
  var this_txt = document.activeElement.closest('.txt');
  this_txt.style.background = 'radial-gradient(circle at 30% 20%, hsl(' + hue + ', 85%, 90%), hsl(' + hue + ', 85%, 50%))';
}

function createColorButton(hue){
  var colors = document.getElementsByClassName('colors')[0];
  var btn = document.createElement('button');

  btn.style.background = 'hsl(' + hue + ', 100%, 50%)';
  btn.setAttribute('onClick', 'changeColor(' + hue + ')');
  colors.appendChild(btn);
}
