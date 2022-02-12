import Navbar from "./components/Navbar/Navbar";
import BudgetOverview from "./components/BudgetOverview/BudgetOverview";
import SingleOverview from "./components/SingleOverview/SingleOverview";
import BudgetForm from "./components/BudgetForm/BudgetForm";
import Footer from "./components/Footer/Footer";
import './App.scss';
import Modal from "./components/Modal/Modal";
import {useState} from "react";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    const [show, setShow] = useState(false)

    return (
        <Provider store={store}>
            <div className="App">
                <Navbar />
                <BudgetOverview />
                <SingleOverview overview='Income'/>
                <SingleOverview overview='Expense'/>
                <BudgetForm onClick={() => setShow(true)}/>
                <Modal onClose={() => setShow(false)} show={show}/>
                <Footer />
            </div>
        </Provider>
  );
}

export default App;
