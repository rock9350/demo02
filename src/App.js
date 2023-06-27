import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./comp/login/login";
import MainPage from "./comp/mainPage/main";
import SignUp from "./comp/signup/signup";
import Cart from "./comp/cart/cart";

function App() {
  return (
    <div className="App">
       <Cart/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
