const TextInput = ({ title, type, setValue, error, value }) => {
  return (
    <div className="text-input-holder">
      <div className="input-title">{title}</div>
      {type === "textarea" ? (
        <textarea onChange={setValue} value={value}/>
      ) : (
        <input type={type} onChange={setValue} value={value} />
      )}
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default TextInput;
