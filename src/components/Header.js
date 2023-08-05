import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Container,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import { CryptoState } from "../context/CryptoContext";
import { styled } from "@mui/material/styles";


const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Title = styled("Typography")(() => ({
  flex: 1,
  color: "gold",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  cursor: "pointer",
}));

const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Title variant="h6" onClick={handleNavigate}>
              Crypto Tracker
            </Title>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
                color: "blue",
                backgroundColor: "white",
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
