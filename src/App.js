import Navbar from "./components/Navbar/Navbar";
import BudgetOverview from "./components/BudgetOverview/BudgetOverview";
import SingleOverview from "./components/SingleOverview/SingleOverview";
import BudgetForm from "./components/BudgetForm/BudgetForm";
import Footer from "./components/Footer/Footer";
import './App.scss';

function App() {
  return (
    <div className="App">
        <Navbar />
        <BudgetOverview />
        <SingleOverview overview='Income'/>
        <SingleOverview overview='Expense'/>
        <BudgetForm />
        <Footer />
    </div>
  );
}

export default App;
