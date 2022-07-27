import { render, screen, fireEvent} from '@testing-library/react';
import DropDown from './DropDown';

test('renders without crashing',()=>{
    render(<DropDown />);
  //  const element = screen.getByTestId('dropDown');
    const element = screen.getAllByRole("combobox");
 //   const element = screen.getByTestId('placeDropDown');
    screen.debug();
    fireEvent.change(element[0], {target : {value : 'Banana'}});
});