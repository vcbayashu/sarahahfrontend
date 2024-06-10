import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function SendMessages() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const submitMessageFunction = async () => {
    try {
      if (description.trim() === "")
        return toast.warning("Enter message before sending");
      const response = await axios.post("/api/sendmessage", {
        title,
        message: description,
      });
      if (response.data.success) {
        toast.success("Message sent secretly!!!");
        settitle("");
        setdescription("");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Send Anonymous Messages</h1>
          <p>Your message will be sent anonymously.</p>
          <form className="message-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                type="text"
                id="title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Message</label>
              <textarea
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                id="description"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              onClick={() => {
                submitMessageFunction();
              }}
              type="button"
            >
              Send Secret Message
            </button>
          </form>
        </header>
      </div>
    </>
  );
}

export default SendMessages;
