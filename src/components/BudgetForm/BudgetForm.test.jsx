import React from "react";
import BudgetForm from "./BudgetForm";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('Test modal appearing', () => {
    it('Test click event', () => {
       const mockCallBack = jest.fn();

       const button = shallow((<BudgetForm onClick={mockCallBack} />));
       button.find('button').simulate('click');
       expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});






