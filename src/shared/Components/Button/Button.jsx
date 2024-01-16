import css from './button.module.css';

const Button = ({ type = 'button', children, onClick }) => {
  return (
    <button className={css.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  onClick: () => {},
};
