var todoList = {
		todos: [],
		displayTodos: function() {
			if (this.todos.length === 0){
				console.log('Your todo list is empty');
			} else {
				console.log('My todos list is: ')
					for (var i = 0; i < this.todos.length; i++){
						if (this.todos[i].completed === true) {
							console.log('(x)', this.todos[i].todoText);
						} else {
							console.log('( )', this.todos[i].todoText);
						}
					
			}
		};
	},
		addTodos: function(text){ 
			this.todos.push({
				todoText: text, // first is the name of attribute and the second is the parameter
				completed: false
			});
			this.displayTodos();
		},

		changeTodos: function(position, todoText) {
			//this.todos[position] = newText;
			this.todos[position].todoText = todoText;
			this.displayTodos();
		},

		toggleCompleted: function(position) {
			var todo = this.todos[position];
			todo.completed = !todo.completed;
			this.displayTodos();
		},

		deleteTodos: function(position) {
			this.todos.splice(position, 1);
			this.displayTodos();
		}
};


todoList.addTodos("walk the dog");
todoList.toggleCompleted(0)
todoList.displayTodos
//todoList.addTodos("drink whisky");
//todoList.addTodos("throw myself through the window")
