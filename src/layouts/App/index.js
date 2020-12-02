import React from "react";
import { Footer, Header, HelpBar } from "components";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  MainPage,
  IntroducePage,
  MyKidsPage,
  MyTeacherPage,
  InfoPage,
  CustomerPage,
  CompanyPage,
} from "pages";
import "./App.scss";

class App extends React.Component {
  listenToScrollEvent = (onSetFixed) => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        if (window.pageYOffset > 80) {
          onSetFixed(true);
        } else if (window.pageYOffset < 50) {
          onSetFixed(false);
        }
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Header listenToScrollEvent={this.listenToScrollEvent} />
        <Switch>
          <Route exact path="/" component={MainPage} />

          <Route path="/wink/" component={IntroducePage} />
          <Route path="/mykids" component={MyKidsPage} />

          {/* my teacher */}
          <Route exact path="/myteacher">
            <Redirect to="/myteacher/myteacherkorean" />
          </Route>
          <Route path="/myteacher/:category" component={MyTeacherPage} />
          {/* info */}
          <Route exact path="/info">
            <Redirect to="/info/infomain" />
          </Route>
          <Route path="/info/:category" component={InfoPage} />
          {/* customer */}
          <Route exact path="/customer">
            <Redirect to="/customer/noticelist" />
          </Route>
          <Route path="/customer/:category" component={CustomerPage} />

          {/*  company page */}
          <Route path="/company" component={CompanyPage} />
        </Switch>
        <HelpBar listenToScrollEvent={this.listenToScrollEvent} />
        <Footer />
      </div>
    );
  }
}

export default App;
