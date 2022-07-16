import React, { useContext } from "react";
import icon from "../img/bewell.png";
import Row from "react-bootstrap/Row";
import { AppContext } from "../context/AppContext";
import GradientText from "./util/GradientText";

function Logo() {
  const { lang } = useContext(AppContext);

  return (
    <Row className="d-flex justify-content-center">
      <img src={icon} alt="BEWELL Logo" style={{ width: "150px" }} />
      <h4 className="m-0 text-center fst-italic fw-bold py-2">
        <GradientText text="BEWELL" />
        {lang === "tur" ? " Tutar Hesaplama Aracı" : " Fee Calculation Tool"}
      </h4>
    </Row>
  );
}

export default Logo;
