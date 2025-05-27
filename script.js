document.getElementById("addButton").addEventListener("click", function () 
{
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    <span>${taskText}</span>
    <button>Remove</button>
  `;
  li.querySelector("span").addEventListener("click", function () 
  {
    li.classList.toggle("completed");
  });
  li.querySelector("button").addEventListener("click", function () 
  {
    li.remove();
  });
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
});
