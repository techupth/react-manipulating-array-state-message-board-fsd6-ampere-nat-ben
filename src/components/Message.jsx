function Message(props) {
  const el = props.el;
  const index = props.index;
  const handleDelete = props.handleDelete;
  return (
    <>
      <div>
        <div className="message">
          {el}
          <button className="delete-button" onClick={() => handleDelete(index)}>
            x
          </button>
        </div>
      </div>
    </>
  );
}
export default Message;
