// Elements

const input = document.getElementById("todoInput");
const addbtn = document.getElementById("addbtn");
const list = document.getElementById("todoList");
const count = document.getElementById("count");

// update counter
function updateCount (){
    const total = list.children.length;
    count.innerText ="Total:" + total;
}

//Add todo
function addTodo(){
    const text ="input.value.trim()";
    if (text === " "){
        alert("Something write!");
        return;
    }
}
