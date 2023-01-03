// todo app
const tabHeader = document.querySelector('.tab-header');
const tabHeaderElements = document.querySelectorAll('.tab-header > div');
const tabBody = document.querySelector('.tab-body');
const tabBodyData = document.querySelectorAll('.tab-body > div');

const taskForm = document.querySelector('.tasks-form');
const allTasks = document.querySelector('.alltasks');
const removeTask = document.querySelector('.remove-task');

for(let i=0;i<tabHeaderElements.length;i++){
    tabHeaderElements[i].addEventListener('click',() =>{
        tabHeader.querySelector('.active').classList.remove('active');
        tabHeaderElements[i].classList.add('active');
        tabBody.querySelector('.active').classList.remove('active');
        tabBodyData[i].classList.add('active');
    })
}


taskForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const task = taskForm.task.value;
    const newOne = document.createElement('div');
    newOne.setAttribute('class','task-added');
    newOne.innerHTML = `
    <span>${task}</span>
    <span class="remove-task">Done</span>
    `;
    allTasks.appendChild(newOne)
    taskForm.reset();
});

removeTask.addEventListener('click',(e) =>{
    const rmTask = removeTask.parentNode;
    document.querySelector('.alltasks').removeChild(e.target.parentNode)
})



// calculator
var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');

    /*============ For getting the value of btn, Here we use for loop ============*/
    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value += btntext;
        });
    }

    function inverse() {
        screen.value = 1/screen.value;
    }
    function per() {
        screen.value = screen.value/100;
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function neg() {
        screen.value = -(screen.value);
    }

    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function log() {
        screen.value = Math.log(screen.value);
    }

    function pi() {
        screen.value = 3.14159265359;
    }

    function e() {
        screen.value = 2.71828182846;
    }

    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        screen.value = f;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }