import axios from "axios"
import React, { useEffect, useState } from "react"

export default function Schedules() {
    const [schedules, setSchedules] = useState<any[]>([])
    const [doctorId, setDoctorId] = useState<string>("")
    const [day, setDay] = useState<string>("2025-09-09");
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");

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
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await axios.post('https://nowruzi.top/api/Clinic/schedules', {
                doctorId: doctorId,
                day: day,
                startTime: startTime,
                endTime: endTime
            })
            const res = await axios.get('https://nowruzi.top/api/Clinic/schedules')
            setSchedules(res.data)
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <h2>برنامه‌ها</h2>
            <ul>
                {schedules.map(item => <>{item.isAvailable && <li className="li" key={item.doctor.id}><span>دکتر </span>{item.doctor.fullName}<span> روز کاری </span>{item.day}<span> بازه زمانی کار </span>{item.startTime}<span> الی </span>{item.endTimeDisplay}</li>}</>)}
            </ul >
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="آی دی دکتر" value={doctorId} onChange={e => setDoctorId(e.target.value)} />
                <input type="date" placeholder="روز" value={day} onChange={e => setDay(e.target.value)} />
                <input type="time" placeholder="زمان شروع" value={startTime} onChange={e => setStartTime(e.target.value)} />
                <input type="time" placeholder="زمان پایان" value={endTime} onChange={e => setEndTime(e.target.value)} />
                <button type="submit">ثبت برنامه</button>
            </form>
        </>
    )
}
