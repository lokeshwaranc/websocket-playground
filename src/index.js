const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketio(server)
const PORT = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'../public')

let count = 0

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket)=> {
	console.log('New device connected')
	socket.emit('counterUpdated',count)
	socket.on('increment',()=>{
		count++
		// socket.emit('counterUpdated',count)
		io.emit('counterUpdated',count)
	})
})

server.listen(PORT, ()=> console.log('Server up on port '+PORT))