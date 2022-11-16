import React from "react";
import { useContext } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { themeContext } from "./Context/ThemeProvider";

const App = () => {
  const { state, dispatch } = useContext(themeContext);
  const homeHandler = (e) => {
    dispatch({ type: "HOME" });
    e.stopPropagation()
  };
  return (
    <div className="homePage" >
      <div
        onClick={homeHandler}
        style={{ opacity: state.view !== "home" ? "0.8" : "1" }}
      >
        <Header />
      </div>
      <Content />
      <div
       onClick={homeHandler}
        style={{ opacity: state.view !== "home" ? "0.8" : "1" }}
      >
        <Footer />
      </div>
    </div>
  );
};
export default App;
