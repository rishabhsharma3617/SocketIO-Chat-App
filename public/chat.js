// Make Connection
var socket = io.connect('http://localhost:3000')

//Query dom
var message = document.getElementById('message')
var handle = document.getElementById('handle')
var btn = document.getElementById('send')
var output = document.getElementById('output')
var feedback = document.getElementById('feedback')
//Emit Events 
 btn.addEventListener('click',function() { 
     socket.emit('chat',{ //This object data is being sent to the server whenever send is clicked
         message : message.value,
         handle : handle.value      
     })
 })

 message.addEventListener('keypress',function(){
     socket.emit('typing',handle.value)
 })



 //Listen for events
 socket.on('chat',function(data){
     feedback.innerHTML = ''
     output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
 })

 socket.on('typing',function(data){
     feedback.innerHTML = '<p><em>' + data + ' is typing the message' + '</em></p>'
 })