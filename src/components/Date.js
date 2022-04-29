import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Calendar, { utils } from "react-modern-calendar-datepicker";
import { BsSearch } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

const Date = (props) => {
  const [selectDate, setSelectedDate] = useState("");
  const dateFormat = () => {
    return `${selectDate.year}/${selectDate.month}/${selectDate.day}`;
  };
  const minDate = {
    year: 1995,
    month: 6,
    date: 16,
  };

  return (
    <div className="date-form">
      <form onSubmit={props.changeDate}>
        <div className="date">
          <Calendar
            calendarClassName="calendar"
            value={selectDate}
            onChange={setSelectedDate}
            dateFormat={dateFormat}
            minDate={minDate}
            maxDate={utils().getToday()}
            inputPlaceholder="Select a date..."
          />
          <button className="submit-btn" type="submit">
            {/* Show Photo */}
            <FaSearch className="search-icon"/>
            {/* <BsSearch className="search-icon"/> */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Date;
