document.querySelector('.input__send').addEventListener('click', () => {
    const title = document.querySelector('.input__task').value
    if (title.length > 0) {
        out()
        let tit = []
        tit.push(title)
        console.log(tit)
        localStorage.setItem('todo', JSON.stringify(tit))
    }
    function out() {
        const task = document.querySelector('.task__cont').insertAdjacentHTML('beforeend', `
            <div class="active">
                <h2 class="active__title">${title}</h2>
                <input type="checkbox" class="active__completed">
                <p class="active__completed-text">Complited</p>
            </div>
        `)
    }
    removeTodo()
})
if (localStorage.getItem('todo') != undefined) {
    title = JSON.parse(localStorage.getItem('todo'))
    const task = document.querySelector('.task__cont').insertAdjacentHTML('beforeend', `
            <div class="active">
                <h2 class="active__title">${title}</h2>
                <input type="checkbox" class="active__completed">
                <p class="active__completed-text">Complited</p>
            </div>
        `)
    removeTodo()
}
function removeTodo() {
    const checke = document.querySelector('.active')
    checke.addEventListener('click', (e) => {
        const chec = e.target
        if (chec.checked) {
            chec.parentElement.remove()
            localStorage.removeItem('todo')
        }
    })
}