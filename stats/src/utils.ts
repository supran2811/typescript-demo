export const getStringAsDate = (dateAsString: string): Date => {
  const dateArray = dateAsString
    .split("/")
    .map((data: string): number => parseInt(data));
  return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
};
