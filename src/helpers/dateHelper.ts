const formatUnit = (n: number) => {
  return n >= 10 ? n : `0${n}`;
};

const getDate = (d: Date | number) => {
  const date = new Date(d);
  const day = formatUnit(date.getDate());
  const month = formatUnit(date.getMonth() + 1);
  const year = formatUnit(date.getFullYear());
  return `${day}/${month}/${year}`;
};

const getTime = (d: Date | number) => {
  const date = new Date(d);
  const hours = formatUnit(date.getHours());
  const minutes = formatUnit(date.getMinutes());
  const seconds = formatUnit(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
};

const removeTimeFromTimestamp = (d: number | Date) => {
  const date = new Date(d);
  return date.setHours(0, 0, 0, 0);
};

const getServiceMessage = (d: number | Date) => {
  const date = new Date(d);
  return date.toDateString();
};

const dateHelper = {
  getDate,
  getTime,
  removeTimeFromTimestamp,
  getServiceMessage,
};

export default dateHelper;
