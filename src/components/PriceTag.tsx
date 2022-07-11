import React from "react";

type PriceTagProps = {
  price: number;
};

function PriceTag({ price }: PriceTagProps) {
  return (
    <span className="d-inline text-secondary fst-italic fw-bold">{price}₤</span>
  );
}

export default PriceTag;
