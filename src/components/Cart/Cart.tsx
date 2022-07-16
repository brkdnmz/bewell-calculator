import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import { AppContext } from "../../context/AppContext";
import PriceTag from "../util/PriceTag";
import ItemTrashCan from "./ItemTrashCan";
import CenteringCol from "../util/CenteringCol";
import DataContext from "../../context/DataContext";

function Cart() {
  const { lang, choices } = useContext(AppContext);
  const { itemById } = useContext(DataContext);

  const sortedChoiceIds = Object.keys(choices);
  const priceOf = (id: string) => itemById[id].price * choices[id];
  sortedChoiceIds.sort((a, b) => priceOf(a) - priceOf(b));

  let totalPrice = 0;
  for (const id of sortedChoiceIds) {
    totalPrice += choices[id] * itemById[id].price;
  }

  return (
    <ListGroup style={{ minHeight: "200px" }}>
      <ListGroup.Item
        variant="secondary"
        className="text-center fst-italic fw-bold"
      >
        <Row>
          <Col>{lang === "tur" ? "Sepetim" : "My Cart"}</Col>
          {Object.keys(choices).length > 0 && (
            <CenteringCol xs="auto">
              <ItemTrashCan allItems color={"#93151a"} size={22} />
            </CenteringCol>
          )}
        </Row>
      </ListGroup.Item>

      {Object.keys(choices).length === 0 && (
        <ListGroup.Item className="fst-italic">
          {lang === "tur" ? "Sepetiniz boş." : "Your cart is empty."}
        </ListGroup.Item>
      )}

      {sortedChoiceIds.map((id) => (
        <ListGroup.Item key={id}>
          <Row>
            <Col>
              <Row className="fw-bold">
                <Col>
                  {lang === "tur" || !itemById[id].nameEn
                    ? itemById[id].name
                    : itemById[id].nameEn}
                </Col>
              </Row>
              <Row className="fst-italic">
                <Col>
                  ({lang === "tur" ? choices[id] + " adet" : "x" + choices[id]})
                </Col>
              </Row>
            </Col>
            <Col xs="auto" className="text-end">
              <Row>
                <Col>
                  <PriceTag price={priceOf(id)} />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-end">
                  <ItemTrashCan item={itemById[id]} />
                </Col>
              </Row>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}

      {Object.keys(choices).length > 0 && (
        <ListGroup.Item variant="warning">
          <Row>
            <Col className="text-end">
              <span className="d-inline fst-italic text-end pe-3">
                {lang === "tur" ? "Toplam:" : "Total:"}
              </span>
              <PriceTag price={totalPrice} />
            </Col>
          </Row>
        </ListGroup.Item>
      )}
    </ListGroup>
  );
}

export default Cart;
