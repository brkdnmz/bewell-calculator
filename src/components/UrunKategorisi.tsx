import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Kategori } from "../@types/urun";
import { AppContext } from "../App";

type UrunKategorisiProps = {
  kategori: Kategori;
  children: React.ReactNode[];
};

function UrunKategorisi({ kategori, children }: UrunKategorisiProps) {
  const { lang } = useContext(AppContext);
  return (
    <ListGroup className={"text-center"}>
      <ListGroup.Item
        className={"fst-italic fw-bold"}
        style={{ background: "rgba(234, 31, 37)", color: "white" }}
      >
        {lang === "tur" ? kategori.baslik : kategori.baslikEn}
      </ListGroup.Item>
      {React.Children.map(children, (child, i) => (
        <ListGroup.Item key={i}>{child}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UrunKategorisi;
