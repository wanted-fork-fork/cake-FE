import dayjs from "dayjs";

export const dateFormat = "YY.MM.DD";
export function dateToFormatted(date, format = dateFormat) {
  return dayjs(date).format(format);
}
