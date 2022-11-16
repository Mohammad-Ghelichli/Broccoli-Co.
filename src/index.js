import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./Context/ThemeProvider";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
