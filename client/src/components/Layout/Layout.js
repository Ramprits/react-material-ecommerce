import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";

import { useLayoutState } from "../../context/LayoutContext";
import useStyles from "./styles";

import Header from "../Header";
import Sidebar from "../Sidebar";
import ErrorBoundary from "../error-boundary/boundary";

const Dashboard = lazy(() => import("../../pages/dashboard"));
const Typography = lazy(() => import("../../pages/typography"));
const Notifications = lazy(() => import("../../pages/notifications"));
const Maps = lazy(() => import("../../pages/maps"));
const Tables = lazy(() => import("../../pages/tables"));
const Icons = lazy(() => import("../../pages/icons"));
const Charts = lazy(() => import("../../pages/charts"));
const Products = lazy(() => import("../../pages/products/Products"));

function Layout(props) {
  var classes = useStyles();

  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<div>Please wait...</div>}>
                <Route path="/app/dashboard" component={Dashboard} />
                <Route path="/app/products" component={Products} />
                <Route path="/app/typography" component={Typography} />
                <Route path="/app/tables" component={Tables} />
                <Route path="/app/notifications" component={Notifications} />
                <Route
                  exact
                  path="/app/ui"
                  render={() => <Redirect to="/app/ui/icons" />}
                />
                <Route path="/app/ui/maps" component={Maps} />
                <Route path="/app/ui/icons" component={Icons} />
                <Route path="/app/ui/charts" component={Charts} />
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
