import './style.css';

/*
Do komponenty `InputField` přidejte prop `onValueChange`, kterou komponenta zavolá při
  změně hodnoty a předá jí svou novou hodnotu pokaždé, když uživatel do pole něco napíše.
*/

export const InputField = ({ label, type, value, onValueChange }) => {

  const inputText = (e) => {
    onValueChange(e.target.value)
  }
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        className="input-field__input"
        type={type}
        onChange={inputText}
        value={value}
      />
    </div>
  );
};
