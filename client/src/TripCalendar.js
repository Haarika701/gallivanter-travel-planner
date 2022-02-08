import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list'
import React,{useState} from "react";
import {Button} from "@mui/material"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
export default function TripCalendar({plan}){

    const [showCalendar,setShowChalender] = useState(false)
    function  handleDateClick (arg) { 
        alert(arg.dateStr)
      }
      function handleCalendarClick(){
        setShowChalender((showCalendar) => !(showCalendar))
    }
    return (
        <div className="calendar-view">
            {showCalendar ?
               <Button variant="outlined"onClick = {handleCalendarClick}>Hide Calendar <CalendarTodayIcon></CalendarTodayIcon></Button> :
                      <Button variant="outlined"onClick = {handleCalendarClick}>Calendar<CalendarTodayIcon></CalendarTodayIcon></Button>
                    }
            
                    {showCalendar ? <FullCalendar
                    plugins={[ dayGridPlugin,interactionPlugin,listPlugin]}
                    dateClick={handleDateClick}
                    initialView="dayGridMonth"
                    events={
                        
                     [

                        {  
                        start: plan.trip_start ,
                        end: plan.trip_end ,
                        display: 'background' ,
                        title: plan.plan_name
                      
                        },
                        
                      ]
                     
                      }
                   /> :null
            
                    }
            </div>
    )
}