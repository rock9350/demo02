import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "rent",
  initialState: {
    status: "Okay",
    arr: {
      signUpDetails: [],
      logInDetails: [],
      cartOpen: {
        open: false,
      },
      productCart: [],
      productDetail: [],
    },
  },
  reducers: {
    login: (action, state) => {
      console.log("start");
    },
    Signup: (state, action) => {
      //  console.log(state.arr.signUpDetails);
      state.arr.signUpDetails.push(action.payload);
    },
    Userlogin: (state, action) => {
      state.arr.logInDetails.push(action.payload);
    },
    logout: (state, action) => {
      state.arr.logInDetails.pop();
    },
    addToCart: (state, action) => {
     console.log("AAdd to cart");
      let arr = action.payload[0];
       console.log(arr);

      const newArr = action.payload.filter((item) => {
        return !state.arr.productCart.some((detail) => detail.house_price === item.house_price);
      });
     console.log(newArr);
      state.arr.productCart.push(...newArr);
    },
    increaseQuantity: (state, action) => {
      //  console.log(action.payload);

      state.arr.productCart = action.payload;
    },
    decreaseQuantity: (state, action) => {
      //  console.log(action.payload);
      //  console.log("in redux");
      state.arr.productCart = action.payload;
    },
    cartAction: (state, action) => {
      //   console.log(action.payload);
      state.arr.cartOpen.open = action.payload;
    },
  },
});

export const {
  login,
  Signup,
  Userlogin,
  logout,
  decreaseQuantity,
  increaseQuantity,
  addToCart,
  cartAction,
} = authSlice.actions;

export default authSlice.reducer;
