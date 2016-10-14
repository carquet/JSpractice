//1. todolist.addTodo should add an object. We change what we pass as parameter in addTodo function. Instead of pushing a variable we push an object.

var todosList = {
  todos: [],
  displayTodos: function(){
    console.log('My todos', this.todos);
  },
  addTodo : function(todoText){
    this.todos.push({
      todoText: todoText, //prpperty
      completed: false //property
    });
    this.displayTodos();
  },

  //2. should change the todoList property of an object!
  changeTodo: function(position, todoText){
	//this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  //3. should flip to property completed
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  
  //not touched yet.
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  }
  
};