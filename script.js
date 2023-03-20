//Step 1 find the element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");
var templateContainer = document.getElementById("list-item-template");
var template = templateContainer.innerHTML

//Step 2 write the behavour 

function addTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value ="";
    var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
}

function onTodoListContainerClicked(event) {
    while (!targetElement.classList.contains("task")){
        targetElement = targetElement.parentElement;
    } 
}

//Step 3 link to event handler 

addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);

