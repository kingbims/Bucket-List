const list = document.querySelector('ul');


//Search filter
const search = document.forms['search'].querySelector('input');

search.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const buckets = list.getElementsByTagName('li');

    Array.from(buckets).forEach((bucket) => {
        const title = bucket.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            bucket.style.display = 'block';
        } else {
            bucket.style.display = 'none';
        }
    })
});


//Delete button
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    };    
});


//Add button
const addForm = document.forms['add-list'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = addForm.querySelector('input[type="text"]').value;
    

    //Create element
    const li = document.createElement('li');
    const listName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    

    //Add content
    listName.textContent = value;
    deleteBtn.textContent = 'delete';

    //Add classes
    listName.classList.add('name');
    deleteBtn.classList.add('delete')


    //Append to document
    li.appendChild(listName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});



//hide bucketlist
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e) => {
    if(hideBox.checked == true){
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
});