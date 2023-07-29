let todos = [];

function addTodo() {
  const inputElement = document.getElementById("todoInput");
  const task = inputElement.value.trim();
  if (task !== "") {
    todos.push(task);
    inputElement.value = "";
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  const todoListElement = document.getElementById("todoList");
  todoListElement.innerHTML = "";

  todos.forEach((task, index) => {
    const listItemElement = document.createElement("li");
    listItemElement.className = "list-group-item d-flex justify-content-between align-items-center";
    listItemElement.innerHTML = `
      ${task}
      <button type="button" class="btn btn-danger btn-sm" onclick="deleteTodo(${index})">Delete</button>
    `;
    todoListElement.appendChild(listItemElement);
  });
}

// Render initial todos (if any)
renderTodos();