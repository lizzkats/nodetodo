const fs = require('fs')
const list = require('./list')

function addTask (task, callback) {

  list.listTasks( (error, todos) => {
    if (error) callback(error)
    const newTodo = {id: todos.length, description: task}
    todos.push(newTodo)
    rewriteFile(todos, function() {
      console.log('created task ' + todos[todos.length - 1].id);
    })
  })

}

function rewriteFile(todos, callback) {
  const jsontodos = JSON.stringify(todos)
  fs.writeFile( 'tasks.json', jsontodos, (err) => {
    if (err) console.log(err)
    callback()
  })
}

module.exports = {
  addTask
}
