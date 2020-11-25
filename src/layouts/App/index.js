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
} from "pages";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          {/* wink */}
          <Route exact path="/" component={MainPage} />
          <Route exact path="/wink">
            <Redirect to="/wink/lookview" />
          </Route>
          <Route exact path="/wink/agestudy">
            <Redirect to="/wink/agefoursix" />
          </Route>
          <Route path="/wink/:category" component={IntroducePage} />
          {/* my kids */}
          <Route exact path="/mykids">
            <Redirect to="/mykids/total" />
          </Route>
          <Route path="/mykids/:category" component={MyKidsPage} />
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
        </Switch>
        <HelpBar />
        <Footer />
      </div>
    );
  }
}

export default App;
