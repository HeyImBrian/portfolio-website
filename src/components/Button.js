
const Button = ({ buttonText, pressed }) => {
  return (
    <div>
      <button type="button" onClick={pressed}>{buttonText}</button>
    </div>
  );
};

export default Button;
