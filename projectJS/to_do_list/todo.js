// const { createElement } = require("react");

//wrapping  the whole event in one , when reload the content again
document.addEventListener("DOMContentLoaded", function () {
  let todoInput = document.getElementById("addText");
  let addTaskButton = document.getElementById("add_button");
  let todoList = document.getElementById("todo_item");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //parse convert the string content into original one 

  tasks.forEach((task) => renderTask(task));

  // add an event to the "addtodoButton".
  addTaskButton.addEventListener("click", function () {
    const taskText = todoInput.value.trim(); // accessing the content in the input and remove the extra space in the input

    if (taskText == "") alert("Pleae enter something");

    const newTask = { // give a unique id to each of the task
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask); // push the newtask into tasks
    saveTask(); //call the saveTask function and save all tasks in local storage
    // renderTask(newTask);
    todoInput.value = ""; //clear input after push the newtask to tasks
    console.log(tasks); // save or print the tasks on the console window
  });

  // function to render or read the tasks from the local storage
  function renderTask(task){
    // console.log(task.text);
    const li=document.createElement('li');
    li.setAttribute("data-id",task.id);
    // if(task.completed) li.classList.add("completed");
    li.innerHTML=`
    <span>${task.text}</span>
    <button>Delete</button> 
    `;

    li.addEventListener("click" , (e)=>{
      if(e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector('button').addEventListener("click",(e) =>{
        e.stopPropagation(); //prevent toggle from firing 
        tasks = tasks.filter(t => t.id!==task.id); //filter the tasks . which are to be deleted. (if we use t.id===task.id , it remove all the tasks except the clicked one ).
        li.remove();
        saveTask();
    });

    todoList.appendChild(li);  // append or say insert the list into the ul.
  }

  //function to store or set the tasks in the local storage 
  function saveTask(){
    localStorage.setItem("tasks",JSON.stringify(tasks)); // stringify convert the original one to the string  formate.
  }
}) ;







// // script.js
// function addTask() {
//   const taskInput = document.getElementById("taskInput");
//   const taskText = taskInput.value.trim();

//   if (taskText === "") {
//     alert("Please enter a task.");
//     return;
//   }

//   const taskList = document.getElementById("taskList");

//   const li = document.createElement("li");
//   li.textContent = taskText;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.onclick = function () {
//     taskList.removeChild(li);
//   };

//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   taskInput.value = "";
// }