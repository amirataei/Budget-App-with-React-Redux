import React from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

const Flex = styled.div`
  display: flex;
  width: 100%;
`;
const LI = styled.div`
  background-color: #4da84d;
  margin-top: 20px;
  width: 85%;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  overflow : hidden;
`;
const Deleteicon = styled.div`
  width: 15%;
  margin-top: 20px;
  margin-left: 3px;
  cursor: pointer;
`;
const IncomeName = styled.div``;
const IncomePrice = styled.div``;
function TransitionincomeList({ text, price, onClick }) {
  return (
    <>
      <Flex>
        <LI>
          <IncomeName>{text}</IncomeName>
          <IncomePrice>{price}</IncomePrice>
        </LI>
        <Deleteicon>
          <DeleteIcon onClick={onClick} />
        </Deleteicon>
      </Flex>
    </>
  );
}

export default TransitionincomeList;
