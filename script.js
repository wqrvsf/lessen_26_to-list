const input = document.querySelector('#taskInput');
const btn = document.querySelector('#addBtn');
const ul = document.querySelector('#list');

btn.addEventListener('click', function () {
    addTask();
    input.value = '';
});
doneTask();
deleteTask();

function addTask() {
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = input.value;
    ul.append(li);

    const block = document.createElement('div');
    li.append(block);
    block.className = 'item__btns';

    const i = document.createElement('i');
    i.className = 'fa-regular fa-square-check';
    block.append(i);

    const i2 = document.createElement('i');
    i2.className = 'fa-solid fa-trash-can';
    block.append(i2);

    i2.addEventListener('click', function () {
        li.parentNode.removeChild(li);
    });
}

function doneTask() {
    ul.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('fa-square-check')) {
            target.closest('li').classList.toggle('done');
            console.log(target.closest('li'));
            localStorage.setItem('htmlLS', ul.innerHTML);
        }
    })
}


function deleteTask() {
    ul.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('fa-trash-can')) {
            target.closest('li').remove();
        }

    })
}









































