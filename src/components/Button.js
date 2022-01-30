
const Button = ({ buttonText, pressed, animationClass }) => {
  return (
    <div>
      <button type="button" onClick={pressed} className={animationClass}>{buttonText}</button>
    </div>
  );
};

export default Button;
