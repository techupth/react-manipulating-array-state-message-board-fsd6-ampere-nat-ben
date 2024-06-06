function MessageBoard() {
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
          />
        </label>
        <button className="submit-message-button">Submit</button>
      </div>
      <div className="board">
        <div className="message">
          <h1>Hello all ! This is first message.</h1>
          <button className="delete-button">x</button>
        </div>
      </div>
    </div>
  );
}

export default MessageBoard;
