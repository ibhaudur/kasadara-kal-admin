import moment from "moment";

export const formatMinutesToHours = (minutes: number) => {
  const duration = moment.duration(minutes, "minutes");
  const hours = Math.floor(duration.asHours());
  const mins = duration.minutes();
  return `${hours}h ${mins}m`;
};

export const formatDateOnly = (value: string) => {
  if (!value) return "";
  return new Date(value).toISOString().split("T")[0]; // "YYYY-MM-DD"
};

export const formatTime = (isoString: string) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toISOString().substr(11, 5); // "HH:mm"
};
