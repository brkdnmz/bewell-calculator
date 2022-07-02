import './App.css';
import Item from "./components/Item";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import TedaviListesi from "./components/TedaviListesi";
import {createContext, useEffect, useState} from "react";
import tedaviler from "./tedaviListesi.json";

export const AppContext = createContext(null);

function App() {
  const [choices, setChoices] = useState({});
  const [summary, setSummary] = useState([]);
  useEffect(() => {
    const choosedTedaviler = Object.keys(choices);
  }, [choices]);

  const context = {
    tedaviler,
    setChoices,
  }

  return (
    <AppContext.Provider value={context}>
      {/*{Object.keys(choices).map((choice, _) => {*/}
      {/*  <span>{choice} {choices[choice]}</span>*/}
      {/*})}*/}
      <Container className={"pt-3"}>
        <Row className={"justify-content-center"}>
          <Col className={"col-md-6"}>
            <TedaviListesi name={"İmplantlar"}>
              {Object.keys(tedaviler.implantlar).map((tedavi, _) => (
                <Item key={tedavi} tedavi={tedaviler.implantlar[tedavi]}/>
              ))}
            </TedaviListesi>
            <TedaviListesi name={"Kaplamalar"}>
              {Object.keys(tedaviler.kaplamalar).map((tedavi, _) => (
                <Item key={tedavi} tedavi={tedaviler.kaplamalar[tedavi]}/>
              ))}
            </TedaviListesi>
            <TedaviListesi name={"Diş Tedavileri"}>
              {Object.keys(tedaviler.dis).map((tedavi, _) => (
                <Item key={tedavi} tedavi={tedaviler.dis[tedavi]}/>
              ))}
            </TedaviListesi>
            <TedaviListesi name={"İmplant Paketleri"}>
              {Object.keys(tedaviler.implantPaketi).map((tedavi, _) => (
                <Item key={tedavi} tedavi={tedaviler.implantPaketi[tedavi]}/>
              ))}
            </TedaviListesi>
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
