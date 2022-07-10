import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Kategori } from "../@types/urun";
import { AppContext } from "./App";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClickableIcon from "./ClickableIcon";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export type UrunKategorisiProps = {
  kategori: Kategori;
  children: React.ReactNode[];
  withLeftArrow?: boolean;
  withRightArrow?: boolean;
  onLeftArrowClick?: MouseEvent;
  onRightArrowClick?: MouseEvent;
};

function UrunKategorisi({
  kategori,
  children,
  withLeftArrow = false,
  withRightArrow = false,
  onLeftArrowClick = undefined,
  onRightArrowClick = undefined,
}: UrunKategorisiProps) {
  const { lang } = useContext(AppContext);
  return (
    <ListGroup>
      <ListGroup.Item
        className="fst-italic fw-bold"
        style={{
          background:
            "linear-gradient(254deg, rgba(107,107,107,1) 20%, rgba(234,31,37,1) 100%)",
          color: "white",
        }}
      >
        <Row>
          <Col
            xs="auto"
            className="d-flex align-items-center justify-content-center"
          >
            {withLeftArrow ? (
              <ClickableIcon onClick={onLeftArrowClick}>
                <HiOutlineArrowNarrowLeft size={25} />
              </ClickableIcon>
            ) : (
              <ClickableIcon disabled>
                <HiOutlineArrowNarrowLeft size={25} visibility="hidden" />
              </ClickableIcon>
            )}
          </Col>

          <Col className="d-flex justify-content-center">
            <div className="d-inline text-center">
              {lang === "tur" ? kategori.baslik : kategori.baslikEn}
            </div>
          </Col>

          <Col
            xs="auto"
            className="d-flex align-items-center justify-content-center"
          >
            {withRightArrow ? (
              <ClickableIcon onClick={onRightArrowClick}>
                <HiOutlineArrowNarrowRight size={25} />
              </ClickableIcon>
            ) : (
              <ClickableIcon disabled>
                <HiOutlineArrowNarrowRight size={25} visibility="hidden" />
              </ClickableIcon>
            )}
          </Col>
        </Row>
      </ListGroup.Item>
      {React.Children.map(children, (child, i) => (
        <ListGroup.Item key={i}>{child}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UrunKategorisi;
