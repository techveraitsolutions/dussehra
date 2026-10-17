/**
 * Calendar utilities to set a reminder for 20 October 2026, 10:00 PM IST
 */

// Target ISO: 2026-10-20T22:00:00+05:30 -> UTC: 20261020T163000Z
const EVENT_TITLE = 'Dussehra Lucky Winner Announcement';
const EVENT_DESC = 'Official Dussehra Lucky Winner Announcement. The wait is almost over! One Lucky Winner. One Big Moment.';
const EVENT_LOCATION = 'Official Live Announcement';
const START_TIME_UTC = '20261020T163000Z';
const END_TIME_UTC = '20261020T173000Z';

export function getGoogleCalendarUrl(): string {
  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', EVENT_TITLE);
  url.searchParams.set('dates', `${START_TIME_UTC}/${END_TIME_UTC}`);
  url.searchParams.set('details', EVENT_DESC);
  url.searchParams.set('location', EVENT_LOCATION);
  return url.toString();
}

export function downloadIcsFile(): void {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Dussehra Lucky Winner//Announcement Reminder//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:${EVENT_TITLE}`,
    `DESCRIPTION:${EVENT_DESC}`,
    `LOCATION:${EVENT_LOCATION}`,
    `DTSTART:${START_TIME_UTC}`,
    `DTEND:${END_TIME_UTC}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'DESCRIPTION:Reminder: Dussehra Lucky Winner Announcement in 15 minutes!',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'dussehra-lucky-winner-reminder.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
