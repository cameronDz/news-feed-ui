import React, { Fragment } from "react";
import classNames from "classnames";
import PropType from "prop-types";
import { makeStyles } from "@material-ui/core";

const propTypes = {
  list: PropType.array,
  name: PropType.string,
};
const styles = {};
const useStyles = makeStyles(() => styles);
const SimpleList = ({ list, name }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classNames(classes?.listWrapper)}>
        {!!name && <h3>{name}</h3>}
        <ul>
          {Array.isArray(list) && list.map((item, idx) =>{
            return !!item?.name && <li key={item?.id || idx}>{item.name}</li>
          })}
        </ul>
      </div>
    </Fragment>
  );
};

SimpleList.propTypes = propTypes;
export default SimpleList;
