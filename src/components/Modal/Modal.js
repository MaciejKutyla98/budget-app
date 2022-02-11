import React, {useEffect} from "react";
import {useKey} from 'react-use';
import './Modal.scss';

const Modal = props => {
    useKey('Escape', () => props.onClose())

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
                                <select className='source'>
                                    <option value='income'>Income</option>
                                    <option value='expense'>Expense</option>
                                </select>
                            </div>
                        </div>
                        <div className='field is-grouped'>
                            <div className='control left'>
                                <input type='text' className='input description'  placeholder='Description' />
                                <input type='number' className='input amount'  placeholder='$ Enter Amount'/>
                            </div>
                        </div>
                    </form>
                    <div className='modal-footer'>
                        <button className='button add' onClick={props.onClose}>Add</button>
                    </div>
                </div>
            </div>
    )
}

export default Modal;