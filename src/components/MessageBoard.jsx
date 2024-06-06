import { useState } from "react";
import Message from "./Message";
function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const handleInputTextChange = (e) => setInputMessage(e.target.value);
  const handleSubmit = () => {
    const newMessageList = [...messageList, inputMessage];
    setMessageList(newMessageList);
    setInputMessage("");
  };
  // Method 1
  // originalArr.filter (pure function) (subpar performance)
  // const handleDelete = (indexToDelete) => {
  //   const filteredMessageList = messageList.filter(
  //     (_, index) => index !== indexToDelete
  //   );
  //   setMessageList(filteredMessageList);
  // };

  // Method 2
  // shallowCloneArr.splice (best performance)
  const handleDelete = (indexToDelete) => {
    const splicedMessageList = [...messageList];
    splicedMessageList.splice(indexToDelete, 1);
    setMessageList(splicedMessageList);
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
            <Message
              key={index}
              el={el}
              index={index}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
