import "./Button.css";

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      type="button" 
      className="custom-button"
      onClick={onClick}
      disabled={!!disabled}
      aria-label={text}
    >
      {text}
    </button>
  );
}