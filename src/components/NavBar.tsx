import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import icon from "../bewell.png";
import turFlag from "../tr.svg";
import enFlag from "../gb.svg";
import Button from "react-bootstrap/Button";
import { AppContext } from "../App";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavBar() {
  const { setLang } = useContext(AppContext);
  return (
    <Row
      className={"justify-content-center"}
      style={{
        top: 0,
        position: "sticky",
        zIndex: "1030",
        background:
          "linear-gradient(0deg, rgba(100,100,100,0) 0%, rgba(100,100,100,0.8) 100%)",
      }}
    >
      <Col lg={8} className={"py-3"}>
        <Row>
          <Col className={"col-auto"}>
            <Button variant={"link"} onClick={() => window.scroll(0, 0)}>
              <img src={icon} alt={"BEWELL Logo"} style={{ width: "50px" }} />
            </Button>
          </Col>
          <Col className={"d-flex justify-content-end align-items-center"}>
            <Navbar.Text>
              <div className={"d-inline"} style={{ userSelect: "none" }}>
                <Button
                  variant={"link"}
                  className={"p-0"}
                  onClick={() => setLang("tur")}
                >
                  <img src={turFlag} alt={"tur"} style={{ width: "40px" }} />
                </Button>
                &nbsp;|&nbsp;
                <Button
                  variant={"link"}
                  className={"p-0"}
                  onClick={() => setLang("en")}
                >
                  <img src={enFlag} alt={"en"} style={{ width: "40px" }} />
                </Button>
              </div>
            </Navbar.Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default NavBar;
