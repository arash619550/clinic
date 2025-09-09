import React, { useEffect, useState } from 'react'
import '../styles/common.scss'
import axios from 'axios'
export default function Appointments() {
    const [appointments, setAppointments] = useState<any[]>([])
    const [patientId, setPatientId] = useState<string>("")
    const [doctorScheduleId, setDoctorScheduleId] = useState<string>("")
    const [reason, setReason] = useState<string>("")
    const [notes, setNotes] = useState<string>("")
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await axios.post('https://nowruzi.top/api/Clinic/appointments', {
                patientId: patientId,
                doctorScheduleId: doctorScheduleId,
                reason: reason,
                notes: notes
            })
            const res = await axios.get('https://nowruzi.top/api/Clinic/appointments')
            setAppointments(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <h2>قرار ملاقات ها</h2>
            <ul>
                {appointments.map((item, index) => <>{item.doctorSchedule?.isAvailable && <li key={index}><span>اسم بیمار : </span>{item.patient?.fullName}<span> نام دکتر : </span>{item.doctorSchedule?.doctor?.fullName}<span> در روز </span>{item.doctorSchedule?.dayDisplay}<span> و ساعت </span>{item.doctorSchedule?.startTimeDisplay}<span> الی </span>{item.doctorSchedule?.endTimeDisplay}<span> </span>{item.doctorScheduleId}</li>}</>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='آی دی بیمار' value={patientId} onChange={e => setPatientId(e.target.value)} />
                <input type="text" placeholder='شناسه پزشک' value={doctorScheduleId} onChange={e => setDoctorScheduleId(e.target.value)} />
                <input type="text" placeholder='نوع بیماری' value={reason} onChange={e => setReason(e.target.value)} />
                <input type="text" placeholder='یادداشت' value={notes} onChange={e => setNotes(e.target.value)} />
                <button type='submit'>افزودن نوبت</button>
            </form>
        </>
    )
}
