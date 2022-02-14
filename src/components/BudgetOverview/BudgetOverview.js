import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import './BudgetOverview.scss';
import BudgetChart from "./BudgetChart";

function BudgetOverview(props) {
    const lastUpdate = 'Jan 08, 2022';
    const totalIncome = useSelector(state => {
        const incomeList = [];
        state.budget.totalIncome.forEach((totalIncome) => {
            incomeList.push(totalIncome.amount);
        })
        return incomeList.reduce((a, b) => a + b, 0)
    });
    const totalExpense = useSelector(state => {
        const expenseList = [];
        state.budget.totalExpense.forEach((totalExpense) => {
            expenseList.push(totalExpense.amount);
        })
        return expenseList.reduce((a, b) => a + b, 0)
    });
    const amountOfMoney = totalIncome - totalExpense;

    useEffect(() => {
        if (amountOfMoney > 0){
            document.getElementById("amountOfMoney").style.color = '#23d160';
        } else if (amountOfMoney < 0) {
            document.getElementById("amountOfMoney").style.color = '#ff3860';
        } else {
            document.getElementById("amountOfMoney").style.color = '#7a7a7a';
        }
    },[amountOfMoney]);
    return (
        <section className='section'>
            <div className='overview'>
                <h1 className='overview_title'>Budget Overview</h1>
                <h2 className='overview_subtitle'>Last update: {lastUpdate}</h2>
                <div className='overview_container'>
                    <div className='overview_container_details'>
                        <div className='overview_container_details_moneyLeft'>
                            <p><span className='overview_container_details_moneyLeft_amount' id='amountOfMoney'>$ {amountOfMoney.toFixed(2)}</span></p>
                            <p className='overview_container_details_moneyLeft_text'>Money Left</p>
                        </div>
                        <div className='overview_container_details_totalIncome'>
                            <p><span className='overview_container_details_totalIncome_amount'>$ {totalIncome.toFixed(2)}</span></p>
                            <p className='overview_container_details_totalIncome_text'>Total Income</p>
                        </div>
                        <div className='overview_container_details_totalExpense'>
                            <p><span className='overview_container_details_totalIncome_amount'>$ {totalExpense.toFixed(2)}</span></p>
                            <p className='overview_container_details_totalIncome_text'>Total Expense</p>
                        </div>
                    </div>
                    {(totalExpense == 0 && totalIncome == 0) ?  <div></div> : (
                        <div className='overview_container_chart'>
                        <BudgetChart totalIncome={totalIncome} totalExpense={totalExpense} amountOfMoney={amountOfMoney}/>
                        </div>)}

                </div>
            </div>
        </section>
    )
}

export default BudgetOverview;