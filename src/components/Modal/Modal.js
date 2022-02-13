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
        console.log('Form submitted')
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
                        <button className='button delete' aria-label='close' onClick={props.onClose}>x</button>
                    </div>
                    <form className='modal-body'>
                        <div className='field'>
                            <label className='label'>Budget Category</label>
                            <div className='select'>
                                <select className='source' onChange={(e) => getSelectedDecision(e.target.value)}>
                                    <option value='income'>Income</option>
                                    <option value='expense'>Expense</option>
                                </select>
                            </div>
                        </div>
                        <div className='field is-grouped'>
                            <div className='control left'>
                                <input type='text' className='input description'  placeholder='Description' onChange={(e) => getDescription(e.target.value)}/>
                                <input type='number' className='input amount'  placeholder='$ Enter Amount' onChange={(e) => getAmount(parseInt(e.target.value))}/>
                            </div>
                        </div>
                    </form>
                    <div className='modal-footer'>
                        <button type='submit' onClick={(e) => handleSubmit(e)}  className='button add'>Add</button>
                    </div>
                </div>
            </div>
    )
}

export default Modal;