import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import ListView from './ListView/ListView';
import NavBar from './Navbar/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route path="/"><ListView></ListView></Route>
        <Route path="/list"><ListView></ListView></Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
