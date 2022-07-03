import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AppContext } from "../App";
import PriceTag from "./PriceTag";
import InfoBox from "./InfoBox";

function Item(props) {
  const { setChoices } = useContext(AppContext);
  const [infoBoxShow, setInfoBoxShow] = React.useState(false);
  const onSelect = (e) => {
    setChoices((prevChoices) => {
      const tedavi = props.tedavi?.id;
      const newCount = parseInt(e.target.value);
      const newChoices = {
        ...prevChoices,
        [tedavi]: newCount,
      };
      if (newCount === 0) {
        delete newChoices[tedavi];
      }
      return newChoices;
    });
  };
  return (
    <>
      <Row
        className={"justify-content-center align-items-center"}
        style={{ minHeight: "50px" }}
      >
          <Col
            s={8}
            className={"text-start d-flex align-items-center ps-4"}
            onClick={() => {
              if(!props.tedavi.bilgi)
                return;
              setInfoBoxShow(true);
            }}
          >
            <Container className={"p-0"}>
              <Row>{props.tedavi?.isim || "Placeholder"}</Row>
              <Row>
                <PriceTag price={props.tedavi?.fiyat} />
              </Row>
              {props.tedavi.bilgi &&
                <Row className={"text-danger"}>
                  <i className={"p-0"} style={{cursor: "pointer"}}><small><b>
                    [ÖNEMLİ!] Mutlaka tıklayınız.
                  </b></small></i>
                </Row>
              }
            </Container>
          </Col>
          <Col s={"auto"} className={"col-auto d-flex align-items-center"}>
            <select
              className="form-select text-secondary"
              onChange={onSelect}
            >
              <option value={0}>Seçiniz (0)</option>
              {[...Array(props.tedavi?.enFazla || 0).keys()].map((count) => (
                <option key={count + 1} value={count + 1}>
                  {count + 1}
                </option>
              ))}
            </select>
          </Col>
      </Row>
      <InfoBox
        show={infoBoxShow}
        onHide={() => setInfoBoxShow(false)}
        info={props.tedavi.bilgi}
      />
    </>
  );
}

export default Item;
