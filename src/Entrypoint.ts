import SocketIo, { Socket } from 'socket.io'
import {Server} from 'http'

const server = new Server()
const app = server.listen(3939)
const io = SocketIo(app)
io.on('connection', function (socket: Socket){
    console.log("Socket connected: ", socket.handshake.time)
    socket.on('light', function(data: any){
        socket.emit('dark', 10)
        console.log('light')
    })
})

