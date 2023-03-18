const elem = document.createElement('li');
const addBlock = document.querySelector('.add-block');
const elem2 = document.createElement('li');
const btn = document.querySelector('#addBtn');
const blockBtn = document.createElement('div');

btn.addEventListener('click', function(){
    elem.classList.add('fa-elem');
    elem.textContent = input.value;
    addBlock.append(elem2);
});

addBlock.append(blockBtn);
blockBtn.classList.add('item__btns');






