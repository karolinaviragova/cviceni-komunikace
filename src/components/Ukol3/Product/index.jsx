import './style.css';

/*
Do komponenty `Product` přidejte prop `onSelectPrice`, kterou komponenta zavolá při
  kliknutí na nějaký kousek oblečení a předá jí svou cenu.
*/

export const Product = ({ image, name, price, onSelectPrice }) => {

  const onHandleClick = () => {
    onSelectPrice(price);
  }

  return (
    <div className="product" onClick={onHandleClick}>
      <img src={image} className="product__image" />
      <div className="product__body">{name}: {price} Kč</div>
    </div>
  );
};
