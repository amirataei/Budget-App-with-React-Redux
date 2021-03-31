import React from "react";
import styled from "styled-components";


const IncomePrice = styled.div`
color: #fff;
`;
function TransitionI({ price}) {
  return (
    <>
      <IncomePrice>{price}$</IncomePrice>
    </>
  );
}

export default TransitionI;