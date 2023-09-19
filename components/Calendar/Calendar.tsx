"use client"
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from "@fullcalendar/react";
import ruLocale from "@fullcalendar/core/locales/ru"
import './Calendar.scss'
import {HTMLProps} from "react";

const Calendar = (props: HTMLProps<any>) => {
    return (
        <div className={`calendar ${props.className}`}>
            <FullCalendar
                locale={ruLocale}
                firstDay={1}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable
                viewClassNames={"calendar__view"}
                headerToolbar={{
                    right: "today,prev,next",
                    left: "dayGridWeek,dayGridMonth",
                    center: "title"
                }}
            />
        </div>
    )
}

export default Calendar