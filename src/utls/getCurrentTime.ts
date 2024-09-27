export function getCurrentTimeAndDate(offsetInSeconds: number): {
  date: string;
  time: string;
} {
  const currentDate = new Date();

  // Get the local timezone offset in seconds
  const localTimezoneOffsetInSeconds = currentDate.getTimezoneOffset() * 60;

  // Calculate the adjusted date considering the offset
  const adjustedTimeInMillis =
    currentDate.getTime() +
    (offsetInSeconds - localTimezoneOffsetInSeconds) * 1000;
  const localDate = new Date(adjustedTimeInMillis);

  // Formatting date
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = localDate
    .toLocaleDateString(undefined, options)
    .replace(/(\d{2}) (\w{3}) (\d{4})/, "$1-$2-$3");

  // Formatting time
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const formattedTime = localDate.toLocaleString(undefined, timeOptions);

  return {
    date: formattedDate,
    time: formattedTime,
  };
}
