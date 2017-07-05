const fs = require('fs')
const list = require('./list')

function markAsDone (id, callback) {

  list.listTasks( (error, todos) => {
    if (error) callback(error)

    console.log("Completed the task " + "'" + todos[id].description + "'")

    let incompleteTodos = todos.filter( (todo) => {
      for (var key in todo) {
        if (todo.id != id) {
          return todo
        }
      }
    })

    const jsontodos = JSON.stringify(incompleteTodos)
    fs.writeFile( 'tasks.json', jsontodos, (err) => {
      if (err) console.log(err)
    } )
  })

}

module.exports = {
markAsDone
}
