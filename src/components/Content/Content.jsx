import React from "react";
import "./Content.css";
import { themeContext } from "../../Context/ThemeProvider";
import { useContext } from "react";
import Form from "./Form";
import { ToastContainer} from "react-toastify";
import SuccessWindow from "./SuccessWindow";


const Content = () => {
  ////theme context////
  const { state, dispatch } = useContext(themeContext);

  const clickHandler = () => {
    dispatch({ type: "REQUEST_FORM" });
  };

  return (
    <div className="main">
      <ToastContainer
      className='notify'
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
        pauseOnFocusLoss
        theme="colored"
      />
      <p
        className="first_title"
        style={{ opacity: state.pressButton && "0.6" }}
      >
        A better way <br />
        to enjoy every day.
      </p>
      <p
        className="second_title"
        style={{ opacity: state.pressButton && "0.6" }}
      >
        Be the first to know when we launch
      </p>
      <button id="request_button" onClick={clickHandler}>
        Request an Invite
      </button>
      {state.view === "REQUEST_FORM" && <Form />}
      {state.view === "SUCCESS" && <SuccessWindow/>}
    </div>
  );
};

export default Content;
