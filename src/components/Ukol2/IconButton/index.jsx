import './style.css';

export const IconButton = ({ label, onSelectName}) => {
  const handleClick = () => {
    onSelectName(label)
  }
  return (
    <button className="icon-button" onClick={handleClick}>
      <i className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
