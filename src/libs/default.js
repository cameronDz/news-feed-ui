const defaultToEmptyString = (value = "") => {
  return typeof value === "string" ? value : "";
};

export { defaultToEmptyString };
