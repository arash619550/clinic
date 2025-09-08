import React, { useEffect, useId, useState } from 'react'
import '../styles/common.scss'
import axios from 'axios'
export default function Doctors() {
    const uniqueId = useId()
    const [doctors, setDoctors] = useState<any[]>([])
    const [gender, setGender] = useState<number>()
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [medicalLicenseNumber, setMedicalLicenseNumber] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    useEffect(() => {
        const doctorsFunction = async () => {
            try {
                const res = await axios.get('https://nowruzi.top/api/Clinic/doctors')
                setDoctors(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        doctorsFunction()
    }, [])
    const handleDoctors = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await axios.post('https://nowruzi.top/api/Clinic/doctors', {
                specialtyId: 1,
                firstName: firstName,
                lastName: lastName,
                medicalLicenseNumber: medicalLicenseNumber,
                phoneNumber: phoneNumber,
                gender: gender
            })
            const res = await axios.get('https://nowruzi.top/api/Clinic/doctors')
            setDoctors(res.data)
            setFirstName('')
            setLastName('')
            setMedicalLicenseNumber('')
            setPhoneNumber('')
        } catch (e) {
            console.log((e));
        }
    }

    return (
        <>
            <h2>لیست دکتر ها</h2>
            <ul>
                {doctors.map(item => <div key={item.id}><li>{item.fullName}<span> با شماره مجوز پزشکی </span>{item.medicalLicenseNumber}<span> تلفن </span>{item.phoneNumber}<span> تخصص </span>{item.specialty.name}</li></div>)}
            </ul>
            <form onSubmit={handleDoctors}>
                <input type="text" placeholder='اسم' value={firstName} onChange={e => setFirstName(e.target.value)} />
                <input type="text" placeholder='فامیلی' value={lastName} onChange={e => setLastName(e.target.value)} />
                <input type="text" placeholder='شماره مجوز پزشکی' value={medicalLicenseNumber} onChange={e => setMedicalLicenseNumber(e.target.value)} />
                <input type="text" placeholder='موبایل' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <label htmlFor={`${uniqueId}-male`}>مرد</label>
                        <input type="radio" name="gender" id={`${uniqueId}-male`} onClick={() => setGender(1)} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <label htmlFor={`${uniqueId}-female`}>زن</label>
                        <input type="radio" name="gender" id={`${uniqueId}-female`} onClick={() => setGender(2)} />
                    </div>
                </div>
                <button>ثبت</button>
            </form>
        </>
    )
}
