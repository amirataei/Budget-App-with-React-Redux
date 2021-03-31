import React from "react";
import styled from "styled-components";

const ExpensePrice = styled.div`
  color: #fff;
`;
function TransitionE({ price }) {
  return (
    <>
      <ExpensePrice>{price}$</ExpensePrice>
    </>
  );
}

export default TransitionE;
