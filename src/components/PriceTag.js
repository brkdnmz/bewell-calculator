import React from 'react';

function PriceTag(props) {
  return (
    <i className={"p-0"}><small className={"p-0"} style={{userSelect: "none"}}>{props.price}₤</small></i>
  );
}

export default PriceTag;