const TextInput = ({ title, type }) => {
  return (
    <div className="text-input-holder">
      <div className="input-title">{title}</div>
      {type === "textarea" ? (
        <textarea  />
      ) : (
        <input type={type} />
      )}
    </div>
  );
};

export default TextInput;
