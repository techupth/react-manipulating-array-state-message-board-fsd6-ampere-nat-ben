import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(messageInput);
    setMessage(newMessage);
  };
  const deleteMessage = (deleteIndex) => {
    const newDelete = [...message];
    newDelete.splice(deleteIndex, 1);
    setMessage(newDelete);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((text, index) => (
          <div className="message">
            {/* <h1>Hello all ! This is first message.</h1> */}
            <h1 key={index}>{text}</h1>

            <button className="delete-button" onClick={deleteMessage}>
              x
            </button>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default MessageBoard;
