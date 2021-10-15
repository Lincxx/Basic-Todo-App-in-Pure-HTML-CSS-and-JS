const get = id => document.getElementById(id);

const newText       = get('newText');
const newBtn        = get('newBtn');
const pendingList   = get('pendingList');
const completedList = get('newTcompletedListext');

newBtn.addEventListener('click', () => {
    if (newText.value !== "") {
         const newTodo = document.createElement('li');
         newTodo.innerText = newText.value;
         pendingList.appendChild(newTodo);
         newTodo = ''
    } else {
        alert("Please provide a task to add");
    }
    
});
