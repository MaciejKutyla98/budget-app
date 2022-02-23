import {jest} from '@jest/globals';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from "./Modal";
import {Provider} from "react-redux";
import store from "../../redux/store";
import App from "../../App";

describe('Test choosing options', () => {
    it('Choosing options update the state', () => {
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
});


