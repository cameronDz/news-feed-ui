import React, { Fragment } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import AppFooter from "../components/appFooter";
import Lists from "./lists";
import PodcastsToWatch from "../components/podcastsToWatch";
import { appContainerStyles as styles } from "./styles";

const propTypes = {};
const useStyles = makeStyles(() => styles);
const AppContainer = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classNames(classes?.appWrapper)}>
        <div className={classNames(classes?.appContentOuterWrapper)}>
          <div className={classNames(classes?.appContentInnerWrapper)}>
            <div className={classNames(classes?.appHeaderBarWrapper)}>
              <h2>News Feed App</h2>
            </div>
            <Lists />
            <div>
              <PodcastsToWatch />
            </div>
          </div>
        </div>
        <div className={classNames(classes?.appFooter)}>
          <AppFooter />
        </div>
      </div>
    </Fragment>
  );
};

AppContainer.propTypes = propTypes;
export default AppContainer;
