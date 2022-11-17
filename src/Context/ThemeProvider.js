import React, { createContext, useReducer } from "react";

const initial = {
  view:'home'
};
const themeReducer = (state = initial, action) => {
  switch (action.type) {
    case "HOME":
      return { view:'home'};
    case "REQUEST_FORM":
      return {   view:'REQUEST_FORM'
    };
    case "SUCCESS":
      return{view:'SUCCESS'}
    default:
      return { state };
  }
};
export const themeContext = createContext();
const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initial);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
