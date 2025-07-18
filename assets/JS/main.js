const inputTarefa = document.querySelector ('.input-tarefa')
const btnTarefa = document.querySelector ('.btn-tarefa')
const tarefas = document.querySelector ('.tarefas')

function criaLi() {
    const li = document.createElement ('li')
    return li
}

inputTarefa.addEventListener ('keypress',function (e) {
    if (e.keyCode === 13) {
        console.log ('ENTER PRESSIONADO')
        if (!inputTarefa.value) return ;
        criaTarefa (inputTarefa.value)  
    }
})

function limpaImput () {
    inputTarefa.value = ''
    inputTarefa.focus
}

function criaBotaoApagar (li) {
    li.innerText += ' '
    const botaoApagar = document.createElement ('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute ('class', 'apagar')
    botaoApagar.setAttribute ('title','Apagar essa tarefa')
    li.appendChild (botaoApagar)
}
function criaTarefa (textoInput) {
    const li = criaLi ()
    li.innerText = textoInput
    tarefas.appendChild (li)
    limpaImput ()
    criaBotaoApagar (li)
    salvarTarefas ()
}

btnTarefa.addEventListener ('click',function () {
    if (!inputTarefa.value) return ;
    criaTarefa (inputTarefa.value)
})


document.addEventListener ('click',function (e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
        el.parentElement.remove ()
    }
})

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll ('li')
}