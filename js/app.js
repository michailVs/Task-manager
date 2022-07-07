document.querySelector('.input__send').addEventListener('click', () => {
    const title = document.querySelector('.input__task').value
    // this.container.insertAdjacentHTML('beforeend', `
    // <div class="active">
    //     <h2 class="active__title">${title}</h2>
    //     <p class="active__descr">${descr}</p>
    //     <button class="active__completed">Completed</button>
    //     <button class="active__ncomplited">Not completed</button>
    // </div>
    // `)
    if (title.length > 0) {
        const task = document.querySelector('.task__cont').insertAdjacentHTML('beforeend', `
        <div class="active">
            <h2 class="active__title">${title}</h2>
            <label>
                <input type="checkbox" class="active__completed">
                <p class="active__completed-text">Complited</p>
            </label>
        </div>
    `)
    }
    document.querySelector('.active__completed').addEventListener('input', (event) => {
        const checked = event.target
        console.log(checked)
        if (checked.checked) {
            document.querySelector('.active').remove()
        }
    })
})