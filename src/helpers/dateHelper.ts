enum LocaleStringFormats {
  short = 'short',
  numeric = 'numeric'
}

const formatUnit = (n: number) => {
  return n >= 10 ? n : `0${n}`;
};

const parseDate = (d: Date | number) => {
  const date = new Date(d);
  return {
    day: formatUnit(date.getDate()),
    month: formatUnit(date.getMonth() + 1),
    year: formatUnit(date.getFullYear()),
    hours: formatUnit(date.getHours()),
    minutes: formatUnit(date.getMinutes()),
    seconds: formatUnit(date.getSeconds()),
  };
};

const getDate = (date: Date | number) => {
  const { day, month, year } = parseDate(date);
  return `${day}/${month}/${year}`;
};

const getTime = (date: Date | number) => {
  const { hours, minutes, seconds } = parseDate(date);
  return `${hours}:${minutes}:${seconds}`;
};

const removeTimeFromTimestamp = (d: number | Date) => {
  const date = new Date(d);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
};

const getServiceMessage = (d: number | Date) => {
  const date = new Date(d);
  const message = date.toLocaleString('default', {
    weekday: LocaleStringFormats.short,
    month: LocaleStringFormats.short,
    day: LocaleStringFormats.numeric,
    year: LocaleStringFormats.numeric,
  });
  return message.replace(/,/g, '');
};

const dateHelper = {
  getDate,
  getTime,
  removeTimeFromTimestamp,
  getServiceMessage,
};

export default dateHelper;
