import { useEffect, useState } from 'react'
import '../styles/common.scss'
import axios from 'axios'
export default function Appointments() {
    const [appointments, setAppointments] = useState<any[]>([])
    useEffect(() => {
        const appointmentsFunction = async () => {
            try {
                const res = await axios.get('https://nowruzi.top/api/Clinic/appointments')
                setAppointments(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        appointmentsFunction()
    }, [])
    return (
        <>
            <h2>قرار ملاقات ها</h2>
            <ul>
                {appointments.map((item, index) => <>{item.doctorSchedule.isAvailable && <li key={index}><span>اسم بیمار : </span>{item.patient.fullName}<span> نام دکتر : </span>{item.doctorSchedule.doctor.fullName}<span> در روز </span>{item.doctorSchedule.dayDisplay}<span> و ساعت </span>{item.doctorSchedule.startTimeDisplay}<span> الی </span>{item.doctorSchedule.endTimeDisplay}<span> </span></li>}</>)}
            </ul>
        </>
    )
}
