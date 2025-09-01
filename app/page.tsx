"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
// import { socket } from "../socket";

export default function Home() {
  const [userId, setUserId] = useState();
  const socketRef = useRef<Socket>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // console.log(socket.io.engine);
  useEffect(() => {
    socketRef.current = io("http://localhost:4000");

    socketRef.current.on("userId", (userId) => {
      setUserId(userId);
    });

    return () => {
      socketRef.current?.off("userId");
    };
  }, []);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      socketRef.current?.emit(userId || "", e.key);
    }

    document.addEventListener("keydown", handleKeydown);
    socketRef.current?.on(`${userId}`, (response) => {
      console.log(response);
    });

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      socketRef.current?.off(`${userId}`);
    };
  }, [userId]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        socketRef.current?.emit(userId || "", inputRef.current?.value);
      }}>
      <input ref={inputRef} type='text' className='bg-white text-black' />
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
    </form>
  );
}
