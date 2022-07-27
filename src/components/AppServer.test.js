import { render } from '@testing-library/react';
import AppServer from './AppServer';
//import {customHooks, customHooks2} from './CustomHooks';
import CustomHooks from './CustomHooks';
//import { renderHook, act } from '@testing-library/react-hooks';
//import StaticDataContext from './StaticDataContext';
// jest.mock('./CustomHooks', () =>({
//     customHooks : jest.fn()
//     //customHooks2 : jest.fn()
// }));
//jest.mock("./customHooks2");
jest.mock("./CustomHooks")
test('renders the hook data',()=>{

   const  employees = [ 
        { firstName: "Lokesh1", id: 1,lastName: "Gupta" },
        { firstName: "Lokesh2", id: 2,lastName: "Gupta" }
    ];
CustomHooks.mockReturnValue([employees]);
//CustomHooks.mockImplementationOnce(()=>[employees]);
//customHooks2.mockReturnValue({customer});
//render(<StaticDataContext.Provider value="yooo"><AppServer /></StaticDataContext.Provider>);
  render(<AppServer/>);

});