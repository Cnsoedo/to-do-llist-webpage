function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center bg-white p-4 rounded shadow";

  li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="this.parentElement.remove()" class="text-red-500 hover:text-red-700">Delete</button>
      `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
