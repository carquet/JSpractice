//1. it should have a function that displays todos
	//window.todos = [] so that you can call it whereever you want within the app.
	var todos = ['item 1', 'item 2', 'item 3']
	function displayTodos(){
		console.log(todos)
	};
	//dont forget to call your function
	displayTodos();

//2.it should have a function that add todos
	function addTodos(item){
		todos.push(item)
		displayTodos()
		var todos = []
	}
//3.we need a function that changes todos
	function changeTodos(position, value){
		todos[position] = value;
		displayTodos()
	};

//4. we need a function that delete the todos
	function deleteTodos(position) {
		todos.splice(position, 1);
		displayTodos()
	}

