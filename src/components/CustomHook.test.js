import { render, screen, fireEvent} from '@testing-library/react';
//import { customHooks, customHooks2} from "./CustomHooks";
import customHooks from "./CustomHooks";

import '@testing-library/jest-dom';
jest.mock('./CustomHooks', () =>({
    customHooks : jest.fn()
//    customHooks2 : jest.fn()
}));
const customer = "yoga";
describe('render Test suite', ()=>{
    it('render without crash', ()=>{

        const  employees = [ 
            { firstName: "Lokesh1", id: 1,lastName: "Gupta" },
            { firstName: "Lokesh2", id: 2,lastName: "Gupta" }
        ];
   //     customHooks.mockImplementationOnce(()=>[employees]);

       // customHooks2.mockReturnValue(customer);
        render(<customHooks url='url'/>);
      //  expect(customHooks).toHaveBeenCalled();
    //  jest.spyOn(customHooks2, 'CustomHooks2').mockReturnValue(customer);
    //  const result = anotherFunction();
    //  expect(result).toHaveBeenCalledTimes(1);
    })
})