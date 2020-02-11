// Make Connection
var socket = io.connect('http://localhost:3000')

//Query dom
var message = document.getElementById('message')
var handle = document.getElementById('handle')
var btn = document.getElementById('send')
var output = document.getElementById('output')
//Emit Events 
 btn.addEventListener('click',function() { 
     socket.emit('chat',{ //This object data is being sent to the server whenever send is clicked
         message : message.value,
         handle : handle.value      
     })
 })

 //Listen for events
 socket.on('chat',function(data){
     output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
 })