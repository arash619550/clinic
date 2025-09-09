import axios from "axios"
import React, { useEffect, useState } from "react"

export default function Schedules() {
    const [schedules, setSchedules] = useState<any[]>([])
    useEffect(() => {
        const schedulesFunction = async () => {
            try {
                const res = await axios.get('https://nowruzi.top/api/Clinic/schedules')
                setSchedules(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        schedulesFunction()
    }, [])
    return (
        <>
            <h2>برنامه‌ها</h2>
            <ul>
                {schedules.map(item => <>{item.isAvailable && <li key={item.doctor.id}><span>دکتر </span>{item.doctor.fullName}<span> روز کاری </span>{item.day}<span> بازه زمانی کار </span>{item.startTime}<span> الی </span>{item.endTimeDisplay}</li>}</>)}
            </ul >
        </>
    )
}
