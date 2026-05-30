import next from 'next';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = Number(process.env.PORT || 3000);
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

await app.prepare();

const httpServer = createServer((req, res) => handler(req, res));
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  const emitSessionsCount = () => io.emit('sessions:count', io.engine.clientsCount);

  emitSessionsCount();

  socket.on('sessions:request', () => {
    socket.emit('sessions:count', io.engine.clientsCount);
  });

  socket.on('disconnect', emitSessionsCount);
});

httpServer.listen(port, () => {
  console.log(`Next.js + Socket.IO started: http://${hostname}:${port}`);
});