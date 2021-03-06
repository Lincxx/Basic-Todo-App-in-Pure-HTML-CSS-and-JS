const get = id => document.getElementById(id);

const newText       = get('newText');
const newBtn        = get('newBtn');
const pendingList   = get('pendingList');
const completedList = get('completedList');

newBtn.addEventListener('click', () => {
    if (newText.value !== "") {
         const newTodo = document.createElement('li');
         newTodo.innerText = newText.value;
         pendingList.appendChild(newTodo);
         newTodo.value = ''
    } else {
        alert("Please provide a task to add");
    }
});


newText.addEventListener("keyup", event => {
    if (event.key.toLowerCase() === 'enter'){
        newBtn.click();
    }
});

const move = (element, destination) => {
    if (element.localName === 'li') {
        destination.appendChild(element);
    }  
};

pendingList.addEventListener('click', event => {
   move(event.target, completedList) 
})

completedList.addEventListener('click', event => {
    move(event.target, pendingList) 
 })