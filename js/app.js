const taskInput = document.querySelector('.input__task')
const taskBtn = document.querySelector('.input__send')
const todosWrapper = document.querySelector('.task__cont')

let tasks = []
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))

let todoArray = []

function Task(description) {
    this.description = description
    this.completed = false
}

const createTask = (task, index) => {
    return `
        <div class="active ${task.completed ? 'checked' : ''}">
            <h2 class="active__title">${task.description}</h2>
            <div class="active-btn">
                <input onclick="completeTask(${index})" type="checkbox" class="active__complete" ${task.completed ? 'checked' : ''}>
                <button onclick="removeTask(${index})"  class="active__remove">Remove</button>
            </div>
        </div>
    `
}

const fillHtmlList = () => {
    todosWrapper.innerHTML = ""
    if (tasks.length > 0) {
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTask(item, index)
        })
        todoArray = document.querySelectorAll('.active')
    }
}
fillHtmlList()

const updateLs = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const completeTask = index => {
    tasks[index].completed = !tasks[index].completed
    if (tasks[index].completed) {
        todoArray[index].classList.add('checked')
    } else {
        todoArray[index].classList.remove('checked')
    }
    updateLs()
    fillHtmlList()
}


taskBtn.addEventListener('click', () => {
    tasks.push(new Task(taskInput.value))
    updateLs()
    fillHtmlList()
    taskInput.value = ''
})

const removeTask = index => {
    tasks.splice(index, 1)
    updateLs()
    fillHtmlList()
}