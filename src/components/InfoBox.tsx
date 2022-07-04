import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

type InfoBoxProps = {
  tiklamaYazisi?: string;
  bilgi?: string;
};

function InfoBox({tiklamaYazisi, bilgi}: InfoBoxProps) {
  const [infoBoxShow, setInfoBoxShow] = React.useState(false);
  return (
    <>
      {bilgi &&
        <>
          <Row className={"text-danger"}>
            <i
              className={"p-0"}
              style={{cursor: "pointer", width: "auto"}}
              onClick={() => {
                setInfoBoxShow(true);
              }}
            >
              <small><b>
                {tiklamaYazisi}
              </b></small>
            </i>
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
            <Modal.Body style={{whiteSpace: "pre-wrap"}}>
              {bilgi}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setInfoBoxShow(false)}>
                Tamam
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      }
    </>

  );
}

export default InfoBox;