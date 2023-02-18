import React from "react";
import house from "../data";
import fill from "./filterls";
import "./house_list.css";

const House_list = ({ filter_data }) => {

   console.log(filter_data);
  let The_house = fill(house,filter_data);
 

  console.log(filter_data);
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
            </div>
          </div>
        );
      })}
    </>
  );
};

export default House_list;
