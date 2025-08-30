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

  io.on("connection", (socket) => {
    // console.log(socket);
    console.log("連接上啦");
    socket.on("message", (message) => {
      console.log("received: &s", message);
      socket.send(`我從 server 發送的: ${message}`);
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
