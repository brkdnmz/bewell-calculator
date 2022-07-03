import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function InfoBox(props) {
  const [infoBoxShow, setInfoBoxShow] = React.useState(false);
  return (
    <>
      {props.bilgi &&
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
                {props.tiklamaYazisi}
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
              {props.bilgi}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setInfoBoxShow(false)}>Tamam</Button>
            </Modal.Footer>
          </Modal>
        </>
      }
    </>

  );
}

export default InfoBox;