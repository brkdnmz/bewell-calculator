import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import _urunListesi from "../urunListesi/urunListesi.json";
import AppContextType from "../@types/appContext";
import { Urun, UrunListesi } from "../@types/urun";
import Choices from "../@types/choices";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Sepet from "./Sepet";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavBar from "./NavBar";
import Col from "react-bootstrap/Col";
import Logo from "./Logo";

const urunListesi: UrunListesi = _urunListesi;

const urunById: { [key: number]: Urun } = {};

for (const kategori in urunListesi) {
  const curUrunler = urunListesi[kategori].urunler;
  for (const urunKey in curUrunler) {
    const urun = curUrunler[urunKey];
    urunById[urun.id] = urun;
  }
}

export const AppContext = createContext<AppContextType>({
  choices: {},
  setChoices: null,
  urunById: {},
  lang: "tur",
  setLang: null,
  displayDirection: "vertical",
  setDisplayDirection: null,
});

function App() {
  const [choices, setChoices] = useState<Choices>({});
  const [lang, setLang] = useState<"en" | "tur">("tur");
  const [displayDirection, setDisplayDirection] = useState<
    "vertical" | "horizontal"
  >("vertical");

  const context = {
    choices,
    setChoices,
    urunById,
    lang,
    setLang,
    displayDirection,
    setDisplayDirection,
  };

  return (
    <AppContext.Provider value={context}>
      <Container fluid>
        <Row className="justify-content-center mb-3">
          <NavBar />
          <Col sm={10} xs={11}>
            <Logo />
            <Routes>
              <Route index element={<Home />} />
              <Route path="sepet" element={<Sepet />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
