const input = document.querySelector('#taskInput');
const btn = document.querySelector('#addBtn');
const ul = document.querySelector('#list');

let tasks = [];

if (localStorage.getItem('tasksLS')) {
    tasks = JSON.parse(localStorage.getItem('tasksLS'));
};

tasks.forEach(task => {
    const cssClass = task.complete ? "item done" : "item";
    ul.insertAdjacentHTML("beforeend",
        `<li class = "${cssClass}" id = "${task.id}">${task.text}
            <div class = "btns">
                <i class = "fa-regular fa-square-check" data-action = "complete"></i>
                <i class = "fa-solid fa-trash-can" data-action = "delete"></i>
            </div>
        </li>`
    )
});

ul.addEventListener('click', function(event){
     let target = event.target;
    if (target.dataset.action == 'complete') {
        completeBtn(target);
    }
    
    if (target.dataset.action == 'delete') {
        removeTask(target);
    }

    WriteLS();
});

btn.addEventListener('click', function(){
    const li = document.createElement('li');
    addTask(li);
    ul.append(li);
    input.value = '';
    writeLS();
});



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
    i.setAttribute('data-action', 'complete');

    const i2 = document.createElement('i');
    i2.className = 'fa-solid fa-trash-can';
    block.append(i2);
    i2.setAttribute('data-action', 'delete');

    i2.addEventListener('click', function () {
        li.parentNode.removeChild(li);
    });

    let newTask = {
        id: Date.now(),
        text: input.value,
        complete: false
    }

    tasks.push(newTask);
    newTask.setAttribute('id', newTask.id);
}

function completeBtn(target) {
    target.closest('li').classList.toggle('done');
    let currentId = target.closest('li').id;
    const index = tasks.findIndex((task) => {
        return task.id == currentId;
    });

    if (tasks[index].complete == false) {
        tasks[index].complete = true;
    } else {
        tasks[index].complete = false;
    }
}

function removeTask (target) {
    target.closest('li').remove();
    input.value = '';
    const index = tasks.findIndex((task) => {
        return task.id == target.closest('li').id;
    });

    tasks.splice(index, 1);
}

function writeLS() {
    localStorage.setItem('tasksLS', JSON.stringify(tasks));
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










































