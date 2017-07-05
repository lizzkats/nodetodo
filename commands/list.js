const fs = require('fs')

const listTasks = function(callback) {
  fs.readFile('./tasks.json', ( error, data ) => {
    if ( error ) return callback( error )
    const todos = JSON.parse( data )
    callback( null, todos )
  })
}

module.exports = { listTasks }
