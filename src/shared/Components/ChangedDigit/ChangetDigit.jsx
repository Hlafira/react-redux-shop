import css from './changed-digit.module.css';

const ChangedDigit = ({ value, onPlus, onMinus }) => {
  return (
    <div className={css.digit}>
      <button className={`${css.button} ${css.left}`} onClick={onMinus}>
        -
      </button>
      <span className={css.val}>{value}</span>
      <button className={`${css.button} ${css.right}`} onClick={onPlus}>
        +
      </button>
    </div>
  );
};

export default ChangedDigit;
