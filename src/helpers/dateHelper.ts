
const getDate = (date: Date | number) => {
    const { day, month, year } = parseDate(date);
    return `${day}/${month}/${year}`;
};

const parseDate = (date: Date | number) => {
    if (typeof date === 'number') {
        date = new Date(date);
    }
    return {
        day: formatUnit(date.getDate()),
        month: formatUnit(date.getMonth() + 1),
        year: formatUnit(date.getFullYear()),
        hours: formatUnit(date.getHours()),
        minutes: formatUnit(date.getMinutes()),
        seconds: formatUnit(date.getSeconds())
    };
};

const formatUnit = (n: number) => {
    return n >= 10 ? n : `0${n}`;
};

const dateHelper = {
    getDate
};

export default dateHelper;
