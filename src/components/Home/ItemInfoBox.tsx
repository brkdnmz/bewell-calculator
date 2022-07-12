import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ItemType } from "../../@types/item";
import { AppContext } from "../App";

interface ItemInfoBoxProps {
  item: ItemType;
}

function ItemInfoBox({ item }: ItemInfoBoxProps) {
  const { lang } = useContext(AppContext);
  const [showInfoBox, setShowInfoBox] = React.useState(false);

  const clickText =
    lang === "tur" || !item.clickTextEn ? item.clickText : item.clickTextEn;
  const info = lang === "tur" || !item.infoEn ? item.info : item.infoEn;

  return (
    <>
      {info && (
        <>
          <Row className="text-danger lh-1">
            <Col>
              <span
                className="d-inline fst-italic fw-bold"
                style={{
                  cursor: "pointer",
                  fontSize: ".75em",
                }}
                onClick={() => {
                  setShowInfoBox(true);
                }}
              >
                {clickText}
              </span>
            </Col>
          </Row>
          <Modal
            scrollable
            // backdrop="static"
            show={showInfoBox}
            onHide={() => setShowInfoBox(false)}
            size="lg"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {lang === "tur" ? "Bilgilendirme" : "Information"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ whiteSpace: "pre-wrap" }}>{info}</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setShowInfoBox(false)}>
                {lang === "tur" ? "Anladım" : "Got it"}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}

export default ItemInfoBox;
