//it should have a place to store things
var todos = ['item 2', 'item 2', 'item 3'];
//it should have a way to display
console.log('my todos:',todos);
//it should have a way to add new todos
todos.push('item 4')
//it should have a way to change a todo list
//grab the specific item in the array and change it
todos[0] = 'item 1 updated'
//it should have a way to delete
//.splice command with first the position and how many you want to delete after the position
todos.splice(0, 1)