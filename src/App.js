import Navbar from "./components/Navbar/Navbar";
import BudgetOverview from "./components/BudgetOverview/BudgetOverview";
import IncomeOverview from "./components/IncomeOverview/IncomeOverview";
import ExpenseOverview from "./components/ExpenseOverview/ExpenseOverview";
import BudgetForm from "./components/BudgetForm/BudgetForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <BudgetOverview />
        <IncomeOverview />
        <ExpenseOverview />
        <BudgetForm />
        <Footer />
    </div>
  );
}

export default App;
