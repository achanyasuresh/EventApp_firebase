
import '../App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../screens/Login/Login';
import Dashboard from '../screens/Dashboard/Dashboard';
import AddEvents from '../screens/Events/AddEvents';
import Header from '../components/Header/Header';

function App() {
    
    return (
      
      <BrowserRouter>
      
      <div>
        <Header />
      <Switch>
          <Route  path="/login" component={Login} />
          <Route  exact path="/" component={Dashboard} />
          <Route  path="/dashboard" component={Dashboard} />
          <Route  path="/addevents" component={AddEvents} />
          
  
          
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
  
  export default App;