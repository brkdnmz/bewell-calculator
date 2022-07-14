import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import _itemData from "../item-data/itemData.json";
import AppContextType from "../@types/appContext";
import { ItemData, ItemType } from "../@types/item";
import Choices from "../@types/choices";
import Home from "./Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "./Cart/Cart";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavBar from "./NavBar";
import Col from "react-bootstrap/Col";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

const itemData: ItemData = _itemData;

const itemById: { [key: number]: ItemType } = {};

for (const category in itemData) {
  const curItems = itemData[category].items;
  for (const itemKey in curItems) {
    const item = curItems[itemKey];
    itemById[item.id] = item;
  }
}

export const AppContext = createContext<AppContextType>({
  itemData: itemData,
  itemById: {},
  choices: {},
  setChoices: null,
  lang: "tur",
  setLang: null,
  displayDirection: "vertical",
  toggleDisplayDirection: null,
});

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
    itemData,
    itemById,
    choices,
    setChoices,
    lang,
    setLang,
    displayDirection,
    toggleDisplayDirection,
  };

  return (
    <AppContext.Provider value={context}>
      <Container fluid>
        <NavBar />
        <Row className="justify-content-center mb-3">
          <Col sm={10} xs={11}>
            <Logo />
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.25,
                }}
              >
                <Routes location={location}>
                  <Route index element={<Home key={location.pathname} />} />
                  <Route
                    path="cart"
                    element={<Cart key={location.pathname} />}
                  />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
