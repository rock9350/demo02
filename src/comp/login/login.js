import { Link, useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Userlogin } from "../../redux/reducer";
import { useState } from "react";

const Login = () => {
  const demo = useSelector((state) => state.data.arr.signUpDetails);
  console.log(demo);
  const dispatch = useDispatch();

  const detail = {
    email: "",
    password: "",
    loGin: false,
  };

  const [login, setLogin] = useState(detail);
  const router = useNavigate();

  const OnChangeHandle = (e) => {
    let obj = { ...login };
    let objname = e.target.id;
    obj[objname] = e.target.value;
    setLogin({ ...obj });
  };

  const Oncheck = (e) => {
    // console.log(demo);
    // console.log(login);
    if (demo.length == 0) {
      alert("Plz Create Account");
    } else if (
      demo[0].emailid == login.email &&
      demo[0].password == login.password
    ) {
      setLogin({ ...login, loGin: true });
      let finalStatus = { ...demo };
      finalStatus.loginStatus = true;
      dispatch(Userlogin({ ...finalStatus }));

      //  console.log("right");
      router("/");
    } else {
      alert("Email id Password wrong");
    }
  };

  return (
    <>
      <div>
        <form className={style["signup-box"]}>
          <table className={style["formTable"]}>
            <tbody>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Email Id</label>
                </td>
                <td>
                  <input
                    className={style["formInput"]}
                    type="text"
                    placeholder="Email Id"
                    onChange={OnChangeHandle}
                    value={login.email}
                    id="email"
                  />
                </td>
              </tr>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Password</label>
                </td>
                <td>
                  <input
                    className={style["formInput"]}
                    type="text"
                    placeholder="Password"
                    onChange={OnChangeHandle}
                    value={login.password}
                    id="password"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={Oncheck}
            type="button"
            className={style["formbuttonn"]}
          >
            SignIn
          </button>
          {/* <a href={login.loGin?"/": ""} onClick={Oncheck} className={style["formbuttonn"]}>SignIn</a> */}
          <div>
            <p className={style["NoAcount"]}>
              No account?
              <span>
                {" "}
                <Link to="/SignUp" className={style["Createone"]}>
                  Create one
                </Link>{" "}
              </span>
            </p>
          </div>
        </form>
      </div>
      {demo && (
        <div className={style["signup-box"]}>
          <p className={style["formLabel"]}> All Email and Password</p>
          {demo.map((items, index) => {
            return (
              <div key={index} style={{ border: "3px solid blue" }}>
                <p className={style["formLabel"]}>Email : {items.emailid}</p>
                <p className={style["formLabel"]}>
                  Password : {items.password}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Login;
