export const ConvertToTimeStamp = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.getTime();
};
