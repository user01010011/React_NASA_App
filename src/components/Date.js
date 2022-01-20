import React, { useState} from "react"; 
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Calendar, { utils } from "react-modern-calendar-datepicker"; 

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
        <div class="date-form">
            <form onSubmit={props.changeDate}>
                <div class="date">
                    <Calendar
                        class="calendar"
                        value={selectDate}
                        onChange={setSelectedDate}
                        dateFormat={dateFormat}
                        minDate={minDate}
                        maxDate={utils().getToday()}
                        placeholder="Select a date"
                    />
                    <button class="submit" type="submit">Show Photo</button>
                </div>
            </form>
        </div>
    )
}

export default Date;