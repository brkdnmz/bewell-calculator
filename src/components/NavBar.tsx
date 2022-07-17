import React, { useContext } from "react";
import logo from "../img/bewell.png";
import turFlag from "../img/tr.svg";
import enFlag from "../img/gb.svg";
import { AppContext } from "../context";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CgArrowsVAlt } from "react-icons/cg";
import {
  AnimatedOpacity,
  CenteringCol,
  CircledNumber,
  ClickableIcon,
} from "./util";
import { Link, useLocation } from "react-router-dom";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const { setLang, displayDirection, toggleDisplayDirection, choices } =
    useContext(AppContext);
  const location = useLocation();

  return (
    <Row
      className="justify-content-center position-sticky top-0 pt-1 px-1"
      style={{
        zIndex: "1000",
        background:
          "linear-gradient(to top, rgba(107,107,107,0) 0%, rgba(107,107,107,0.4) 50%, rgba(234,31,37,0.4) 100%)",
        backdropFilter: "blur(0.4px)",
      }}
    >
      <Col sm={10} xs={11}>
        <Row className="gy-2">
          <CenteringCol xs="auto">
            <ClickableIcon onClick={() => window.scroll(0, 0)}>
              <img src={logo} alt="BEWELL Logo" style={{ width: "50px" }} />
            </ClickableIcon>
          </CenteringCol>

          <CenteringCol>
            <ClickableIcon>
              <AnimatePresence exitBeforeEnter>
                <AnimatedOpacity key={location.pathname}>
                  {location.pathname !== "/cart" && (
                    <Link to="cart">
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
                  {location.pathname === "/cart" && (
                    <Link to="/">
                      <IoHomeOutline color="#6B6B6B" size={27} />
                    </Link>
                  )}
                </AnimatedOpacity>
              </AnimatePresence>
            </ClickableIcon>
          </CenteringCol>

          <CenteringCol>
            <AnimatePresence exitBeforeEnter>
              <AnimatedOpacity key={location.pathname}>
                {location.pathname === "/" && (
                  <motion.div
                    className="d-flex"
                    initial={{
                      rotate:
                        (displayDirection === "horizontal" ? "90" : "0") +
                        "deg",
                    }}
                    animate={{
                      rotate:
                        (displayDirection === "horizontal" ? "90" : "0") +
                        "deg",
                    }}
                  >
                    <ClickableIcon onClick={() => toggleDisplayDirection()}>
                      <CgArrowsVAlt color="#6B6B6B" size={30} />
                    </ClickableIcon>
                  </motion.div>
                )}
              </AnimatedOpacity>
            </AnimatePresence>
          </CenteringCol>

          <CenteringCol xs="auto">
            <div className="d-flex border-1 border-end border-secondary pe-1">
              <ClickableIcon
                onClick={() => setLang("tur")}
                style={{
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <img src={turFlag} alt="tur" style={{ width: "40px" }} />
              </ClickableIcon>
            </div>
            <div className="d-flex ps-1">
              <ClickableIcon
                onClick={() => setLang("en")}
                style={{
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <img src={enFlag} alt="en" style={{ width: "40px" }} />
              </ClickableIcon>
            </div>
          </CenteringCol>
        </Row>
      </Col>
    </Row>
  );
}

export default NavBar;
