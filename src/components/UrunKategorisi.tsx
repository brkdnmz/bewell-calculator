import React from "react";
import { ListGroup } from "react-bootstrap";

type UrunKategorisiProps = {
    name: string;
    children: React.ReactNode[];
};

function UrunKategorisi({name, children} : UrunKategorisiProps) {
  return (
    <ListGroup className={"pb-3 text-center"}>
      <ListGroup.Item
        className={"fst-italic fw-bold"}
        style={{background: "rgba(234, 31, 37)", color: "white"}}
      >
        {name}
      </ListGroup.Item>
      {React.Children.map(children, (child, i) => (
        <ListGroup.Item key={i}>{child}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UrunKategorisi;
