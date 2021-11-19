import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Routes } from "./routes";
export function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
