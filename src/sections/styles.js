const appContainerStyles = {
  appWrapper: {
    height: "100%",
    padding: "8px",
  },
  appHeaderBarWrapper: {},
  appContentOuterWrapper: {
    minHeight: "100%",
    minWidth: "800px",
  },
  appContentInnerWrapper: {
    paddingBottom: "36px",
  },
  appFooter: {
    bottom: 0,
    height: "36px",
    marginTop: "-36px",
  },
};

const listStyles = {
  listWrapper: {
    "& div": {
      display: "inline-block",
      verticalAlign: "top",
    },
  },
};

export { appContainerStyles, listStyles };
