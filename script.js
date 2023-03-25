const input = document.querySelector('#taskInput');
const btn = document.querySelector('#addBtn');
const ul = document.querySelector('#list');

btn.addEventListener('click', function(){
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = input.value;
    li.append(ul);

    const block = document.createElement('div');
    block.append(li);
    block.className = 'item__btns';

    const i = document.createElement('i');
    i.className = 'fa-regular fa-square-check';
    i.append(block);

    i.addEventListener('click', function(){
        this.classList.toggle('done');
    });

    const i2 = document.createElement('i');
    i2.className = 'fa-solid fa-trash-can';
    i2.append(block);


});












