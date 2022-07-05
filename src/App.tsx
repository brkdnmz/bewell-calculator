import "./App.css";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UrunKategorisi from "./components/UrunKategorisi";
import { createContext, useState } from "react";
import _urunListesi from "./urunListesi.json";
import Summary from "./components/Summary";
import icon from "./bewell.png";
import AppContextType from "./@types/appContext";
import { Urun, UrunListesi } from "./@types/urun";
import Choices from "./@types/choices";
import NavBar from "./components/NavBar";

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
  setChoices: undefined,
  urunById: {},
  lang: "tur",
  setLang: undefined,
});

function App() {
  const [choices, setChoices] = useState<Choices>({});
  const [lang, setLang] = useState("tur");

  const context = {
    choices,
    setChoices,
    urunById,
    lang,
    setLang,
  };

  const sortedKategori = (kategori: string) => {
    const urunler = urunListesi[kategori].urunler;
    const urunlerId = Object.keys(urunler).map((urun) => urunler[urun].id);
    urunlerId.sort((a, b) => urunById[a].fiyat - urunById[b].fiyat);
    const elems = [];
    for (const id of urunlerId) {
      elems.push(<Item key={id} urun={urunById[id]} />);
    }
    return elems;
  };

  return (
    <AppContext.Provider value={context}>
      <Container className={"container-fluid"}>
        <Row className={"justify-content-center"}>
          <Col lg={8}>
            <NavBar />
            <Row className={"d-flex justify-content-center pb-3"}>
              <img src={icon} alt={"BEWELL Logo"} style={{ width: "30%" }} />
              <h4 className={"m-0 text-center fst-italic fw-bold"}>
                <span style={{ color: "#ea1f25", padding: 0 }}>BE</span>
                <span style={{ color: "#6b6b6b", padding: 0 }}>WELL</span>
                {lang === "tur"
                  ? " Tutar Hesaplama Aracı"
                  : " Fee Calculation Tool"}
              </h4>
            </Row>
            <Row className={"gy-3 justify-content-center"}>
              {Object.keys(urunListesi).map((kategori, i) => (
                <Col className={"col-12"} key={i}>
                  <UrunKategorisi kategori={urunListesi[kategori]}>
                    {sortedKategori(kategori)}
                  </UrunKategorisi>
                </Col>
              ))}
              <Col>
                <Summary />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
