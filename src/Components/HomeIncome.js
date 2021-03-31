import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TransitionincomeList from "../Components/TransitionincomeList";
import { AddTodo } from "../action";
import { DeleteTodos } from "../action";
import { connect, useDispatch } from "react-redux";
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  text-align: center;
  background: #4da84d;
  margin-top: 20px;
  color: #fff;
  border: none;
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
  label: { borderBottom: "1px solid #fff" },
  input: {
    color: "white",
  }, // a nested style rule // a nested style rule
});

function HomeIncome({ incomes }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const [inputValue2, setInputValue2] = useState("");
  const onChangeHandler2 = (event) => {
    setInputValue2(event.target.value);
  };
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputValue !== "" &&
      inputValue2 !== "" &&
      parseFloat(inputValue2) > 0
    ) {
      dispatch(AddTodo(inputValue, inputValue2));
    }
    setInputValue("");
    setInputValue2("");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Column>
        <TextField
          InputProps={{
            className: classes.input,
          }}
          className={classes.label}
          id="standard-basic"
          label="AddIncome.."
          onChange={onChangeHandler}
          value={inputValue}
        />
        <TextField
          InputProps={{
            className: classes.input,
          }}
          className={classes.label}
          onChange={onChangeHandler2}
          value={inputValue2}
          type="Number"
          id="standard-basic"
          label="price"
        />
        <Button>Submit</Button>
        <Transition>Transition History</Transition>
        {incomes.map((icome) => {
          return (
            <TransitionincomeList
              onClick={() => dispatch(DeleteTodos(icome.id))}
              key={icome.id}
              {...icome}
            />
          );
        })}
      </Column>
    </form>
  );
}
const mapStateToProps = (state) => {
  return {
    incomes: state.Todoes,
  };
};
export default connect(mapStateToProps)(HomeIncome);
