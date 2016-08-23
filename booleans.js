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
		
	changeTodos: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	},
	deleteTodos: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}
};

todoList.addTodos('walk the dog');