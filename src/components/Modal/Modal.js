import React, {useEffect, useState} from "react";
import {useKey} from 'react-use';
import {useDispatch} from "react-redux";
import './Modal.scss';
import {addExpense, addIncome} from "../../redux";


const Modal = props => {
    const [selectedDecision, getSelectedDecision] = useState('income');
    const [amount, getAmount] = useState(0);
    const [description, getDescription] = useState('');
    const dispatch = useDispatch();

    useKey('Escape', () => props.onClose())

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedDecision === 'income') {
            dispatch(addIncome(description, amount))
        } else {
            dispatch(addExpense(description, amount))
        }
        props.onClose();
    }

    return (
            <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <p className='modal-title'>Add New Budget</p>
                        <button className='button delete' aria-label='close' onClick={props.onClose}> x </button>
                    </div>
                    <form className='modal-body' onSubmit={(e) => handleSubmit(e)}>
                        <div className='field'>
                            <label className='label'>Budget Category</label>
                            <div className='select'>
                                <select className='source'
                                        data-testid="select"
                                        onChange={(e) => getSelectedDecision(e.target.value)}
                                >
                                    <option value='income' data-testid="select-option">Income</option>
                                    <option value='expense' data-testid="select-option">Expense</option>
                                </select>
                            </div>
                        </div>
                        <div className='field is-grouped'>
                            <div className='control left'>
                                <input type='text'
                                       className='input description'
                                       placeholder='Description'
                                       onChange={(e) => getDescription(e.target.value)}
                                       required
                                       minLength="3"
                                       maxLength="60"
                                   aria-label='description-input'
                                />
                                <input type='number'
                                       step='0.01'
                                       className='input amount'
                                       placeholder='$ Enter Amount'
                                       onChange={(e) => getAmount(parseInt(e.target.value))}
                                       required
                                       min="0.01"
                                       max="1000000"
                                       aria-label='amount-input'
                                />
                            </div>
                        </div>
                    <div className='modal-footer'>
                        <input type='submit' className='button add' value='Add'/>
                    </div>
                    </form>
                </div>
            </div>
    )
}

export default Modal;