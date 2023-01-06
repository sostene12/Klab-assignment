const taskForm = document.querySelector('.tasks-form');
const allTasks = document.querySelector('.alltasks');
const removeTask = document.querySelector('.remove-task');

taskForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const task = taskForm.task.value;
    const newOne = document.createElement('div');
    newOne.setAttribute('class','task-added');
    newOne.innerHTML = `
    <span>${task}</span>
    <span class="remove-task">delete</span>
    `;
    allTasks.appendChild(newOne)
    taskForm.reset();
});

allTasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('remove-task')){
        e.target.parentElement.remove()

    }
})