import React from 'react';
import {ListGroup} from "react-bootstrap";

function TedaviListesi(props) {
  return (
    <ListGroup className={"pb-3 text-center"}>
      <ListGroup.Item variant={"primary"}>{props.name}</ListGroup.Item>
      {props.children?.map((child, i) => <ListGroup.Item key={i}>{child}</ListGroup.Item>)}
    </ListGroup>
  );
}

export default TedaviListesi;