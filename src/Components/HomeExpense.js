import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import TransitionexpenseList from "../Components/TransitionexpenseList";
import { connect, useDispatch } from "react-redux";
import { AddTodo2, DeleteExpense } from "../action";
import { makeStyles } from "@material-ui/core/styles";
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  text-align: center;
  background: #ff1a1a;
  margin-top: 20px;
  border: none;
  color: #fff;
  outline: none;
  border-radius: 7px;
  width: 70px;
  height: 27px;
`;
const Transition = styled.span`
  letter-spacing: 2px;
  text-align: initial;
  margin-top: 35px;
  color: #fff;
`;
const useStyles = makeStyles({
  label: { borderBottom: "1px solid #fff", color: "red" },
  input: {
    color: "white",
  }, // a nested style rule
});

function HomeExpense({ Expenses }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const [inputValue2, setInputValue2] = useState("");
  const onChangeHandler2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "" && inputValue2 !=="" && parseFloat(inputValue2) > 0) {
      dispatch(AddTodo2(inputValue, inputValue2));
    }
    setInputValue("")
    setInputValue2("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Column>
          <TextField
            className={classes.label}
            onChange={onChangeHandler}
            value={inputValue}
            id="standard-basic"
            label="AddIncome.."
            InputProps={{
              className: classes.input,
            }}
          />
          <TextField
            className={classes.label}
            onChange={onChangeHandler2}
            value={inputValue2}
            id="standard-basic"
            label="price"
            type="number"
            InputProps={{
              className: classes.input,
            }}
           
          />
          <Button>Submit</Button>
          <Transition>Transition History</Transition>
          {Expenses.map((Expense) => {
            return (
              <TransitionexpenseList
                onClick={() => dispatch(DeleteExpense(Expense.id))}
                key={Expense.id}
                {...Expense}
              />
            );
          })}
        </Column>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Expenses: state.Expense,
  };
};
export default connect(mapStateToProps)(HomeExpense);
