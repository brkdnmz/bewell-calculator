import "./App.css";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UrunKategorisi from "./components/UrunKategorisi";
import { createContext, useEffect, useState } from "react";
import urunListesi from "./urunListesi.json";
import Summary from "./components/Summary";
import icon from "./bewell.png";

const urunById = {};
for (const urunTipi in urunListesi) {
  const curUrunler = urunListesi[urunTipi];
  for (const urunKey in curUrunler) {
    const urun = curUrunler[urunKey];
    urunById[urun.id] = urun;
  }
}

export const AppContext = createContext(null);

function App() {
  const [choices, setChoices] = useState({});
  const [sortedChoiceIds, setSortedChoiceIds] = useState([]);

  useEffect(() => {
    const choice_ids = Object.keys(choices);
    choice_ids.sort();
    setSortedChoiceIds(() => choice_ids);
  }, [choices]);

  const context = {
    choices,
    setChoices,
    sortedChoiceIds,
    tedaviById: urunById,
  };

  return (
    <AppContext.Provider value={context}>
      <Container className={"p-3"}>
        <Row className={"justify-content-center"}>
          <Col className={"col-md-8"}>
            <Row className={"justify-content-center pb-2"}>
              <img src={icon} alt={"BEWELL Logo"} style={{width: "30%"}} />
              <Row
                className={"d-inline text-center"}
                style={{fontStyle: "italic", fontWeight: "bold"}}
              >
                <span style={{color: "#ea1f25", padding: 0}}>BE</span><span style={{color: "#6b6b6b", padding: 0}}>WELL</span> Tutar Hesaplama Aracı
              </Row>
            </Row>
            <UrunKategorisi name={"Kampanyalar"}>
              {(() => {
                const urunler = urunListesi.kampanya;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => urunById[a].fiyat < urunById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={urunById[id]} />)
                }
                return elems;
              })()}
            </UrunKategorisi>
            <UrunKategorisi name={"Otel / Transfer / Rehberlik"}>
              {(() => {
                const urunler = urunListesi.otel;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => urunById[a].fiyat - urunById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={urunById[id]} />)
                }
                return elems;
              })()}
            </UrunKategorisi>
            <UrunKategorisi name={"İmplantlar"}>
              {(() => {
                const urunler = urunListesi.implantlar;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => urunById[a].fiyat - urunById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={urunById[id]} />)
                }
                return elems;
              })()}
            </UrunKategorisi>
            <UrunKategorisi name={"Kaplamalar"}>
              {(() => {
                const urunler = urunListesi.kaplamalar;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => urunById[a].fiyat - urunById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={urunById[id]} />)
                }
                return elems;
              })()}
            </UrunKategorisi>
            <UrunKategorisi name={"Diş Tedavileri"}>
              {(() => {
                const urunler = urunListesi.dis;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => urunById[a].fiyat - urunById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={urunById[id]} />)
                }
                return elems;
              })()}
            </UrunKategorisi>
            <UrunKategorisi name={"İmplant Paketleri"}>
              {(() => {
                const urunler = urunListesi.implantPaketi;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => urunById[a].fiyat - urunById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={urunById[id]} />)
                }
                return elems;
              })()}
            </UrunKategorisi>
            <UrunKategorisi name={"Protezler"}>
              {(() => {
                const urunler = urunListesi.protezler;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => urunById[a].fiyat - urunById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={urunById[id]} />)
                }
                return elems;
              })()}
            </UrunKategorisi>
            <Summary />
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
