import React from "react";
import { useContext } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { themeContext } from "./Context/ThemeProvider";

const App = () => {
  const { state, dispatch } = useContext(themeContext);

  return (
    <div className="homePage">
      <div style={{ opacity:state.pressButton && '0.6'}}>
        <Header />
      </div>
      <Content />
      <div style={{ opacity:state.pressButton && '0.6'}}>
      <Footer />
      </div>
    </div>
  );
};
export default App;
