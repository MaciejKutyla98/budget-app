import Navbar from "./components/Navbar/Navbar";
import BudgetOverview from "./components/BudgetOverview/BudgetOverview";
import SingleOverview from "./components/SingleOverview/SingleOverview";
import BudgetForm from "./components/BudgetForm/BudgetForm";
import Footer from "./components/Footer/Footer";
import './App.scss';
import Modal from "./components/Modal/Modal";
import {useState} from "react";

function App() {
    const [show, setShow] = useState(false)

    return (
    <div className="App">
        <Navbar />
        <BudgetOverview />
        <SingleOverview overview='Income'/>
        <SingleOverview overview='Expense'/>
        <BudgetForm onClick={() => setShow(true)}/>
        <Modal onClose={() => setShow(false)} show={show}/>
        <Footer />
    </div>
  );
}

export default App;
