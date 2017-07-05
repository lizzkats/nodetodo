const fs = require('fs')
const add = require('./commands/add')
const list = require('./commands/list')
const done = require('./commands/done')

  let decodeArgs = {
    function: process.argv[2],
    data: process.argv[3]
  }

  if (!fs.existsSync('./tasks.json') ) {
  fs.open('./tasks.json', 'w', ( error, data ) => {
    fs.writeFile('./tasks.json', '[]', ( error, data ) => {
      if (error) console.log(error)
    })
  })
}

  if( decodeArgs.function === 'add') {
    add.addTask(decodeArgs.data)
  }

  else if(decodeArgs.function === 'list') {
    list.listTasks((error, todos) => {
    console.log("ID Description\n-- -----------")
      for (var i = 0; i < todos.length; i++) {
        console.log( todos[i].id + "  " + todos[i].description )
      }
    })
  }

  else if(decodeArgs.function === 'done') {
    done.markAsDone(decodeArgs.data)
  }
