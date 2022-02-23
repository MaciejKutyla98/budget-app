import {jest} from '@jest/globals';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from "./Modal";
import {Provider} from "react-redux";
import store from "../../redux/store";
import App from "../../App";

it('Choosing options for update the state', () => {
    render(
        <Provider store={store} >
            <Modal />
        </Provider>
    );
    fireEvent.change(screen.getByTestId('select'), { target: {value: 1}});
    let options = screen.getAllByTestId('select-option')
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
})

it('Check if description input works properly', () => {
    render(
        <Provider store={store} >
            <Modal />
        </Provider>
    );
    const input = screen.getByLabelText('description-input')
    fireEvent.change(input, {target: {value: 'For dinner'}})
    expect(input.value).toBe('For dinner')
})

it('Check if amount input works properly', () => {
    render(
        <Provider store={store} >
            <Modal />
        </Provider>
    );
    const input = screen.getByLabelText('amount-input')
    fireEvent.change(input, {target: {value: 'String test'}})
    expect(input.value).not.toBe('String test')
    expect(input.value).toBe('')

    fireEvent.change(input, {target: {value: 123}})
    expect(input.value).toBe('123')
})

it('Check if modal shows and a close button and esc work properly', () => {
    const handleClose = jest.fn()
    render(
        <Provider store={store} >
            <Modal onClose={handleClose}/>
        </Provider>
    );
    expect(screen.getByText('Add New Budget')).toBeTruthy()
    fireEvent.click(screen.getByText('x'))
    expect(handleClose).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(screen.getByText('Add New Budget'), {key: 'Escape', code: 'Escape'})
    expect(handleClose).toHaveBeenCalledTimes(2)
})

it('check if add button work properly', () => {
    const handleClose = jest.fn()
    render(
        <Provider store={store} >
            <Modal onClose={handleClose}/>
        </Provider>
    );
    fireEvent.click(screen.getByText('Add'))
    expect(handleClose).toHaveBeenCalledTimes(1)
})

