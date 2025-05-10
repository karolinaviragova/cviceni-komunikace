import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {

  const inputTextValue = (e) => {
    onValueChange(e.target.value)
  }
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        className="input-field__input"
        type={type}
        onChange={inputTextValue}
      />
    </div>
  );
};
