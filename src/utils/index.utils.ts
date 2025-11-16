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
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate();
  
  const month = date.toLocaleString("en-US", { month: "short" }); // Oct
  
  const year = date.getFullYear();

  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${day} ${month} ${year} at ${time}`;
}
