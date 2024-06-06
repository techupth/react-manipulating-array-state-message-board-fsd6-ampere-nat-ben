import { useState } from "react";
function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const handleInputTextChange = (e) => setInputMessage(e.target.value);
  const handleSubmit = () => {
    const newMessageList = [...messageList, inputMessage];
    setMessageList(newMessageList);
    setInputMessage("");
  };
  const handleDelete = (elToDelete, indexToDelete) => {
    const filteredMessageList = messageList.filter(
      (_, index) => index !== indexToDelete
    );
    setMessageList(filteredMessageList);
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={handleInputTextChange}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="board">
        {messageList.map((el, index) => {
          return (
            <div key={index}>
              <div className="message">
                {el}
                <button
                  className="delete-button"
                  onClick={() => handleDelete(el, index)}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
