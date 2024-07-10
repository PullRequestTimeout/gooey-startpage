// Event listeners
document.getElementById("todosCheckbox").addEventListener("change", toggleTodos);
document.getElementById("closeTodosPanel").addEventListener("click", toggleTodos);
document.querySelector("main").addEventListener("click", () => {
	if (document.getElementById("todosPanel").classList.contains("display-settings")) {
		toggleTodos();
	}
});
document.getElementById("newTodoForm").addEventListener("submit", (event) => {
	event.preventDefault();
	submitTodo();
});

// Open and close the todos panel
function toggleTodos() {
	const todosPanel = document.getElementById("todosPanel");
	todosPanel.classList.toggle("display-settings");
}

let currentTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

// Add new todo to the list
function submitTodo() {
	const todoInput = document.getElementById("todoInput");

	if (todoInput.value === "") {
		showErrorModal("A new todo cannot be empty.");
	} else {
		currentTodos.push({ todoValue: todoInput.value, todoCompleted: false });
		localStorage.setItem("todos", JSON.stringify(currentTodos));
		todoInput.value = "";
		populateTodos();
	}
}

// Gets the current todos from local storage and adds them to the list
function populateTodos() {
	let todoListHTML = "";
	const todoList = document.getElementById("todoList");

	// Check if there aren't any todos in local storage
	if (currentTodos.length === 0) {
		document.getElementById("todoList").classList.add("hidden-element");
	} else {
		document.getElementById("todoList").classList.remove("hidden-element");
	}

	for (let i = 0; i < currentTodos.length; i++) {
		todoListHTML += `<li class="todo-item ${currentTodos[i].todoCompleted ? "crossed-out" : ""}">${
			currentTodos[i].todoValue
		}<input type="checkbox" id="todo${i}" class="todo-checkbox hidden-element" ><label class="todo-check" for="todo${i}"><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#fff"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></label><button><svg class="remove-todo" height="35" viewBox="0 0 847 847" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="423.5" cy="423.5" r="423.5" fill="white" fill-opacity="0.20"/><path d="M335.2 185.69C340.6 174.848 351.7 168 363.8 168H484.2C496.3 168 507.4 174.848 512.8 185.69L520 200H616C633.7 200 648 214.33 648 232C648 249.67 633.7 264 616 264H232C214.33 264 200 249.67 200 232C200 214.33 214.33 200 232 200H328L335.2 185.69ZM231.1 296H616V616C616 651.3 587.3 680 552 680H295.1C260.65 680 231.1 651.3 231.1 616V296ZM311.1 376V600C311.1 608.8 319.2 616 327.1 616C336.8 616 343.1 608.8 343.1 600V376C343.1 367.2 336.8 360 327.1 360C319.2 360 311.1 367.2 311.1 376ZM407.1 376V600C407.1 608.8 415.2 616 423.1 616C432.8 616 440 608.8 440 600V376C440 367.2 432.8 360 423.1 360C415.2 360 407.1 367.2 407.1 376ZM504 376V600C504 608.8 511.2 616 520 616C528.8 616 536 608.8 536 600V376C536 367.2 528.8 360 520 360C511.2 360 504 367.2 504 376Z"fill="white"/></svg></button></li>`;
	}

	todoList.innerHTML = todoListHTML;
	addLabelListeners();
	addRemoveListeners();
}

// Add event listeners to the checkmarks. Need to be added each time the todos are populated
function addLabelListeners() {
	const todoCheckboxes = document.querySelectorAll(".todo-checkbox");
	todoCheckboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", (event) => {
			const todoText = event.target.parentElement.innerText;
			const todoIndex = currentTodos.findIndex((todo) => todo.todoValue === todoText);
			currentTodos[todoIndex].todoCompleted = !currentTodos[todoIndex].todoCompleted;
			localStorage.setItem("todos", JSON.stringify(currentTodos));
			populateTodos();
		});
	});
}

// add enent listeners to the remove buttons
function addRemoveListeners() {
	const removeButtons = document.querySelectorAll(".todo-item button");
	removeButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			const todoText = event.target.parentElement.parentElement.parentElement.innerText;
			const todoIndex = currentTodos.findIndex((todo) => todo.todoValue === todoText);
			currentTodos.splice(todoIndex, 1);
			localStorage.setItem("todos", JSON.stringify(currentTodos));
			populateTodos();
		});
	});
}

populateTodos();
