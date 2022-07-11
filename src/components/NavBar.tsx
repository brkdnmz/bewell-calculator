import React, { useContext } from "react";
import icon from "../img/bewell.png";
import turFlag from "../img/tr.svg";
import enFlag from "../img/gb.svg";
import Button from "react-bootstrap/Button";
import { AppContext } from "./App";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CgArrowsHAlt, CgArrowsVAlt } from "react-icons/cg";
import ClickableIcon from "./ClickableIcon";
import CenteringCol from "./CenteringCol";
import { Link, useLocation } from "react-router-dom";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import CircledNumber from "./CircledNumber";

function NavBar() {
  const { setLang, displayDirection, setDisplayDirection, choices } =
    useContext(AppContext);
  const location = useLocation();
  return (
    <Row
      className="justify-content-center"
      style={{
        top: 0,
        position: "sticky",
        zIndex: "1030",
        background:
          "linear-gradient(0deg, rgba(100,100,100,0) 0%, rgba(100,100,100,0.8) 100%)",
      }}
    >
      <Col sm={10} xs={11}>
        <Row>
          <CenteringCol xs="auto">
            <Button variant="link" onClick={() => window.scroll(0, 0)}>
              <img src={icon} alt="BEWELL Logo" style={{ width: "50px" }} />
            </Button>
          </CenteringCol>

          <CenteringCol>
            <ClickableIcon>
              {location.pathname !== "/sepet" && (
                <Link to="sepet">
                  <div className="position-relative">
                    {Object.keys(choices).length > 0 && (
                      <CircledNumber
                        num={Object.keys(choices).length}
                        size={9}
                        className="position-absolute top-0 end-0 fw-bold"
                      />
                    )}
                    <IoCartOutline color="#6B6B6B" size={30} />
                  </div>
                </Link>
              )}
              {location.pathname === "/sepet" && (
                <Link to="/">
                  <IoHomeOutline color="#6B6B6B" size={27} />
                </Link>
              )}
            </ClickableIcon>
          </CenteringCol>

          <CenteringCol>
            {location.pathname === "/" && (
              <ClickableIcon>
                {displayDirection === "horizontal" ? (
                  <CgArrowsHAlt
                    color="#6B6B6B"
                    size={30}
                    onClick={() => setDisplayDirection("vertical")}
                  />
                ) : (
                  <CgArrowsVAlt
                    color="#6B6B6B"
                    size={30}
                    onClick={() => setDisplayDirection("horizontal")}
                  />
                )}
              </ClickableIcon>
            )}
          </CenteringCol>

          <CenteringCol xs="auto">
            <div className="d-inline" style={{ userSelect: "none" }}>
              <Button
                variant="link"
                className="p-0"
                onClick={() => setLang("tur")}
              >
                <img src={turFlag} alt="tur" style={{ width: "40px" }} />
              </Button>
              &nbsp;|&nbsp;
              <Button
                variant="link"
                className="p-0"
                onClick={() => setLang("en")}
              >
                <img src={enFlag} alt="en" style={{ width: "40px" }} />
              </Button>
            </div>
          </CenteringCol>
        </Row>
      </Col>
    </Row>
  );
}

export default NavBar;
