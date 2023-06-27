import React, { useEffect, useState } from "react";
import fill from "./filterls";
import "./house_list.css";
import { addToCart } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import house from './../data';

const House_list = ({ filter_data }) => {
 // console.log(filter_data);
  let The_house = fill(house, filter_data);

  const demo = useSelector((state) => {
    return state.data.arr;
  });
 // console.log(demo);
  const dispatch = useDispatch();

  const [cartProduct, setcartProduct]  = useState([]);

  const AddtoCart = (e) => {
    let arr = [e.target.id];
    // let productName: string = e.target.id;
    // arr.push(productName);
  //  console.log(arr);
    
    setcartProduct(arr);
  };
  const filterItemsforCart = () => {
    let items = house;
   
    let find = items.filter((item) => {
      return item.house_price == cartProduct[0];
    });
    // console.log(find);
    return find;
  };

  useEffect(() => {
    let filterCart = filterItemsforCart();
    dispatch(addToCart(filterCart));
  }, [cartProduct]);

  //console.log(filter_data);
  return (
    <>
      {The_house.map((item, index) => {
        return (
          <div className="box" key={index}>
            <img className="movie-img" src={item.img} />

            <div className="box-details">
              <h1 className="movie-name">{item.house_name} </h1>
              <h3 className="lang">
                <span>{item.house_type}</span>
              </h3>
              <h3 className="rate">
                Rating:{" "}
                <span>
                  {item.house_rating}
                  /5
                </span>
              </h3>
              <h3 className="rate">
                Location: <span>{item.house_location}</span>
              </h3>
              <h3 className="rate">
                Price: <span>{item.house_price}</span>
              </h3>
              <button  onClick={AddtoCart} id={item.house_price} style={{ width: "75%", background: "white" }}>
                Saved
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default House_list;
