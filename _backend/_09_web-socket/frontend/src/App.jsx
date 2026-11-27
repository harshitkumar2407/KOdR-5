import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css"

const socket = io("http://localhost:3000");

function App() {

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        // Listen to backend
        const handleMessage = (data) => {
            setMessages(prev => [...prev, data]);
        };

        socket.on("receive-message", handleMessage);

        // Cleanup listener
        return () => {
            socket.off("receive-message", handleMessage);
        };

    }, []);

    const sendMessage = () => {

        // Send to backend
        socket.emit("send-message", message);

        setMessage("");

    };

    return (
        <div>

            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button onClick={sendMessage}>
                Send
            </button>
            

            {messages.map((msg, index) => (
                <p key={index}>{msg}</p>
            ))}

        </div>
    );
}

export default App;