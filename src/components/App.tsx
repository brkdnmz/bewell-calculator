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
import KategoriSlider from "./KategoriSlider";

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

  const getSortedKategori = (kategori: string): Urun[] => {
    const urunler = urunListesi[kategori].urunler;
    const urunlerId = Object.keys(urunler).map((urun) => urunler[urun].id);
    urunlerId.sort((a, b) => urunById[a].fiyat - urunById[b].fiyat);
    const sortedKategori: Urun[] = [];
    urunlerId.forEach((id) => {
      sortedKategori.push(urunById[id]);
    });
    return sortedKategori;
  };

  const prepareKategoriElems = (): JSX.Element[] => {
    return Object.keys(urunListesi).map((kategori, i) => (
      <UrunKategorisi key={i} kategori={urunListesi[kategori]}>
        {getSortedKategori(kategori).map((urun) => (
          <Item key={urun.id} urun={urun} />
        ))}
      </UrunKategorisi>
    ));
  };

  return (
    <AppContext.Provider value={context}>
      <Container fluid>
        <Row className="justify-content-center mb-3">
          <NavBar />
          <Col sm={10} xs={11}>
            <Logo />
            <Row className="gy-3">
              <Col xs={12}>
                <KategoriSlider kategoriElems={prepareKategoriElems()} />
              </Col>
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
