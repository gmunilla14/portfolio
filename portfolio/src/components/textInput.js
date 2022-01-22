const TextInput = ({ title, type, setValue, error }) => {
  return (
    <div className="text-input-holder">
      <div className="input-title">{title}</div>
      {type === "textarea" ? (
        <textarea onChange={setValue} />
      ) : (
        <input type={type} onChange={setValue} />
      )}
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default TextInput;
