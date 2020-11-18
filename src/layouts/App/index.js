import React from "react";
import { Footer, Header } from "components";
import { Switch, Route } from "react-router-dom";
import { MainPage } from "pages";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/?page=:page" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
