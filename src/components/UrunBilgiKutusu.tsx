import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Urun } from "../@types/urun";
import { AppContext } from "./App";

type UrunBilgiKutusuProps = {
  urun: Urun;
};

function UrunBilgiKutusu({ urun }: UrunBilgiKutusuProps) {
  const { lang } = useContext(AppContext);

  const [bilgiKutusuShow, setBilgiKutusuShow] = React.useState(false);

  const tiklamaYazisi =
    lang === "tur" || !urun.tiklamaYazisiEn
      ? urun.tiklamaYazisi
      : urun.tiklamaYazisiEn;
  const bilgi = lang === "tur" || !urun.bilgiEn ? urun.bilgi : urun.bilgiEn;
  return (
    <>
      {bilgi && (
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
                  setBilgiKutusuShow(true);
                }}
              >
                {tiklamaYazisi}
              </span>
            </Col>
          </Row>
          <Modal
            scrollable
            // backdrop="static"
            show={bilgiKutusuShow}
            onHide={() => setBilgiKutusuShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {lang === "tur" ? "Bilgilendirme" : "Information"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ whiteSpace: "pre-wrap" }}>{bilgi}</Modal.Body>
            <Modal.Footer>
              <Button
                variant="danger"
                onClick={() => setBilgiKutusuShow(false)}
              >
                {lang === "tur" ? "Anladım" : "Got It"}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}

export default UrunBilgiKutusu;
