//1. display todo should todo.text
//2. if todo list is empty show it to the users. If there are we want to print as normal
//3. show whether it is complete or not

var todosList = {
  todos: [],
  displayTodos: function(){
      if (this.todos.length === 0){
        console.log("your todo list is empty")
      } else {
        console.log('My todos: ')
        for (var i = 0; i < this.todos.length; i++){
          console.log(this.todos[i].todoText)
          //check if .complete is true
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
      todoText: todoText, //property
      completed: false //property
    });
    this.displayTodos();
  },

 
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },


  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  

  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  }
  
};