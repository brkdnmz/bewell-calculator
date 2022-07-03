import React from "react";
import { ListGroup } from "react-bootstrap";

function UrunKategorisi(props) {
  return (
    <ListGroup className={"pb-3 text-center"}>
      <ListGroup.Item className={"bg-danger text-light"}>
        <b>{props.name}</b>
      </ListGroup.Item>
      {props.children?.map((child, i) => (
        <ListGroup.Item key={i}>{child}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UrunKategorisi;
