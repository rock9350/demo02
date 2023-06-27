import React, { useEffect, useState } from "react";
import style from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../redux/reducer";

const Cart = () => {
  const cartAction = useSelector((state) => state.data.arr.cartOpen.open);
  const product = useSelector((state) => state.data.arr.productCart);
  const dispatch = useDispatch();

  const [state, setState] = useState([]);

  const onAddAction = (e) => {
    let updatedState = state.map((item) => {
      if (item.id == e.target.id) {
        let count = item.Count;
        count++;
        return { ...item, Count: count };
      }
      return item;
    });

    setState(updatedState);
  };

  const onSubAction = (e) => {
    let updatedState = state
      .map((item) => {
        if (item.id == e.target.id && item.Count > 0) {
          let count = item.Count;
          count--;
          return { ...item, Count: count };
        }
        return item;
      })
      .filter((items) => {
        return items.Count != 0;
      });

    setState(updatedState);
    dispatch(decreaseQuantity(state));
  };

  useEffect(() => {
    setState(product);
  }, [product]);

  useEffect(() => {
    dispatch(increaseQuantity(state));
  }, [state]);

  let total = 0;

  return (
    <>
      <div
        className={style["cartbox"]}
        style={cartAction ? { display: "inline-block" } : { display: "none" }}
      >
        <div className={style["itemsCount"]}>
          <p>Saved House</p>
          <p>{product.length} items</p>
        </div>
        {state.map((items, index) => {
          total = total + parseInt(items.price) * parseInt(items.Count);
          return (
            <div key={index} className={style["productbox"]}>
              <img
                className={style["productImg"]}
                src={items.img}
                alt="Product"
              ></img>
              <div style={{ width: "55%" }}>
                <p style={{ fontSize: "14px" }}>{items.house_name}</p>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </>
  );
};

export default Cart;
