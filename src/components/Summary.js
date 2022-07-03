import React, {useContext} from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import { AppContext } from "../App";
import PriceTag from "./PriceTag";
import Container from "react-bootstrap/Container";

function Summary() {
  const { choices, urunById } = useContext(AppContext);

  const sortedChoiceIds = Object.keys(choices);
  const fiyat = id => urunById[id]["fiyat"] * choices[id];
  sortedChoiceIds.sort((a, b) => fiyat(a) - fiyat((b)));

  let toplamFiyat = 0;
  for (const id of sortedChoiceIds) {
    toplamFiyat += choices[id] * parseInt(urunById[id]["fiyat"]);
  }

  return (
    <ListGroup style={{minHeight: "200px"}}>
      <ListGroup.Item variant={"secondary"} className={"text-center fst-italic fw-bold"}>
        Seçilen Ürünler
      </ListGroup.Item>
      {Object.keys(choices).length === 0 && (
        <ListGroup.Item className={"fst-italic"}>
          Henüz bir seçim yapmadınız.
        </ListGroup.Item>
      )}
      {sortedChoiceIds.map(id => (
        <ListGroup.Item key={id}>
          <Container className={"ps-2 pe-2"}>
            <Row>
              <Col s={"12"}>
                <Container className={"p-0"}>
                  <Row className={"fw-bold"}>
                    {urunById[id]["isim"] || "Placeholder"}
                  </Row>
                  <Row className={"fst-italic"}>
                    ({choices[id]} adet)
                  </Row>
                </Container>
              </Col>
              <Col xs={"3"} className={"text-end"}>
                <PriceTag price={urunById[id]["fiyat"] * choices[id]} />
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      ))}
      {Object.keys(choices).length > 0 && (
        <ListGroup.Item variant={"warning"}>
          <Container className={"ps-2 pe-2"}>
            <Row className={"justify-content-end"}>
              <Col className={"col-10 ps-0 fst-italic text-end"}>
                Toplam:
              </Col>
              <Col className={"col-auto text-end"}>
                <PriceTag price={toplamFiyat} />
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      )}
    </ListGroup>
  );
}

export default Summary;
