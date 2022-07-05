import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Urun } from "../@types/urun";
import { AppContext } from "../App";

type InfoBoxProps = {
  urun: Urun;
};

function InfoBox({ urun }: InfoBoxProps) {
  const { lang } = useContext(AppContext);

  const [infoBoxShow, setInfoBoxShow] = React.useState(false);

  const tiklamaYazisi =
    lang === "tur" || !urun.tiklamaYazisiEn
      ? urun.tiklamaYazisi
      : urun.tiklamaYazisiEn;
  const bilgi = lang === "tur" || !urun.bilgiEn ? urun.bilgi : urun.bilgiEn;
  return (
    <>
      {bilgi && (
        <>
          <Row className={"text-danger lh-1"}>
            <Col>
              <span
                className={"d-inline fst-italic fw-bold"}
                style={{
                  cursor: "pointer",
                  fontSize: ".75em",
                }}
                onClick={() => {
                  setInfoBoxShow(true);
                }}
              >
                {tiklamaYazisi}
              </span>
            </Col>
          </Row>
          <Modal
            scrollable
            // backdrop={"static"}
            show={infoBoxShow}
            onHide={() => setInfoBoxShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Bilgilendirme
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ whiteSpace: "pre-wrap" }}>{bilgi}</Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setInfoBoxShow(false)}>Anladım</Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}

export default InfoBox;
