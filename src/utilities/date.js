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

export const parseDayOfWeek = () => (
  dayOfWeek[today.getDay()]
); 

export const calcDaysLeft = (due) => (
  Math.ceil((new Date(due).getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
);