const sortByDate = <T extends { timestamp: number }>(a: T, b: T) => {
  if (a.timestamp > b.timestamp) {
    return -1;
  }
  if (a.timestamp < b.timestamp) {
    return 1;
  }
  return 0;
};

const sortHelper = {
  sortByDate,
};

export default sortHelper;
