function getDailyTotals(D) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Initialize the output dictionary with 0 for each day
  const dailyTotals = {};
  daysOfWeek.forEach((day) => (dailyTotals[day] = 0));

  // Loop through the input dictionary and add up the values for each day
  Object.keys(D).forEach((date) => {
    const dayOfWeek = daysOfWeek[new Date(date).getDay()];
    dailyTotals[dayOfWeek] += D[date];
  });

  // Check if any days are missing and fill them with the mean of the previous and next days
  for (let i = 1; i < daysOfWeek.length - 1; i++) {
    const day = daysOfWeek[i];
    if (!(day in dailyTotals)) {
      const prevDay = daysOfWeek[i - 1];
      const nextDay = daysOfWeek[i + 1];
      dailyTotals[day] = Math.round((dailyTotals[prevDay] + dailyTotals[nextDay]) / 2);
    }
  }

  return dailyTotals;
}
