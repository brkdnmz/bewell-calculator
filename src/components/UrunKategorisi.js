import React from "react";
import { ListGroup } from "react-bootstrap";

function UrunKategorisi(props) {
  return (
    <ListGroup className={"pb-3 text-center"}>
      <ListGroup.Item
        className={"fst-italic"}
        style={{background: "rgb(234 31 37)", color: "white"}}
      >
        <b>{props.name}</b>
      </ListGroup.Item>
      {props.children?.map((child, i) => (
        <ListGroup.Item key={i}>{child}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UrunKategorisi;
