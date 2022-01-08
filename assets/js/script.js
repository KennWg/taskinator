var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //package data s object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to createTaskE1
    createTaskE1(taskDataObj);
};

var createTaskE1 = function(taskDataObj) {
   //create list 
   var listItemE1 = document.createElement("li");
   listItemE1.className = "task-item";

   //create div to hold values
   var taskInfoE1 = document.createElement("div");
   taskInfoE1.className = "task-info";

   //add html to div
   taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
   listItemE1.appendChild(taskInfoE1)

   //add list item to list
   tasksToDoE1.appendChild(listItemE1);
}

formE1.addEventListener("submit", createTaskHandler);