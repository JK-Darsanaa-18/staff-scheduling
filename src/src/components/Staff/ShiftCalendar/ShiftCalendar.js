import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ShiftCalendar.css';

const localizer = momentLocalizer(moment);

const ShiftCalendar = () => {
  const [events, setEvents] = useState([]);

  const fetchShifts = () => {
    axios.get('http://localhost:8000/api/shifts/') // Update the URL if needed
      .then(response => {
        const shifts = response.data.map(shift => {
          // Determine color based on shift timings
          const startTime = moment(shift.start_time, 'HH:mm');
          const endTime = moment(shift.end_time, 'HH:mm');
          let eventColor;

          if (startTime.isBefore(moment('12:00', 'HH:mm'))) {
            eventColor = 'morning-shift'; // Class for morning shifts
          } else if (startTime.isBefore(moment('18:00', 'HH:mm'))) {
            eventColor = 'afternoon-shift'; // Class for afternoon shifts
          } else {
            eventColor = 'night-shift'; // Class for night shifts
          }

          return {
            title: `${shift.name} (${shift.start_time} - ${shift.end_time})`,
            start: new Date(`${shift.date}T${shift.start_time}`),
            end: new Date(`${shift.date}T${shift.end_time}`),
            colorClass: eventColor, // Assign the color class
          };
        });
        setEvents(shifts);
      })
      .catch(error => {
        console.error('There was an error fetching the shifts!', error);
      });
  };

  useEffect(() => {
    fetchShifts(); // Initial fetch of shifts
  }, []);

  const eventStyleGetter = (event) => {
    return {
      className: event.colorClass,
    };
  };

  return (
    <div className="shift-calendar-container">
      <h2 className="shift-calendar-heading">Shift Calendar</h2>
      <div className="calendar-wrapper">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '500px', width: '100%' }}
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </div>
  );
};

export default ShiftCalendar;
