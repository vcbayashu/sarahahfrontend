// src/MessageCard.js

import React, { useEffect, useState } from "react";
import "./MessageCard.css";
import { toast } from "react-toastify";
import axios from "axios";

const SeeMessages = () => {
  const [messages, setmessages] = useState([]);
  const getMessages = async () => {
    try {
      const response = await axios.get("/api/messages");
      if (response.data.success) {
        setmessages(response.data.messages);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <h1>Hello Admin, This is what people think about you!!🔐</h1>
      {messages.map((v, i) => {
        return (
          <>
            <div className="message-card">
              <h2>{v.subject}</h2>
              <p>{v.message}</p>
              <p> {new Date(v.createdAt).toLocaleString()} </p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SeeMessages;
