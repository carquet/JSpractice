/* var todos = ['item 1', 'item 2', 'item 3']*/

var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function() {
		console.log('my todos', this.todos);
	},
	addTodos: function(todo){
		this.todos.push(todo);
		this.displayTodos();
	}
};

todoList.addTodos('item 5');