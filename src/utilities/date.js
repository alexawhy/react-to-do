export const today = new Date();

const dayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
  "Sunday"
]

export const parseDayOfWeek = () => {
  return (dayOfWeek[today.getDay()]);
} 