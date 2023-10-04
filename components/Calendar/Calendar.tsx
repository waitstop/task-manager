"use client"


import './Calendar.scss'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import ruLocale from "@fullcalendar/core/locales/ru"
import {useEffect, useRef, useState} from "react";
import {Calendar as TimePicker} from "@/components/ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {format} from "date-fns";
import {Button} from "@/components/ui/button";
import {ru} from "date-fns/locale";
import FullCalendar from "@fullcalendar/react";
import {Calendar as CalendarType} from "@fullcalendar/core";

const Calendar = (props: React.HTMLProps<any>) => {
    const calendarRef = useRef<any | null>(null)
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    const handleTimepicker = (date: Date | undefined) => {
        if (!date) return
        setSelectedDate(date)
    }
    useEffect(() => {
        if (!calendarRef.current) return
        const calendar: CalendarType = calendarRef.current.calendar
        calendar.gotoDate(selectedDate)
        calendar.select(selectedDate)
    }, [selectedDate])

    return (
        <div className={`calendar ${props.className}`}>

            <div className={"mb-6"}>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"border"}>
                            {selectedDate ? format(selectedDate, "PPP", {locale: ru}) : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <TimePicker mode={"single"}
                                    locale={ru}
                                    selected={selectedDate}
                                    onSelect={handleTimepicker}/>
                    </PopoverContent>
                </Popover>
            </div>

            <FullCalendar
                ref={calendarRef}
                initialDate={selectedDate}
                locale={ruLocale}
                firstDay={1}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable
                viewClassNames={"calendar__view"}
                headerToolbar={false}
            />
        </div>
    )
}

export default Calendar