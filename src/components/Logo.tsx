import React, { useContext } from "react";
import logo from "../img/bewell.png";
import Row from "react-bootstrap/Row";
import { AppContext } from "../context";
import { GradientText } from "./util";

function Logo() {
  const { lang } = useContext(AppContext);

  return (
    <Row className="d-flex justify-content-center">
      <img src={logo} alt="BEWELL Logo" style={{ width: "150px" }} />
      <h4 className="m-0 text-center fst-italic fw-bold py-2">
        <GradientText text="BEWELL" />
        {lang === "tur" ? " Tutar Hesaplama Aracı" : " Fee Calculation Tool"}
      </h4>
    </Row>
  );
}

export default Logo;
