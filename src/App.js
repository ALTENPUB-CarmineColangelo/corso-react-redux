
import { BrowserRouter as RouteProvider, Route, Switch, Link } from 'react-router-dom';
import Auth from './components/Auth';
import Users from './components/Users';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { User } from './components/User'

function App() {
  const prova = 'ciao'
  return (
    <>
    <RouteProvider>
      <Navbar />
      <Route exact={true} path="/">
        <Home saluto={prova} />
      </Route>
      <Route exact={true} path="/login" component={Auth} />
      <Route exact path="/users" render={() => <Users />} />
      <Route path="/users/:brand/:model/:id" component={User} />
    </RouteProvider>
    </>
  );
}

export default App;
