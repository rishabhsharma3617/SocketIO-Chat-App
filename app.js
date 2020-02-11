const  express = require('express')
const app = express()
const socket = require('socket.io')

//Static code
app.use(express.static('public'))



var server = app.listen(3000 , () => {
    console.log("Listening to port 3000 , Server started")
})

//socket function takes the server name as the parameter to know on which server wh actually have to setu our socket.io
var io = socket(server)

io.on('connection',function(socket) {
    console.log("made socket connection",socket.id)
})