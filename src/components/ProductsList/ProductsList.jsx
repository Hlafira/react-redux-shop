import css from './products-list.module.css';
import Button from 'shared/Components/Button/Button';

const ProductsList = ({ items, onAddProduct }) => {
  const elements = items.map(({ id, name, description, price }) => (
    <li className={css.item} key={id}>
      <h3 className={css.title}>{name}</h3>
      <p className={css.description}>{description}</p>
      <p className={css.price}>{price}$</p>
      <div className={css.buttons}>
        <Button
          onClick={() => {
            onAddProduct({ id, name, description, price });
          }}
        >
          Buy
        </Button>
      </div>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default ProductsList;

ProductsList.defaultProps = {
  items: [],
  onAddProduct: () => {},
};
