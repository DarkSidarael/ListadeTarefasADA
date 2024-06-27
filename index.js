const form = document.querySelector('#tform')
const taskTitleInput = document.querySelector('#tti')
const todoListUl = document.querySelector('#tlista')

let tasks = []

form.addEventListener('submit', (evento)=> {
    evento.preventDefault()

    const taskTitle = taskTitleInput.value 

    if(taskTitle.length < 3) {
        alert('Sua Tarefa precisa ter no minimo 3 caracteres.')
        return
    }

    tasks.push(taskTitle)

    const li = document.createElement('li')
    li.textContent = taskTitle
    todoListUl.appendChild(li)
})