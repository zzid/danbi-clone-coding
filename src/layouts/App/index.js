import React from "react";
import { Footer, Header, HelpBar } from "components";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage, IntroducePage } from "pages";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/wink">
            <Redirect to="/wink/lookview" />
          </Route>
          <Route path="/wink/:category" component={IntroducePage} />
        </Switch>
        <HelpBar />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
