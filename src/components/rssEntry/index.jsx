import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { entryStyles as styles } from "./styles";

const propTypes = {
  author: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
  publishDate: PropTypes.string,
  thumbnailUrl: PropTypes.string,
};
const useStyles = makeStyles(() => styles);
const RssEntry = ({
  author = "",
  link = "",
  name = "",
  publishDate = "",
  thumbnailUrl = "",
}) => {
  const displayDate = new Date(publishDate).toDateString();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <a href={link} rel="noreferrer" target="_blank">
          <img
            alt="entry img"
            onError={() => console.warn("error occured")}
            src={thumbnailUrl}
            width="160px"
          />
        </a>
        <a href={link} rel="noreferrer" target="_blank">{`[Open]`}</a>
      </div>
      <div className={classes.boxRight}>
        <p className={classes.author}>{author}</p>
        <p className={classes.name}>{name}</p>
        <p className={classes.date}>{`Released: ${displayDate}`}</p>
      </div>
    </div>
  );
};

RssEntry.propTypes = propTypes;
export default RssEntry;
