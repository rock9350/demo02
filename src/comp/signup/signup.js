import { useState } from "react";
import style from "./signup.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Signup } from "../../redux/reducer";

const SignUp = () => {
  const Dispatch = useDispatch();

  const presonal = {
    name: "",
    username: "",
    phoneno: "",
    emailid: "",
    password: "",
  };

  const [details, setDetails] = useState(presonal);

  const onChangeHandele = (e) => {
    e.preventDefault();
    let obj = { ...details };
    let objName = e.target.id;
    obj[objName] = e.target.value;

    setDetails({ ...obj });
    console.log(details);
  };

  const DetailSubmit = () => {
    Dispatch(Signup(details));
    console.log("submit");
  };

  const isFormValid = Object.values(details).every((value) => value !== "");

  return (
    <>
      <div>
        <form className={style["signup-box"]}>
          <table className={style["formTable"]}>
            <tbody>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Name</label>
                </td>
                <td>
                  <input
                    className={style["formInput"]}
                    type="text"
                    required
                    onChange={onChangeHandele}
                    id="name"
                    value={details.name}
                    placeholder="Name"
                  />
                </td>
              </tr>
              <tr>
                <td className={style["formLabel"]}>
                  <label>UserName</label>
                </td>
                <td>
                  <input
                    className={style["formInput"]}
                    type="text"
                    required
                    onChange={onChangeHandele}
                    id="username"
                    value={details.username}
                    placeholder="UserName"
                  />
                </td>
              </tr>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Phone No</label>
                </td>
                <td>
                  <input
                    className={style["formInput"]}
                    type="number"
                    required
                    onChange={onChangeHandele}
                    id="phoneno"
                    value={details.phoneno}
                    placeholder="Phone No"
                  />
                </td>
              </tr>
              <tr>
                <td className={style["formLabel"]}>
                  <label>Email Id</label>
                </td>
                <td>
                  <input
                    className={style["formInput"]}
                    type="text"
                    required
                    onChange={onChangeHandele}
                    id="emailid"
                    value={details.emailid}
                    placeholder="Email Id"
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
                    required
                    onChange={onChangeHandele}
                    id="password"
                    value={details.password}
                    placeholder="Password"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* <button type="button"   className={style["formbuttonn"]}>SignUp</button> */}

          {isFormValid ? (
            <Link
              to="/login"
              onClick={DetailSubmit}
              className={style["formbuttonn"]}
            >
              SignUp
            </Link>
          ) : (
            <button className={style["formbuttonn"]} disabled>
              SignUp
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default SignUp;
