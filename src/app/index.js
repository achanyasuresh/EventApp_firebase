
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../screens/Login/Login';
import Dashboard from '../screens/Dashboard/Dashboard';
import AddEvents from '../screens/Events/AddEvents';
import Header from '../components/Header/Header';
import Signup from '../screens/Signup/Signup';
import ViewEvent from '../screens/View/View';
import Search from '../screens/View/Search';
import SubHeader from '../components/SubHeader/SubHeader';
import Head from '../components/Header/head';

function App() {

  return (


    <BrowserRouter>

      <div>

        <Route path="/header" component={Header} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addevents" component={AddEvents} />
          <Route path="/signup" component={Signup} />
          <Route path="/view" component={ViewEvent} />
          <Route path="/search" component={Search} />
          <Route path="/sub" component={SubHeader} />
          <Route path="/head" component={Head} />





        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;