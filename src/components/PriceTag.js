import React from 'react';

function PriceTag(props) {
  return (
    <p className={"p-0 m-0 text-secondary fst-italic fw-bold"}>
        {props.price}₤
    </p>
  );
}

export default PriceTag;