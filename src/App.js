import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Routes } from "./routes";
import { GlobalStyles } from "./styles/global";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    );
  }
}
