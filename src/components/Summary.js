import React, {useContext, useEffect} from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import { AppContext } from "../App";
import PriceTag from "./PriceTag";

function Summary(props) {
  const { choices, urunById } = useContext(AppContext);

  const sortedChoiceIds = Object.keys(choices);
  const fiyat = id => urunById[id].fiyat * choices[id];
  sortedChoiceIds.sort((a, b) => fiyat(a) - fiyat((b)));

  let toplamFiyat = 0;
  for (const id of sortedChoiceIds) {
    toplamFiyat += choices[id] * parseInt(urunById[id].fiyat);
  }

  return (
    <ListGroup style={{minHeight: "200px"}}>
      <ListGroup.Item variant={"secondary"} className={"text-center"}>
        <b>Seçilen Ürünler</b>
      </ListGroup.Item>
      {Object.keys(choices).length === 0 && (
        <ListGroup.Item>Henüz bir seçim yapmadınız.</ListGroup.Item>
      )}
      {sortedChoiceIds.map(id => (
        <ListGroup.Item key={id}>
          <Row>
            <Col xs={"9"}>
              <Row>
                <Col xs={"12"}>{urunById[id].isim}</Col>
                <Col>({choices[id]} adet)</Col>
              </Row>
            </Col>
            <Col xs={"3"} className={"text-end"}>
              <PriceTag price={urunById[id].fiyat * choices[id]} />
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
      {Object.keys(choices).length > 0 && (
        <ListGroup.Item variant={"warning"}>
          <Row className={"justify-content-between"}>
            <Col xs>Toplam:</Col>
            <Col xs className={"text-end"}>
              <PriceTag price={toplamFiyat} />
            </Col>
          </Row>
        </ListGroup.Item>
      )}
    </ListGroup>
  );
}

export default Summary;
