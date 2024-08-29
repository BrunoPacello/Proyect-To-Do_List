let tasks = [];

function LoadTask(task) {
  const taskContainer = document.getElementById("container");

  const taskElement = `
       <li id="${task.id}" class="task">
        <div class="taskInformation">
          <h3>Titulo de la Tarea</h3>
          <p class="taskContent">${task.title}</p>
          <h3>Consigna de la Tarea</h3>
          <p class="taskContent">${task.description}</p>
          <button class="deleteButton" id="${task.id}">Eliminar</button>
        </div>
      </li>`;

  taskContainer.insertAdjacentHTML("beforeend", taskElement);

  const deleteButton = document.getElementById(`${task.id}`);
  deleteButton.addEventListener("click", function () {
    deleteTask(task.id);
  });
}

function loadTasks() {
  tasks.forEach((task) => LoadTask(task));
}

loadTasks();

function createTask() {
  const taskTitle = document.getElementById("titleInput").value;
  const taskDescription = document.getElementById("descriptionInput").value;

  if (taskTitle.trim() === "" || taskDescription.trim() === "") {
    alert("Por favor, complete ambos campos.");
    return;
  }

  const newTask = {
    id: tasks.length,
    title: taskTitle,
    description: taskDescription,
  };

  tasks.push(newTask);

  LoadTask(newTask);

  document.getElementById("titleInput").value = "";
  document.getElementById("descriptionInput").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const addTaskButton = document.getElementById("addTaskButton");

  if (addTaskButton) {
    addTaskButton.addEventListener("click", createTask);
  }
});

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);

  const taskElement = document.getElementById(`${taskId}`);
  if (taskElement) {
    taskElement.remove();
  }
}
