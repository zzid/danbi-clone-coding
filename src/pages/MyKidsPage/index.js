import React from "react";
import NavBarData from "data/data.json";
import { Redirect, Route, Switch } from "react-router-dom";
import { InPageLeftNav } from "components";
import TotalPage from "./TotalPage";
import ElemantaryPage from "./ElemantaryPage";
import SubjectKorPage from "./SubjectKorPage";
import ReadingPage from "./ReadingPage";
import TeacherPage from "./TeacherPage";
import LearningPage from "./LearningPage";

import "./MyKidsPage.scss";
import "antd/dist/antd.css";

const data = NavBarData.NavBarData.mykids;

class MyKidsPage extends React.Component {
  render() {
    return (
      <div className={"page-container"}>
        <InPageLeftNav data={data} />
        <Switch>
          <Route exact path="/mykids">
            <Redirect to="/mykids/total" />
          </Route>
          <Route exact path={"/mykids/total"} component={TotalPage} />
          <Route exact path={"/mykids/subjectkor"} component={SubjectKorPage} />
          <Route exact path={"/mykids/elemantary"} component={ElemantaryPage} />
          <Route exact path={"/mykids/reading"} component={ReadingPage} />
          <Route exact path={"/mykids/teacher"} component={TeacherPage} />
          <Route exact path={"/mykids/learning"} component={LearningPage} />
        </Switch>
      </div>
    );
  }
}

export default MyKidsPage;
