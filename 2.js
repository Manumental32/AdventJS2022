function countHours(year, holidays) {
  return holidays.filter((h => shouldCount(year,h) )).length * 2;
}

var daysInMonth = function (m, y) {
    switch (m) {
        case 1 :
            return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28;
        case 8 : case 3 : case 5 : case 10 :
            return 30;
        default :
            return 31
    }
};

var isValidDate = function (d, m, y) {
    m = parseInt(m, 10) - 1;
    return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
};

function shouldCount(year, holiday) {
  const {0: month, 1: day} = holiday.split('/');
  if (!isValidDate(day, month, year)) return false;
  const dayOfWeek = new Date(holiday + "/" + year).getDay(holiday);
  return !(dayOfWeek === 0 || dayOfWeek === 6);
}

// console.log(countHours(2023, ['01/06', '04/01', '12/25'] )); // formato MM/DD
