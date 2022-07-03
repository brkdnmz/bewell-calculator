import "./App.css";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UrunKategorisi from "./components/UrunKategorisi";
import { createContext, useState } from "react";
import urunListesi from "./urunListesi.json";
import Summary from "./components/Summary";
import icon from "./bewell.png";

const urunById = {};
for (const kategori in urunListesi) {
  const curUrunler = urunListesi[kategori]["urunler"];
  for (const urunKey in curUrunler) {
    const urun = curUrunler[urunKey];
    urunById[urun.id] = urun;
  }
}

export const AppContext = createContext(null);

function App() {
  const [choices, setChoices] = useState({});

  const context = {
    choices,
    setChoices,
    urunById,
  };

  return (
    <AppContext.Provider value={context}>
      <Container className={"p-3"}>
        <Row className={"justify-content-center"}>
          <Col lg={8}>
            <Container>
            <Row className={"justify-content-center pb-2"}>
              <img src={icon} alt={"BEWELL Logo"} style={{width: "30%"}} />
                <h4
                  className={"m-0 text-center fst-italic fw-bold"}
                >
                  <span style={{color: "#ea1f25", padding: 0}}>BE</span><span style={{color: "#6b6b6b", padding: 0}}>WELL</span> Tutar Hesaplama Aracı
                </h4>
            </Row>
            </Container>
            {Object.keys(urunListesi).map(kategori => (
              <UrunKategorisi name={urunListesi[kategori]["baslik"]} key={kategori}>
                {(() => {
                  const urunler = urunListesi[kategori]["urunler"];
                  const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                  urunlerId.sort((a, b) => urunById[a]["fiyat"] - urunById[b]["fiyat"]);
                  const elems = [];
                  for(const id of urunlerId){
                    elems.push(<Item key={id} urun={urunById[id]} />)
                  }
                  return elems;
                })()}
              </UrunKategorisi>
            ))}
            <Summary />
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
