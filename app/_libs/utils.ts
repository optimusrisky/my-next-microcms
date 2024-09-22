import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
};
