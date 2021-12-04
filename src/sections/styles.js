const appContainerStyles = {
  appWrapper: {
    height: "100%",
  },
  appHeaderBarWrapper: {
    padding: "8px",
  },
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
  "@global": {
    "h1, h2, h3, h4, h5": {
      margin: 0,
    },
  },
};

const listStyles = {
  listWrapper: {
    padding: "16px",
    "& div": {
      display: "inline-block",
      verticalAlign: "top",
    },
  },
};

export { appContainerStyles, listStyles };
