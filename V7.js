var todosList = {
  todos: [],
  displayTodos: function(){
      if (this.todos.length === 0){
        console.log("your todo list is empty")
      }else{
        console.log('My todos: ')
        for (var i = 0; i < this.todos.length; i++){
          if (this.todos[i].completed === true){
             console.log("(x)", this.todos[i].todoText);
          } else {
            console.log("( )", this.todos[i].todoText)
          }
      }
    }
  },
  addTodo : function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },
  
  
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  
  
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0 ;
    //get number of completed todos
    for (var i = 0; i< totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }
    //CASE 1: if everything is true, make everything false.
    if (completedTodos === totalTodos){
      //then make everything false
      for ( i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
    //CASE 2
      } 
    }else {
        for (i = 0; i < totalTodos; i++){
          this.todos[i].completed = true;
        }
    }
    this.displayTodos();
  }
};

//access to button
var displayTodos = document.getElementById('displayTodosButton');


displayTodos.addEventListener('click', function(){
  todosList.displayTodos();
});

var toggleAllButton = document.getElementById("toggleAll");

toggleAllButton.addEventListener('click', function(){
  todosList.toggleAll();
});