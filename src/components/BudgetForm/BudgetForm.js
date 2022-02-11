import React from "react";
import './BudgetForm.scss';


function BudgetForm(props) {
    return (
        <aside className="aside_modify_budget">
            <button className='button open' onClick={props.onClick}>+</button>
        </aside>
    )
}


export default BudgetForm;