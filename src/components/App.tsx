import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Choices from "../types/choices";
import Home from "./Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "./Cart/Cart";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavBar from "./NavBar";
import Col from "react-bootstrap/Col";
import Logo from "./Logo";
import { AnimatePresence } from "framer-motion";
import AppContextProvider from "../context/AppContext";
import AnimatedOpacity from "./util/AnimatedOpacity";

function App() {
  const [choices, setChoices] = useState<Choices>({});
  const [lang, setLang] = useState<"en" | "tur">("tur");
  const [displayDirection, setDisplayDirection] = useState<
    "vertical" | "horizontal"
  >("vertical");

  const toggleDisplayDirection = () =>
    setDisplayDirection((prev) =>
      prev === "horizontal" ? "vertical" : "horizontal"
    );

  const location = useLocation();

  const context = {
    choices,
    setChoices,
    lang,
    setLang,
    displayDirection,
    toggleDisplayDirection,
  };

  return (
    <AppContextProvider value={context}>
      <Container fluid>
        <NavBar />
        <Row className="justify-content-center mb-3">
          <Col sm={10} xs={11}>
            <Logo />
            <AnimatePresence exitBeforeEnter>
              <AnimatedOpacity key={location.pathname}>
                <Routes location={location}>
                  <Route index element={<Home key={location.pathname} />} />
                  <Route
                    path="cart"
                    element={<Cart key={location.pathname} />}
                  />
                </Routes>
              </AnimatedOpacity>
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </AppContextProvider>
  );
}

export default App;
