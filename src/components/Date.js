import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Calendar, { utils } from "react-modern-calendar-datepicker";
import { BsSearch } from "react-icons/bs";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import "../App.css";

const Date = (props) => {
  const [selectDate, setSelectedDate] = useState("");
  const dateFormat = () => {
    if (!selectDate) return "";
    return `${selectDate.year}/${selectDate.month}/${selectDate.day}`;
    // let format = `${selectDate.year}/${selectDate.month}/${selectDate.day}`;
    // return `${selectDate.year}-${selectDate.month}-${selectDate.day}`;
    // return `${selectDate().toLocaleDateString().replace(/\//g, '-')}`
    // return format().toLocaleDateString().replace(/\//g, '-')
    // selectDate = selectDate.strptime('%Y-%m-%d')
    // return `${selectDate.strptime('%Y-%m-%d')}`
    // return format.toLocaleString().replace("/", "-");
    // return selectDate.toISOString();
  };
  const minDate = {
    year: 1995,
    month: 6,
    date: 16,
  };

  // console.log(dateFormat(selectDate));

  // const clearSearch = () => {
  //   setSelectedDate();
  // };

  return (
    <div className="date">
      <form onSubmit={props.changeDate}>
        <div className="date-container">
          {/* <button className="delete-btn" id="delete-btn">
            <FaTimesCircle className="delete-icon" />
          </button> */}
          <Calendar
            calendarClassName="calendar"
            value={selectDate}
            onChange={setSelectedDate}
            dateFormat={dateFormat}
            minDate={minDate}
            maxDate={utils().getToday()}
            // inputPlaceholder="Select a date..."
            inputPlaceholder="Look up photo of the day..."
          />
          <button className="submit-btn" id="submit-btn" type="submit">
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
