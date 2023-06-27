import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer"

export default configureStore({
    reducer:{
       data: authSlice
    }
})