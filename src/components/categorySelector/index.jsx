import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { categoryStyles as styles } from "./styles";

const propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
};
const useStyles = makeStyles(() => styles);
const CategorySelector = ({ categories = [], onSelect = null }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {categories.map((category) => {
        return (
          <Fragment key={category}>
            <label htmlFor="category">{category}</label>
            <input
              id={category}
              name="category"
              onChange={() => onSelect(category)}
              type="radio"
              value={category}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

CategorySelector.propTypes = propTypes;
export default CategorySelector;
