// This is Brute-Force-Approach For Filter Data .
// But I Can Reduce Its Time Complexity .

export default function fill(house, filter_data) {
  let The_house = house;

  if (
    filter_data.house_rating != undefined &&
    filter_data.house_location != undefined &&
    filter_data.house_type != undefined &&
    filter_data.house_price != undefined &&
    filter_data.house_rating != "" &&
    filter_data.house_location != "" &&
    filter_data.house_type != "" &&
    filter_data.house_price != ""
  ) {
    The_house = house.filter((item) => {
      return (
        item.house_rating == filter_data.house_rating &&
        item.house_location == filter_data.house_location &&
        item.house_type == filter_data.house_type &&
        parseInt(item.house_price) <= parseInt(filter_data.house_price)
      );
    });
  } else if (
    filter_data.house_location != undefined &&
    filter_data.house_type != undefined &&
    filter_data.house_location != "" &&
    filter_data.house_type != "" &&
    filter_data.house_price != undefined &&
    filter_data.house_price != ""
  ) {
    The_house = house.filter((item) => {
      return (
        item.house_location == filter_data.house_location &&
        item.house_type == filter_data.house_type &&
        parseInt(item.house_price) <= parseInt(filter_data.house_price)
      );
    });
  } else if (
    filter_data.house_type != undefined &&
    filter_data.house_rating != undefined &&
    filter_data.house_rating != "" &&
    filter_data.house_type != "" &&
    filter_data.house_price != undefined &&
    filter_data.house_price != ""
  ) {
    The_house = house.filter((item) => {
      return (
        item.house_type == filter_data.house_type &&
        item.house_rating == filter_data.house_rating &&
        parseInt(item.house_price) <= parseInt(filter_data.house_price)
      );
    });
  } else if (
    filter_data.house_location != undefined &&
    filter_data.house_rating != undefined &&
    filter_data.house_rating != "" &&
    filter_data.house_location != "" &&
    filter_data.house_price != undefined &&
    filter_data.house_price != ""
  ) {
    The_house = house.filter((item) => {
      return (
        item.house_location == filter_data.house_location &&
        item.house_rating == filter_data.house_rating &&
        parseInt(item.house_price) <= parseInt(filter_data.house_price)
      );
    });
  } else if (
    filter_data.house_type != undefined &&
    filter_data.house_location != undefined &&
    filter_data.house_location != "" &&
    filter_data.house_type != "" &&
    filter_data.house_price != undefined &&
    filter_data.house_price != ""
  ) {
    The_house = house.filter((item) => {
      return (
        item.house_type == filter_data.house_type &&
        item.house_location == filter_data.house_location &&
        parseInt(item.house_price) <= parseInt(filter_data.house_price)
      );
    });
  } else if (
    filter_data.house_location != undefined &&
    filter_data.house_type != undefined &&
    filter_data.house_location != "" &&
    filter_data.house_type != ""
  ) {
    The_house = house.filter((item) => {
      return (
        item.house_location == filter_data.house_location &&
        item.house_type == filter_data.house_type
      );
    });
  } else if (
    filter_data.house_location != undefined &&
    filter_data.house_type != undefined &&
    filter_data.house_location != "" &&
    filter_data.house_type != ""
  ) {
    The_house = house.filter((item) => {
      return (
        item.house_location == filter_data.house_location &&
        item.house_type == filter_data.house_type
      );
    });
  } else if (
    filter_data.house_type != undefined &&
    filter_data.house_rating != undefined &&
    filter_data.house_rating != "" &&
    filter_data.house_type != ""
  ) {
    The_house = house.filter((item) => {
      return (
        item.house_type == filter_data.house_type &&
        item.house_rating == filter_data.house_rating
      );
    });
  } else if (
    filter_data.house_type != undefined &&
    filter_data.house_type != ""
  ) {
    The_house = house.filter((item) => {
      return item.house_type == filter_data.house_type;
    });
  } else if (
    filter_data.house_rating != undefined &&
    filter_data.house_rating != ""
  ) {
    The_house = house.filter((item) => {
      return item.house_rating == filter_data.house_rating;
    });
  } else if (
    filter_data.house_location != undefined &&
    filter_data.house_location != ""
  ) {
    The_house = house.filter((item) => {
      return item.house_location == filter_data.house_location;
    });
  } else if (
    filter_data.house_price != undefined &&
    filter_data.house_price != ""
  ) {
    The_house = house.filter((item) => {
      return parseInt(item.house_price) <= parseInt(filter_data.house_price);
    });
  }

  return The_house;
}
