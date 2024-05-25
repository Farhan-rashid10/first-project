const input = document.getElementById("input")
const button = document.getElementById("button-addon2")
const todoList = document.getElementById("todoList")

button.addEventListener("click" , function(){
    if(input.value === ""){
        alert("write something")
    }else{
        const list = document.createElement("li")
        list.textContent = input.value;
        list.classList.add("list-group-item")
        todoList.appendChild(list)
   todoList.addEventListener("click" , function(e){
    e.target.style.textDecoration = "line-through"
   })
    }
    input.value = ""
})
input.addEventListener("keydown" , function(e){
    // if(input.value === "" ){
    //     alert("write something")
     if(e.key === 'Enter' && input.value !== ""){
        const list = document.createElement("li")
        list.textContent = input.value;
        list.classList.add("list-group-item")
        todoList.appendChild(list)
        todoList.addEventListener("click" , function(e){
            e.target.style.textDecoration = "line-through"
           })
           input.value = ""
    }
    
})
