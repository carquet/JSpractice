var todoList = {
		todos: [],
		displayTodos: function() {
		console.log('my todos', this.todos);
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

	deleteTodos: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}
};

todoList.addTodos('walk the dog');
todoList.addTodos('drink milk');
todoList.changeTodos(0, 'walk the husband');
