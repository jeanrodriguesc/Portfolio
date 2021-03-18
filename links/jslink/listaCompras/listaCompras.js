//seletores

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions

//          Função de adicionar valores a lista
function addTodo(event){
    //parando o evento para rodar o meu evento

    event.preventDefault();

    //criar uma DIV

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //criando um LI
    
    
    const newTodo = document.createElement("li");

    
    newTodo.innerText = aspas();
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);


    // Fazer com que ele nao envie se o input estiver em branco  
    // Valor do input  = todoInput.value
    
    function aspas(){
        resu = todoInput.value
        if (resu.length > 0){
           return `❝${resu}❞`
         } else{ 
            return remove()
           
         }
    }
   
    //verificar o botao da marca

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //verificar o botao do lixo

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //acrescentando na lista

    todoList.appendChild(todoDiv);

    //limpar o input depois de adicionar

    todoInput.value = "";
}

//          Função de deletar ums lista especifica

function deleteCheck(e) {
    const item = e.target;

    //deletar
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove()
    }

    //check

    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}