import React from "react";
import "./Form.css";
import { useEffect, useRef, useContext } from "react";
import { themeContext } from "../../Context/ThemeProvider";
import { useState } from "react";
import { validation } from "./Validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Form = () => {
  /////----state----/////
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    confirmEmail: "",
  });

  const [errors, setErrors] = useState({ fullName: "name is incuired" });
  const [touched, setTouched] = useState({});
  const [complet, setComplet] = useState(true);

  /////----handle errors and validation----/////
  const changHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const touchHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  useEffect(() => {
    setErrors(validation(data));
  }, [data]);
  useEffect(() => {
    if (touched.fullName) {
      toast.error(errors.fullName);
    }
    if (touched.email) {
      toast.error(errors.email);
    }
    if (touched.confirmEmail) {
      toast.error(errors.confirmEmail);
    }
  }, [touched]);

  useEffect(() => {
    if (Object.keys(errors).length) {
      setComplet(true);
    } else {
      setComplet(false);
    }
  }, [errors]);

  /////----submit form----/////
  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length) {
      setTouched({
        fullName: true,
        email: true,
        ConfirmEmail: true,
      });
    } else {
      setLoading(true);
      axios({
        method: "post",
        url: "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth",
        data: {
          name: `${data.fullName}`,
          email: `${data.email}`,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            toast.success("successful request");
            dispatch({ type: "SUCCESS" });
            setLoading(false);
          } else {
            toast.error("Fail request");
          }
        })
        .Catch((err) => toast.error(err));
    }
  };

  /////----theme context----/////
  const { state, dispatch } = useContext(themeContext);

  /////----input Focus----/////

  const nameInput = useRef(null);
  useEffect(() => {
    if (nameInput.current) {
      nameInput.current.focus();
    }
  }, [state.pressButton]);

  return (
    <div className="formContainer">
      <h3> Request an invite</h3>
      <form className="input_info" onSubmit={submitHandler}>
          <input
            type="text"
            name="fullName"
            value={data.fullName}
            onChange={changHandler}
            ref={nameInput}
            placeholder="Full Name"
            onFocus={touchHandler}
          />
          {errors.fullName ? (
            <span className="error">{errors.fullName}</span>
          ) : (
            <span className="succsess">Name is Valid</span>
          )}
      
        
          <input
            name="email"
            value={data.email}
            onChange={changHandler}
            type="email"
            placeholder="Email"
            onFocus={touchHandler}
          />
          {errors.email ? (
            <span className="error">{errors.email}</span>
          ) : (
            <span className="succsess">Email is Valid</span>
          )}
        
       
          <input
            type="email"
            name="confirmEmail"
            value={data.confirmEmail}
            onChange={changHandler}
            placeholder="Confirm Email"
            onFocus={touchHandler}
          />
          {errors.confirmEmail ? (
            <span className="error">{errors.confirmEmail}</span>
          ) : (
            <span className="succsess">Email confirmed</span>
          )}
      
      
         <button disabled={complet || loading}>
          {loading ? "Please Wait..." : "Send"}
        </button> 
        
        
      </form>
    </div>
  );
};

export default Form;
