import "./CustomButton.css";

function CustomButton({ buttonTitle, buttonColor, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: buttonColor,
      }}
      className="custom-button"
    >
      {buttonTitle}
    </button>
  );
}

export default CustomButton;
