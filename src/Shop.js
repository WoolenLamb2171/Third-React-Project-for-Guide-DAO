import React from "react";
import Item from "./Item.js";

const Shop = () => {
  const items = [
    {
      name: "Респиратор 3M",
      desc: "Степень защиты FFP2, есть клапан выдоха",
      image: "https://images.unsplash.com/photo-1585776461369-7727cfe97af0",
      price: 10
    },
    {
      name: "Перчатки латексные",
      desc: "Одноразовые перчатки повышенной прочности",
      image: "https://images.unsplash.com/photo-1599412227383-b7d4751c8765",
      price: 5
    }
  ];
  return (
    <div className="shop">
      <h2 className="ui-title">Добро пожаловать!</h2>
      <Item data={items[0]} />
      <Item data={items[1]} />
      <h3>К оплате: 0$</h3>
    </div>
  );
};

export default Shop;
