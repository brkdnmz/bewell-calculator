import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import icon from "../bewell.png";
import turFlag from "../tr.svg";
import enFlag from "../gb.svg";
import Button from "react-bootstrap/Button";
import { AppContext } from "../App";

function NavBar() {
  const { setLang } = useContext(AppContext);
  return (
    <Navbar
      expand={"sm"}
      variant={"light"}
      fixed={"top"}
      style={{
        background:
          "linear-gradient(0deg, rgba(150,150,150,0.05) 0%, rgba(150,150,150,0.7) 100%)",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={icon} alt={"BEWELL Logo"} style={{ width: "10vw" }} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button
              variant={"link"}
              className={"p-0"}
              onClick={() => setLang("tur")}
            >
              <img src={turFlag} alt={"tur"} style={{ width: "30px" }} />
            </Button>
            &nbsp;|&nbsp;
            <Button
              variant={"link"}
              className={"p-0"}
              onClick={() => setLang("en")}
            >
              <img src={enFlag} alt={"en"} style={{ width: "30px" }} />
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
