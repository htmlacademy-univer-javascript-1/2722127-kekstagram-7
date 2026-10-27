function calendar(workStart, workEnd, meetingStart, duration) {
  const toMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const start = toMinutes(workStart);
  const end = toMinutes(workEnd);
  const meeting = toMinutes(meetingStart);

  return meeting >= start && meeting + duration <= end;
}

// eslint-disable-next-line no-console
console.log(calendar('08:00', '17:30', '14:00', 90)); // true
// eslint-disable-next-line no-console
console.log(calendar('8:0', '10:0', '8:0', 120)); // true
// eslint-disable-next-line no-console
console.log(calendar('08:00', '14:30', '14:00', 90)); // false
// eslint-disable-next-line no-console
console.log(calendar('14:00', '17:30', '08:0', 90)); // false
// eslint-disable-next-line no-console
console.log(calendar('8:00', '17:30', '08:00', 900)); // false
