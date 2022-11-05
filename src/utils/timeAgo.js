const timeAgo = (date) => {
  const timeInMin = Math.floor((new Date() - new Date(date)) / (1000 * 60));
  const timeInHours = Math.floor(timeInMin / 60);
  const timeInDays = Math.floor(timeInMin / 1440);
  const timeInWeeks = Math.floor(timeInMin / 10080);
  const timeInMonths = Math.floor(timeInMin / 40320);
  const timeInYears = Math.floor(timeInMin / 483840);
  return timeInMin < 60
    ? `${timeInMin} ${timeInMin > 1 ? "minutes" : "minute"} ago`
    : timeInMin < 1440
    ? `${timeInHours} ${timeInHours > 1 ? "hours" : "hour"} ago`
    : timeInMin < 10080
    ? `${timeInDays} ${timeInDays > 1 ? "days" : "day"} ago`
    : timeInMin < 40320
    ? `${timeInWeeks} ${timeInWeeks > 1 ? "weeks" : "week"} ago`
    : timeInMin < 483840
    ? `${timeInMonths} ${timeInMonths > 1 ? "months" : "month"} ago`
    : `${timeInYears} ${timeInYears > 1 ? "years" : "year"} ago`;
};

export default timeAgo;
