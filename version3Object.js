//1. Object that stores a list into an array

var todosList = {
  todos: ['item 1', 'item 2', 'item 3']
};

//2. add a method that display the todos. See function in version 2
var todosList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
    console.log('My todos', this.todos);
  }
};


//3. add a method that adds a todo. See the fonction in version 2: to refer to the array for THIS object and the function for THIS object add this
var todosList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
    console.log('My todos', this.todos);
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  }
  
};

//4. add a method that change the todos. See the function in version 2.
var todosList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
    console.log('My todos', this.todos);
  },
  addTodo : function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  }
  
};


//5. add a method that delete a todo
var todosList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
    console.log('My todos', this.todos);
  },
  addTodo : function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  }
  
};