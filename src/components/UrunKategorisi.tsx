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
        style={{
          background:
            "linear-gradient(254deg, rgba(107,107,107,1) 20%, rgba(234,31,37,1) 100%)",
          color: "white",
        }}
      >
        <div className={"d-inline"}>
          {lang === "tur" ? kategori.baslik : kategori.baslikEn}
        </div>
      </ListGroup.Item>
      {React.Children.map(children, (child, i) => (
        <ListGroup.Item key={i}>{child}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UrunKategorisi;
