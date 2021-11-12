import dayjs from "dayjs";

export const dateFormat = "YY.MM.DD";
export function dateToFormatted(date) {
  return dayjs(date).format(dateFormat);
}
