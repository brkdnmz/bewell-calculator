import React from 'react';

type PriceTagProps = {
  price: number;
};

function PriceTag({price}: PriceTagProps) {
  return (
    <p className={"p-0 m-0 text-secondary fst-italic fw-bold"}>
        {price}₤
    </p>
  );
}

export default PriceTag;