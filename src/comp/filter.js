import React, { useState } from "react";
import "./filter.css";

const Filter = (props) => {
  let DataList = {
    house_type: "",
    house_location: "",
    house_rating: "",
    house_price: "",
  };

  let [get, set] = useState(DataList);

  const Selecting = (e) => {
    if (e.target.name == "house_price") {
      set({ ...get, house_price: e.target.value });
    }
    if (e.target.name == "house_location") {
      set({ ...get, house_location: e.target.value });
    }
    if (e.target.name == "house_rating") {
      set({ ...get, house_rating: e.target.value });
    }
    if (e.target.name == "house_type") {
      set({ ...get, house_type: e.target.value });
    }
  };

  const StoreDetail = (e) => {
    e.preventDefault();
    props.set_filter_data(get);
   
  };
  return (
    <div id="filter_box">
      <form id="filter" onSubmit={StoreDetail}>
        <div>
          <label>Price</label>
          <select
            id="house_price"
            name="house_price"
            onChange={Selecting}
            form="filter"
          >
            house_price
            <option value="1000">1,000</option>
            <option value="5000">5,000</option>
            <option value="10000">10,000</option>
            <option value="15000">15,000</option>
            <option value="20000">20,000</option>
          </select>
        </div>
        <div>
          <label>Rating</label>
          <select
            id="house_rating"
            name="house_rating"
            onChange={Selecting}
            form="filter"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Type</label>
          <select
            id="house_type"
            name="house_type"
            onChange={Selecting}
            form="filter"
          >
            <option value="Residential Apartment">Residential Apartment</option>
            <option value="Independent/Builder Floor">
              Independent/Builder Floor
            </option>
            <option value="Farm House">Farm House</option>
          </select>
        </div>
        <div>
          <label>Location</label>
          <select
            id="house_location"
            name="house_location"
            onChange={Selecting}
            form="filter"
          >
            <option value="delhi">delhi</option>
            <option value="mumbai">mumbai</option>
            <option value="goa">goa</option>
            <option value="Bihar">Bihar</option>
          </select>
        </div>
        <input type="submit" value="Filter" />
      </form>
    </div>
  );
};

export default Filter;
