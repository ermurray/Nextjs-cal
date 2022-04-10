import {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  startOfDay,
  addDays,
} from 'date-fns';

type Week = Array<Date>;
type Month = Array<Week | []>;

function generateWeek(start: Date = new Date()) {
  let date: Date = startOfWeek(startOfDay(start));

  return function buildWeek() {
    const week: Week = [...Array(7)].map((_, i) => addDays(date, i));
    date = addDays(week[6], 1);
    return week;
  };
}

function generateMonth(start = new Date()) {
  let month: Month = [];
  let date = start;

  function lastDayOfRange(range: Month) {
    return range[range.length - 1][6];
  }

  return function buildMonth() {
    const weekGen = generateWeek(startOfMonth(date));
    const endDate = startOfDay(endOfWeek(endOfMonth(date)));
    month.push(weekGen());

    while (lastDayOfRange(month) < endDate) {
      month.push(weekGen());
    }

    const range = month;
    month = [];
    date = addDays(lastDayOfRange(range), 1);

    return range;
  };
}

export { generateWeek, generateMonth };
