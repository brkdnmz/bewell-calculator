import "../styles/App.css";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UrunKategorisi from "./UrunKategorisi";
import { createContext, useState } from "react";
import _urunListesi from "../urunListesi/urunListesi.json";
import Summary from "./Summary";
import AppContextType from "../@types/appContext";
import { Urun, UrunListesi } from "../@types/urun";
import Choices from "../@types/choices";
import NavBar from "./NavBar";
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

  const getSortedKategori = (kategori: string) => {
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
      <Container fluid>
        <Row className="justify-content-center mb-3">
          <NavBar />
          <Col sm={10} xs={11}>
            <Logo />
            <Row className="gy-3 justify-content-center">
              {Object.keys(urunListesi).map((kategori, i) => (
                <Col className="col-12" key={i}>
                  <UrunKategorisi kategori={urunListesi[kategori]}>
                    {getSortedKategori(kategori)}
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
