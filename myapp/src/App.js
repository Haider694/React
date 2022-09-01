
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  );
}

export default App;
