var todosList = {
  todos: [],
  //displayTodos: function(){

    //  if (this.todos.length === 0){
    //    console.log("your todo list is empty");
    //  }else{
    //    console.log('My todos: ');
    //    for (var i = 0; i < this.todos.length; i++){
    //      if (this.todos[i].completed === true){
      //       console.log("(x)", this.todos[i].todoText);
        //  } else {
          //  console.log("( )", this.todos[i].todoText);
          //}
    //  }
  //  }
//  },
  addTodo : function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });

  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
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
  }
};

//access to button- interaction with the user
var handlers = {
  
  toggleAll: function(){
    todosList.toggleAll();
    view.displayTodos();
  },
  addTodo: function(){
    var addTodoTextInput= document.getElementById("addTodoTextInput");
    todosList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todosList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function(){
    var deleteTodoPosition = document.getElementById('deleteTodosPositionInput');
    todosList.deleteTodo(deleteTodoPosition.valueAsNumber);
    deleteTodoPosition.value='';
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todosList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value="";
    view.displayTodos();
  }
};

//show things on screen 
var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
   
    for (var i = 0; i < todosList.todos.length; i++){
      var todoLi = document.createElement('li');
       var todo = todosList.todos[i];
       
      var todoTextWithCompletion = '';
      if (todo.completed){
        todoTextWithCompletion = '(x)'+ todo.todoText;
      }else{
        todoTextWithCompletion = '( )'+ todo.todoText;
      }
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
}
