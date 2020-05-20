const currentPage = location.pathname
const menuItens = document.querySelectorAll('header .links a')
const recipes = document.querySelectorAll('.recipe')
const recipeWrapers = document.querySelectorAll('.recipe-wraper')

for (let item of menuItens) {
    if (currentPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

for (let recipe of recipes) {
    recipe.addEventListener('click', function () {
        const recipeIndex = recipe.getAttribute('id')
        window.location.href = `/recipes/${recipeIndex}`
    })
}

for (let wraper of recipeWrapers) {
    const hide = wraper.querySelector('.hide')

    hide.addEventListener('click', function () {
        wraper.querySelector('.wraper-content').classList.toggle('hidden')
        if (hide.innerHTML == 'ESCONDER') {
            hide.innerHTML = 'MOSTRAR'
        } else {
            hide.innerHTML = 'ESCONDER'
        }
    })
}