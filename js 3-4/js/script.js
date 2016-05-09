var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

var header = document.createElement('header');
header.classList.add('header');
header.style.textAlign = 'center';
wrapper.appendChild(header);

var h3 = document.createElement('h3');
h3.classList.add('title');
h3.innerHTML = 'Тест по программированию';
h3.style.margin = '0 auto';
header.appendChild(h3);

var content = document.createElement('div');
content.classList.add('content');
content.style.width = '45%';
content.style.margin = '0 auto';
wrapper.appendChild(content);

var ol = document.createElement('ol');
ol.classList.add('questions');
content.appendChild(ol);

createLi('Вопрос №1');
createcheckbox('Вариант ответа №1');
createcheckbox('Вариант ответа №2');
createcheckbox('Вариант ответа №3');

createLi('Вопрос №2');
createcheckbox('Вариант ответа №1');
createcheckbox('Вариант ответа №2');
createcheckbox('Вариант ответа №3');

createLi('Вопрос №3');
createcheckbox('Вариант ответа №1');
createcheckbox('Вариант ответа №2');
createcheckbox('Вариант ответа №3');

function  createLi(text) {
  li = document.createElement('li');
  li.classList.add('list-item');
  li.innerHTML = text;
  ol.appendChild(li);
}

function createcheckbox(text) {
  checkbox = document.createElement('div');
  checkbox.classList.add('checkbox');
  li.appendChild(checkbox);
  label = document.createElement('label');
  label.innerHTML = text;
  checkbox.appendChild(label);
  input = document.createElement('input');
  input.type = 'checkbox';
  input.value = "";
  input.style.marginLeft = '-145px';
  label.appendChild(input);
}
