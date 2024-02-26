const todoList = document.getElementById("todo-list");

const fetchTodo = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) {
      throw "clint error!!!!";
    }
    const data = await res.json();
    console.log(data);
    displayTodoElement(data);
  } catch (error) {
    console.log(error);
  }
};

function displayTodoElement(todos) {
  console.log("todo[index].title");
  console.log("bhjbhb", todos);
  todos.forEach((todo) => {
    const { title, completed } = todo;

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo");

    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.setAttribute("title", "todoCheckbox");
    todoCheckbox.classList.add = "todoCheckbox";
    todoCheckbox.checked = completed;

    todoItem.appendChild(todoCheckbox);

    const todoTitle = document.createElement("p");
    todoTitle.textContent = title;
    todoTitle.classList.add("todo-title");
    todoItem.appendChild(todoTitle);

    todoList.appendChild(todoItem);
  });
}
fetchTodo();

const clockElement = document.querySelector(".clock");
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const clockStr = `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`;
 clockElement.textContent = clockStr;
}

updateTime();
setInterval(updateTime, 1000);
