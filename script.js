 

'use strict'
//2.
//todolist
let inputTodo = document.getElementById("todo");//gettin varaibles by id's
let formsubmit = document.getElementById("forminp");
let result = document.getElementById("result");
let btnclear = document.getElementById("clear-all");
//input style 

inputTodo.addEventListener('keydown', (event) => {
    inputTodo.style.boxShadow = '0px 0px 10px rgb(0, 183, 255) '
    inputTodo.style.transition = '0.3s'
    console.log(event)
})
inputTodo.addEventListener('keyup', () => {
    inputTodo.style.boxShadow = '0px 0px 10px rgb(0, 0, 0) '
})

forminp.addEventListener("submit", (event2) => { //form submit   
    event2.preventDefault()//it will not refresh 

    let value = inputTodo.value;//get input value and puttin in this variable

    if (inputTodo.value === "") { //if input value === nothing
        return; //just return nothing, it will stop working
    }

    //removebtn
    let btnremove = document.createElement("button");
    btnremove.textContent = 'X'

    btnremove.addEventListener("click", () => { result.removeChild(li) })//on click results child (li) will remove with removechild function
    let li = document.createElement("li"); //create li element
    li.textContent = value; //then li's textcontent is value of input

    result.appendChild(li) //and that li is in result(ul element)
    li.appendChild(btnremove)//remove btn
    inputTodo.value = "" //and then onclick  input value = "" nothing 
    btnremove.classList.add("btnremove")//btnremove class
    li.classList.add("li-class");//li class
})


//all clear btn
btnclear.addEventListener("click", () => {
    result.innerHTML = ""
})


