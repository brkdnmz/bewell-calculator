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
      const urun = props.urun?.id;
      const newCount = parseInt(e.target.value);
      const newChoices = {
        ...prevChoices,
        [urun]: newCount,
      };
      if (newCount === 0) {
        delete newChoices[urun];
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
          >
            <Container className={"p-0"}>
              <Row>{props.urun?.isim || "Placeholder"}</Row>
              <Row>
                <PriceTag price={props.urun?.fiyat} />
              </Row>
              {props.urun.bilgi &&
                <Row className={"text-danger"}>
                  <i
                    className={"p-0"}
                    style={{cursor: "pointer", width: "auto"}}
                    onClick={() => {
                      if(!props.urun.bilgi)
                        return;
                      setInfoBoxShow(true);
                    }}
                  >
                    <small><b>
                      {props.urun.tiklamaYazisi}
                    </b></small>
                  </i>
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
              {[...Array(props.urun?.enFazla || 0).keys()].map((count) => (
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
        info={props.urun.bilgi}
      />
    </>
  );
}

export default Item;
