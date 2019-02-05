import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";
import Footer from "./components/footer";
import Header from "./components/header";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<Main />, document.getElementById("root"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Footer />, document.getElementById("footer"));



