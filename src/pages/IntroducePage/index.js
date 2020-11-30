import React from "react";
import "./IntroducePage.scss";
import { InPageLeftNav } from "components";
import { Switch, Route, Redirect } from "react-router-dom";
import LookListPage from "./LookListPage";
import SubjectListPage from "./SubjectListPage";
import AgeStudyListPage from "./AgeStudyListPage";
import FreeStudyListPage from "./FreeStudyListPage";
import UserPostListPage from "./UserPostListPage";
import UserPostDetailPage from "./UserPostDetailPage";
import NavBarData from "data/data.json";

class IntroducePage extends React.Component {
  render() {
    const data = NavBarData.NavBarData.wink;
    const params = this.props.match.params.category;
    return (
      <div className="page-container">
        <InPageLeftNav data={data} params={params} />
        <div className="contents">
          <Switch>
            {/* looklist */}
            <Route path={"/wink/looklist/:category"} component={LookListPage} />
            <Route path={"/wink/looklist"}>
              <Redirect to={"/wink/looklist/lookview"} />
            </Route>

            {/* subjectlist */}
            <Route
              path={"/wink/subjectlist/:category"}
              component={SubjectListPage}
            />
            <Route path={"/wink/subjectlist"}>
              <Redirect to={"/wink/subjectlist/subjectko"} />
            </Route>

            {/* userpostlist */}
            <Route exact path={"/wink/userpost"} component={UserPostListPage} />
            <Route path={"/wink/userpost/:id"} component={UserPostDetailPage} />

            {/* agestudylist */}
            <Route
              path={"/wink/agestudylist/:category"}
              component={AgeStudyListPage}
            />
            <Route path={"/wink/agestudylist"}>
              <Redirect to={"/wink/agestudylist/agestudyfoursix"} />
            </Route>
            {/* freestudytlist */}
            <Route
              path={"/wink/studylist/:category"}
              component={FreeStudyListPage}
            />
            <Route path={"/wink/studylist"}>
              <Redirect to={"/wink/studylist/freestudy"} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
export default IntroducePage;
