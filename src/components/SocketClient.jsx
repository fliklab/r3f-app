/*ignore*/
import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect(
  "http://localhost:9000", {
        transports: ["websocket"],
  }
);
    

export default function SocketClient() {
  const [counter, setCounter] = useState(0);
  const [messages, setMessages] = useState(["yo"]);
  const addMessage = (data) => {
    setMessages((messages) => [...messages, data]);
  };

  socket.on("connect", (msg) => {
    socket.emit("message-client", `연결됨.`);
    console.log("connected", msg);
    socket.emit("name", "Tom");
  });
  socket.on("seq-num", (msg) => {
    // setCounter(msg)
    console.info(msg)
  });
  socket.on("message", (msg) => {
    // addMessage(msg);
    console.info(msg);
  });
  
  useEffect(() => {
    // socket.emit("msg", `count ${counter}`);
    addMessage(`count ${counter}`);
  }, [counter]);

  return <div>
    <button onClick={() => { socket.emit("message-client", "Tom"); }}>
      asdfa
    </button>
    {messages.map((item, index) => <div key={`${item}-${index}`}>{item}<br />
    </div>)}
  </div>;
}
