"use client";

import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("message", (event) => {
      console.log("xxx =", event);
    });
    socket.on("disconnect", onDisconnect);
    setTimeout(() => {
      socket.send("我從前端發送");
    }, 1000);

    return () => {
      socket.off("connect", onConnect);
      socket.off("message");
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <div>
      <p>Status: {isConnected ? "connected" : "disconnected"}</p>
      <p>Transport: {transport}</p>
      {/* <PlayList list={searchResult.items} /> */}
      {/* <iframe
        width='430'
        height='244'
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      /> */}
    </div>
  );
}
