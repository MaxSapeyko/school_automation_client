export const compareTwoDateWithoutTime = (date1: Date, date2: Date) => {
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  return date1.toDateString() === date2.toDateString();
};
