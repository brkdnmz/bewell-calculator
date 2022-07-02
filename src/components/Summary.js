import React, {useContext} from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {AppContext} from "../App";
import PriceTag from "./PriceTag";

function Summary(props) {
  const {choices, sortedChoiceIds, tedaviById} = useContext(AppContext);

  let toplamFiyat = 0;
  for(const id of sortedChoiceIds){
    console.log(id, choices[id]);
    toplamFiyat += choices[id] * parseInt(tedaviById[id].fiyat);
  }

  return (
    <ListGroup>
      <ListGroup.Item variant={"success"} className={"text-center"}>Seçilen Tedaviler</ListGroup.Item>
      {Object.keys(choices).length === 0 &&
        <ListGroup.Item>Henüz bir seçim yapmadınız.</ListGroup.Item>
      }
      {sortedChoiceIds.map(id => (
        <ListGroup.Item key={id}>
          <Row>
            <Col xs={"9"}>
              <Row>
                <Col xs={"12"}>
                  {tedaviById[id].isim}
                </Col>
                <Col>
                  ({choices[id]} adet)
                </Col>
              </Row>
            </Col>
            <Col xs={"3"} className={"text-end"}>
              <PriceTag price={tedaviById[id].fiyat * choices[id]}/>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
      {Object.keys(choices).length > 0 &&
        <ListGroup.Item variant={"warning"}>
          <Row className={"justify-content-between"}>
            <Col xs>
              Toplam:
            </Col>
            <Col xs className={"text-end"}>
              <PriceTag price={toplamFiyat}/>
            </Col>
          </Row>
        </ListGroup.Item>
      }
    </ListGroup>
  );
}

export default Summary;