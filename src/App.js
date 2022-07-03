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
    console.log(choice_ids);
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
      {/*{Object.keys(choices).map((choice, _) => {*/}
      {/*  <span>{choice} {choices[choice]}</span>*/}
      {/*})}*/}
      <Container className={"p-3"}>
        <Row className={"justify-content-center"}>
          <Col className={"col-md-6"}>
            <Row className={"justify-content-center"}><img src={icon} style={{width: "30%"}} /></Row>
            <TedaviListesi name={"Kampanyalar"}>
              {Object.keys(tedaviler.kampanya).map((tedavi, _) => (
                <Item key={tedavi} tedavi={tedaviler.kampanya[tedavi]} />
              ))}
            </TedaviListesi>
            <TedaviListesi name={"Otel / Transfer / Rehberlik"}>
              {Object.keys(tedaviler.otel).map((tedavi, _) => (
                <Item key={tedavi} tedavi={tedaviler.otel[tedavi]} />
              ))}
            </TedaviListesi>
            <TedaviListesi name={"İmplantlar"}>
              {Object.keys(tedaviler.implantlar).map((tedavi, _) => (
                <Item key={tedavi} tedavi={tedaviler.implantlar[tedavi]} />
              ))}
            </TedaviListesi>
            <TedaviListesi name={"Kaplamalar"}>
              {Object.keys(tedaviler.kaplamalar).map((tedavi, _) => (
                <Item key={tedavi} tedavi={tedaviler.kaplamalar[tedavi]} />
              ))}
            </TedaviListesi>
            <TedaviListesi name={"Diş Tedavileri"}>
              {Object.keys(tedaviler.dis).map((tedavi, _) => (
                <Item key={tedavi} tedavi={tedaviler.dis[tedavi]} />
              ))}
            </TedaviListesi>
            <TedaviListesi name={"İmplant Paketleri"}>
              {Object.keys(tedaviler.implantPaketi).map((tedavi, _) => (
                <Item key={tedavi} tedavi={tedaviler.implantPaketi[tedavi]} />
              ))}
            </TedaviListesi>
            <Summary />
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
