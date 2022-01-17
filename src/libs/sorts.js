const sortOrder = {
  oneEqualTwo: 0,
  oneGreaterThanTwo: 1,
  oneLessThanTwo: -1,
};

const sortKeyStringAlpha = (name = "") => {
  return (one, two) => {
    let val = null;
    const isOneString = typeof one?.[name] === "string";
    const isTwoString = typeof two?.[name] === "string";
    if (isOneString === false && isTwoString === false) {
      val = sortOrder.oneEqualTwo;
    } else if (isOneString === false && isTwoString === true) {
      val = sortOrder.oneLessThanTwo;
    } else if (isOneString === true && isTwoString === false) {
      val = sortOrder.oneGreaterThanTwo;
    } else {
      if (one[name] > two[name]) {
        val = sortOrder.oneGreaterThanTwo;
      } else if (one[name] < two[name]) {
        val = sortOrder.oneLessThanTwo;
      } else {
        val = sortOrder.oneEqualTwo;
      }
    }
    return val;
  };
};

export { sortKeyStringAlpha };
