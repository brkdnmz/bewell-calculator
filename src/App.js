import "./App.css";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import TedaviListesi from "./components/TedaviListesi";
import { createContext, useEffect, useState } from "react";
import tedaviler from "./tedaviListesi.json";
import Summary from "./components/Summary";
import icon from "./bewell.png";

const tedaviById = {};
for (const tedaviTipiKey in tedaviler) {
  const curTedaviler = tedaviler[tedaviTipiKey];
  for (const tedaviKey in curTedaviler) {
    const tedavi = curTedaviler[tedaviKey];
    tedaviById[tedavi.id] = tedavi;
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
    tedaviById,
  };

  return (
    <AppContext.Provider value={context}>
      <Container className={"p-3"}>
        <Row className={"justify-content-center"}>
          <Col className={"col-md-auto"}>
            <Row className={"justify-content-center"}>
              <img src={icon} alt={"BEWELL Logo"} style={{width: "30%"}} />
            </Row>
            <TedaviListesi name={"Kampanyalar"}>
              {(() => {
                const urunler = tedaviler.kampanya;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => tedaviById[a].fiyat < tedaviById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={tedaviById[id]} />)
                }
                return elems;
              })()}
            </TedaviListesi>
            <TedaviListesi name={"Otel / Transfer / Rehberlik"}>
              {(() => {
                const urunler = tedaviler.otel;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => tedaviById[a].fiyat - tedaviById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={tedaviById[id]} />)
                }
                return elems;
              })()}
            </TedaviListesi>
            <TedaviListesi name={"İmplantlar"}>
              {(() => {
                const urunler = tedaviler.implantlar;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => tedaviById[a].fiyat - tedaviById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={tedaviById[id]} />)
                }
                return elems;
              })()}
            </TedaviListesi>
            <TedaviListesi name={"Kaplamalar"}>
              {(() => {
                const urunler = tedaviler.kaplamalar;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => tedaviById[a].fiyat - tedaviById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={tedaviById[id]} />)
                }
                return elems;
              })()}
            </TedaviListesi>
            <TedaviListesi name={"Diş Tedavileri"}>
              {(() => {
                const urunler = tedaviler.dis;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => tedaviById[a].fiyat - tedaviById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={tedaviById[id]} />)
                }
                return elems;
              })()}
            </TedaviListesi>
            <TedaviListesi name={"İmplant Paketleri"}>
              {(() => {
                const urunler = tedaviler.implantPaketi;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => tedaviById[a].fiyat - tedaviById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={tedaviById[id]} />)
                }
                return elems;
              })()}
            </TedaviListesi>
            <TedaviListesi name={"Protezler"}>
              {(() => {
                const urunler = tedaviler.protezler;
                const urunlerId = Object.keys(urunler).map(urun => urunler[urun].id);
                urunlerId.sort((a, b) => tedaviById[a].fiyat - tedaviById[b].fiyat);
                const elems = [];
                for(const id of urunlerId){
                  elems.push(<Item key={id} tedavi={tedaviById[id]} />)
                }
                return elems;
              })()}
            </TedaviListesi>
            <Summary />
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
