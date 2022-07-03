import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function InfoBox(props) {
  return (
    <Modal
      scrollable
      backdrop={"static"}
      show={props.show}
      onHide={props.onHide}
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
        {props.info}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Tamam</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoBox;