import './App.css';
import AuthForm from './components/AuthForm/AuthForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>User Authorization</h1>
      <Switch>
      <Route path="/" exact component={AuthForm} />
      <Route path="/profile" exact component={Profile} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
