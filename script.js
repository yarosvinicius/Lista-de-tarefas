const criarTarefa = (evento) =>{
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    const valor = input.value
    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo 
    lista.appendChild(tarefa)
    input.value=""
    tarefa.classList.add('task')
    tarefa.appendChild(botao())
    tarefa.appendChild(botaoDelete())
    tarefa.appendChild(tarefa)
}
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click',(criarTarefa))
let botao =() =>{

    const bontaoConclui = document.createElement('button')
    bontaoConclui.innerHTML = 'concluir'
    bontaoConclui.classList.add('check-button')
    bontaoConclui.addEventListener('click', concluirtarefa)
        
    

    return bontaoConclui
}

const concluirtarefa = (evento) => {
    const bontaoConclui = evento.target
    let tarefaCompleta = bontaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}

let botaoDelete =  () =>{
    const deletebotao = document.createElement('button')
    deletebotao.innerHTML = 'deletar'
    deletebotao.addEventListener('click', deletartarefa)
    return deletebotao
}

const deletartarefa = (evento) =>{
    const deletebotao = evento.target
    const tarefaCompleta = deletebotao.parentElement
    tarefaCompleta.remove()
    return deletebotao
}


