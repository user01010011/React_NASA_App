import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Calendar, { utils } from "react-modern-calendar-datepicker";
import { BsSearch } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import "../App.css";

const Date = (props) => {
  const [selectDate, setSelectedDate] = useState("");
  const formatDate = () => {
    if (!selectDate) return "";
    return `${selectDate.year}/${selectDate.month}/${selectDate.day}`;
    // selectDate = selectDate.strptime('%Y-%m-%d')
    // return selectDate.toISOString();
  };
  const minDate = {
    year: 1995,
    month: 6,
    date: 16,
  };

  // console.log(dateFormat(selectDate));

  return (
    <div className="date">
      <form onSubmit={props.changeDate}>
        <div className="date-container">
          <Calendar
            calendarClassName="calendar"
            value={selectDate}
            onChange={setSelectedDate}
            dateFormat={formatDate}
            minDate={minDate}
            maxDate={utils().getToday()}
            // inputPlaceholder="Select a date..."
            inputPlaceholder="Look up photo of the day..."
          />
          <button className="submit-btn" type="submit">
            {/* Search Photo */}
            <FaSearch className="search-icon" />
            {/* <BsSearch className="search-icon"/> */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Date;
