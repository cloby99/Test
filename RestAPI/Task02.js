const { google } = require('googleapis');
const axios = require('axios');

const calendar = google.calendar('v3');
const auth = new google.auth.OAuth2(
    client_id,
    secret_key,
  'https://calendarsync.com/oauth2/callback'
);

auth.setCredentials({ refresh_token: 'refresh_token' });

const getFreeBusyIntervals = async (calendarId, timeMin, timeMax) => {
  const res = await calendar.freebusy.query({
    auth,
    requestBody: {
      timeMin: timeMin,
      timeMax: timeMax,
      items: [{ id: calendarId }],
    },
  });

  const busyIntervals = res.data.calendars[calendarId].busy;
  return busyIntervals;
};

const main = async () => {
  const calendarId = 'calendar_id';
  const timeMin = '2024-07-01T00:00:00Z'; 
  const timeMax = '2024-07-31T23:59:59Z'; 

  try {
    const busyIntervals = await getFreeBusyIntervals(calendarId, timeMin, timeMax);
    console.log('Busy intervals:', busyIntervals);
  } catch (error) {
    console.error('Error retrieving free/busy intervals:', error);
  }
};

main();
