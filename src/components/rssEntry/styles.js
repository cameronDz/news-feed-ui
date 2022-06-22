const entryStyles = {
  root: {
    border: "1px black solid",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "row",
    margin: "12px auto",
    padding: "6px",
    width: "500px",
  },
  boxRight: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "150px",
    paddingLeft: "12px",
    width: "100%",
    "& p": {
      marginBlockStart: 0,
    },
  },
  author: {
    fontSize: "18px",
    fontWeight: "600",
  },
  name: {
    fontSize: "12px",
  },
  date: {
    fontSize: "10px",
  },
};

export { entryStyles };
