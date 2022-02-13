import Navbar from "./components/Navbar/Navbar";
import BudgetOverview from "./components/BudgetOverview/BudgetOverview";
import SingleOverview from "./components/SingleOverview/SingleOverview";
import BudgetForm from "./components/BudgetForm/BudgetForm";
import Footer from "./components/Footer/Footer";
import './App.scss';
import Modal from "./components/Modal/Modal";
import {useState} from "react";
import {Provider, useSelector} from "react-redux";

function App() {
    const [show, setShow] = useState(false)
    const incomesList = useSelector(state => state.budget.totalIncome);
    const expensesList = useSelector(state => state.budget.totalExpense);
    delete incomesList[0];
    delete expensesList[0];

    return (
            <div className="App">
                <Navbar />
                <BudgetOverview />
                <SingleOverview overview='Income' list={incomesList}/>
                <SingleOverview overview='Expense' list={expensesList}/>
                <BudgetForm onClick={() => setShow(true)}/>
                <Modal onClose={() => setShow(false)} show={show}/>
                <Footer />
            </div>
  );
}

export default App;
