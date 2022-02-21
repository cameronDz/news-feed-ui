import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import SimpleList from "../components/simpleList";
import { listStyles as styles } from "./styles";

import activists from "../../assets/data/activists.json";
import comedians from "../../assets/data/comedians.json";
import podcasts from "../../assets/data/podcasts.json";
import ytLetsPlay from "../../assets/data/ytLetsPlay.json";
import ytGaming from "../../assets/data/ytGaming.json";

const propTypes = {};
const useStyles = makeStyles(() => styles);
const Lists = () => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.listWrapper)}>
      <SimpleList list={activists.list} name="Activists" />
      <SimpleList list={comedians.list} name="Comedians" />
      <SimpleList list={podcasts.list} name="Podcasts" />
      <SimpleList list={ytLetsPlay.list} name="YouTube Let's Play channels" />
      <SimpleList list={ytGaming.list} name="YouTube Gaming channels" />
    </div>
  );
};

Lists.propTypes = propTypes;
export default Lists;
