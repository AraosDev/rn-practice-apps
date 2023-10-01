export const dateFormatter = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1).toString();
    const zeroParsedDay = day.length === 1 ? `0${day}` : day;
    const zeroParsedMonth = month.length === 1 ? `0${month}` : month;
    return `${zeroParsedDay}-${zeroParsedMonth}-${date.getFullYear()}`;
};

export const isDateWithin7Days = (date) => {
    const givenDate = new Date(date);
    return givenDate <= new Date() && givenDate >= (new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)));
};