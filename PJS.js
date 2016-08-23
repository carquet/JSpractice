/* var todos = ['item 1', 'item 2', 'item 3']*/

var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function() {
		console.log('my todos', this.todos);
	}
};

todoList.displayTodos();