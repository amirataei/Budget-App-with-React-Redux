import styled from "styled-components";
import HomeIncome from "./Components/HomeIncome";
import HomeExpense from "./Components/HomeExpense";
import TransitionI from "./Components/TransitionI";
import TransitionE from "./Components/TransitionE";
import { connect } from "react-redux";
const Background = styled.div`
  background-color: #4da84d;
  width: 100%;
  height: 640px;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }
`;
const BudgetApp = styled.div`
  background-color: #333333;
  border-radius: 10px;
  position: absolute;
  left: 12%;
  height: auto;
  width: 75%;
  top: 8%;
  text-align: center;
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 60px;
`;

const BudgetName = styled.div`
  font-size: 40px;
  color: #cc3300;
`;
const Homeincome = styled.div``;
const Homeexpense = styled.div``;
const Blance = styled.div`
  font-size: 30px;
  color: #fff;
`;
const Blance2 = styled.div`
  display: flex;
  margin-right: -40px;
`;
const Income = styled.div`
  font-size: 20px;
  color: #4da84d;
  margin-right: 20px;
`;
const Expense = styled.div`
  font-size: 20px;
  color: #ff1a1a;
`;
const PriceIncome = styled.div`
  font-size: 20px;
`;
const PriceExpense = styled.div`
  font-size: 20px;
  color: #fff;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
function App({ incomes, Expenses }) {
  const TotalIncome = incomes.map((income) => income.price);
  const TotalExpenses = Expenses.map((Expense) => Expense.price);
  let incoms = TotalIncome.map((i) => Number(i)).reduce(
    (prev, item) => (prev += item),
    0
  );
  let expense = TotalExpenses.map((i) => Number(i)).reduce(
    (prev, item) => (prev += item),
    0
  );

  return (
    <Background>
      <BudgetApp>
        <BudgetName>BUDGET APP</BudgetName>
        <Flex>
          <Column>
            <Blance>Your Balance</Blance>
            <PriceExpense>${incoms - expense}</PriceExpense>
          </Column>
          <Homeincome>
            <HomeIncome />
          </Homeincome>
          <Homeexpense>
            <HomeExpense />
          </Homeexpense>
          <Blance2>
            <Column>
              <Income>Income</Income>
              <PriceIncome>
                {incomes.map((icome) => {
                  return <TransitionI key={icome.id} {...icome} />;
                })}
              </PriceIncome>
            </Column>
            <Column>
              <Expense>Expense</Expense>
              <PriceExpense>
                {Expenses.map((Expense) => {
                  return <TransitionE key={Expense.id} {...Expense} />;
                })}
              </PriceExpense>
            </Column>
          </Blance2>
        </Flex>
      </BudgetApp>
    </Background>
  );
}
const mapStateToProps = (state) => {
  return {
    incomes: state.Todoes,
    Expenses: state.Expense,
  };
};
export default connect(mapStateToProps)(App);
