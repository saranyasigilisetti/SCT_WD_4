function addTask(){

  let taskText =
  document.getElementById("taskInput").value;

  let taskDate =
  document.getElementById("dateInput").value;

  let taskTime =
  document.getElementById("timeInput").value;

  if(taskText === ""){
    alert("Please enter a task");
    return;
  }

  let taskDiv =
  document.createElement("div");

  taskDiv.classList.add("task");

  taskDiv.innerHTML = `

    <h3>${taskText}</h3>

    <p>📅 Due Date : ${taskDate}</p>

    <p>⏰ Time : ${taskTime}</p>

    <div class="task-buttons">

      <button class="complete"
      onclick="completeTask(this)">
      Complete
      </button>

      <button class="edit"
      onclick="editTask(this)">
      Edit
      </button>

      <button class="delete"
      onclick="deleteTask(this)">
      Delete
      </button>

    </div>

  `;

  document.getElementById("taskList")
  .appendChild(taskDiv);

  // Clear Input Fields

  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";
  document.getElementById("timeInput").value = "";

}

// Complete Task

function completeTask(button){

  let task =
  button.parentElement.parentElement;

  task.classList.toggle("completed");
}

// Delete Task

function deleteTask(button){

  let task =
  button.parentElement.parentElement;

  task.remove();
}

// Edit Task

function editTask(button){

  let task =
  button.parentElement.parentElement;

  let taskName =
  task.querySelector("h3");

  let newTask =
  prompt("Edit Task", taskName.innerText);

  if(newTask !== null && newTask !== ""){
    taskName.innerText = newTask;
  }
}