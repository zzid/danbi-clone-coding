import React from 'react';
import { Footer, Header } from 'components';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' />
          <Route path='/:page' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
