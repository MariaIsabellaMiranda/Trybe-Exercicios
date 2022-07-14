import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from '/Home';
import About from '/About';
import Users from '/Users';
import StrictAcess from '/StrictAcess';


class App extends Component {
  render() {
    const acess = {
      username: 'Maria',
      password: 123456
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={() => <Users greetingsMessage="Good Morning" />} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/strict-access" render={() => {<StrictAcess user={ acess } />}} />
        </Switch>
        {/* Usar Lista para fazer os links (ex: ol e li)* */}
        <Link to="/strict-access">Strict Access</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </BrowserRouter>
      
    );
  }
}

export default App;
