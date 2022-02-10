import React from "react";
import './BudgetOverview.scss';

function BudgetOverview(props) {
    const lastUpdate = 'Jan 08, 2022';
    const moneyLeft = 0;
    const totalIncome = 0;
    const totalExpense = 0;
    return (
        <section className='section'>
            <div className='overview'>
                <h1 className='overview_title'>Budget Overview</h1>
                <h2 className='overview_subtitle'>Last update: {lastUpdate}</h2>
                <div className='overview_container'>
                    <div className='overview_container_details'>
                        <div className='overview_container_details_moneyLeft'>
                            <p><span className='overview_container_details_moneyLeft_amount'>$ {moneyLeft.toFixed(2)}</span></p>
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
                    <div className='overview_container_chart'>
                        <p>Chart generated by Chart.JS will be there</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BudgetOverview;