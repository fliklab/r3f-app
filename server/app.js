const
    {Server} = require("socket.io"),
    server = new Server(9000);

let
    sequenceNumberByClient = new Map();

// event fired every time a new client connects:
server.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    sequenceNumberByClient.set(socket, 1);
    socket.emit("message", socket.id);

    // when socket disconnects, remove it from the list:
    socket.on("disconnect", () => {
        sequenceNumberByClient.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
    });
    
    // Listen for disconnect events
    socket.on('disconnect', (data) => {
        // Only broadcast to other clients that this one has left IF it has triggered a join event
        if (socket.id !== undefined) {
            socket.broadcast.emit('otherDisconnect', socket.id);
        }
        delete socket.id;
    });

    socket.on("message-client", (data) => {
        console.info(`Client message from ${socket.id}[${data}]`);
        socket.emit('message',`${socket.id}:메시지`);
     })
});

	

// sends each client its current sequence number
setInterval(() => {
    for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
        client.emit("seq-num", sequenceNumber);
        sequenceNumberByClient.set(client, sequenceNumber + 1);
    }
}, 1000);