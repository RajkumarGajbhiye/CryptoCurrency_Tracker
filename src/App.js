import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header";
import { styled } from "@mui/material/styles";

const Wrapper = styled("div")(() => ({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
}));

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" Component={Homepage} exact />
          <Route path="/coins/:id" Component={CoinPage} exact />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
