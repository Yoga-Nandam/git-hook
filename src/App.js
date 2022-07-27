import logo from './logo.svg';
import './App.css';
//import StaticDataContext from './Components/StaticDataContext';
import Greeting from './components/Greeting';
import DropDown from './components/DropDown';
import AppServer from './components/AppServer';

function App() {
  return (
    <div className="App">
       <Greeting /> 
   
     <DropDown />
     <AppServer />
      {/*  // <Counter/>
      <StaticDataContext.Provider value={props}>
        <TestContext />
      </StaticDataContext.Provider> */}
    </div>
  );
}

export default App;
