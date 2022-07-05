import React, { useContext } from "react";
import icon from "../bewell.png";
import Row from "react-bootstrap/Row";
import { AppContext } from "../App";

function Logo() {
  const { lang } = useContext(AppContext);

  return (
    <Row className={"d-flex justify-content-center"}>
      <img src={icon} alt={"BEWELL Logo"} style={{ width: "30%" }} />
      <h4 className={"m-0 text-center fst-italic fw-bold py-2"}>
        <span style={{ color: "#ea1f25", padding: 0 }}>BE</span>
        <span style={{ color: "#6b6b6b", padding: 0 }}>WELL</span>
        {lang === "tur" ? " Tutar Hesaplama Aracı" : " Fee Calculation Tool"}
      </h4>
    </Row>
  );
}

export default Logo;
