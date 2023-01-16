const formatNumber = (number = 0) => {
  return number < 10 ? `00${number}` : number < 100 ? `0${number}` : number;
};

export { formatNumber };
