import { createServer } from "node:http";
import { Server } from "socket.io";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(4000, { cors: { origin: "*" } });

  const userSocketMap = new Map();

  io.on("connection", (socket) => {
    console.log(`使用者連線: ${socket.id}`);

    socket.emit("userId", socket.id);

    socket.on(socket.id, (param) => {
      console.log(param);
      socket.emit(socket.id, `Server send: ${param}`);
    });

    socket.on("disconnect", () => {
      console.log(`使用者斷線: ${socket.id}`);
      userSocketMap.delete(socket.id);
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
