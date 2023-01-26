import React, { useState } from "react";

export let priceOfItem = 0;

export default function Item({ data }, ...rest) {
  const { image, name, desc, price } = data;
  const [quantity, setQuantity] = useState(0);

  function HandleIncreaseCounterClick() {
    setQuantity(quantity + 1);
  }

  function HandleDecreaseCounterClick() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <>
      <div className="item">
        <div className="item-info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
        <img className="image" src={image} />
        <p>{price}$</p>
        <div className="item-quantity">
          <button
            disabled={quantity === 0}
            onClick={HandleDecreaseCounterClick}
            className="item-button"
          >
            -
          </button>
          {quantity !== 0 && <h3 className="item-total">{quantity}</h3>}
          <button onClick={HandleIncreaseCounterClick} className="item-button">
            +
          </button>
        </div>
      </div>
    </>
  );
}
