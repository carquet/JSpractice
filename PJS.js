/* var todos = ['item 1', 'item 2', 'item 3']*/

var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function() {
		console.log('my todos', this.todos);
	},
	addTodos: function(todo){
		this.todos.push(todo);
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

todoList.deleteTodos(1);