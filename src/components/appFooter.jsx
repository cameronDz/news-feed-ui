import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import { defaultToEmptyString } from "../libs/default";
import { appFooterStyles as styles } from "./styles";
import _packageDetails from "../../package.json";

const useStyles = makeStyles(() => styles);
const AppFooter = () => {
  const name = defaultToEmptyString(_packageDetails?.author?.name);
  const version = defaultToEmptyString(_packageDetails?.version);
  const versionDisplay = version ? "v" + version : "";
  const classes = useStyles();
  return (
    <div className={classNames(classes?.appFooterWrapper)}>
      {name} &copy; 2021 {versionDisplay}
    </div>
  );
};

export default AppFooter;
