const socket = io()

socket.on('counterUpdated',(count)=>{
	console.log(`couter is updated to ${count}`)
})

const increment = document.getElementById('increment')
increment.addEventListener('click',()=>{
	socket.emit('increment')
})