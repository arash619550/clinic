import '../styles/common.scss'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
export default function Specialties() {
    const [patients, setPatients] = useState<any[]>([])
    const [increasePatients, setIncreasePatients] = useState<string>("")
    const [increasePatientsFamily, setIncreasePatientsFamily] = useState<string>("")
    const [increasePatientsPhoneNumber, setIncreasePatientsPhoneNumber] = useState<string>("")
    const [increasePatientsNationalCode, setIncreasePatientsNationalCode] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    useEffect(() => {
        const showpatients = async () => {
            try {
                const res = await axios.get('https://nowruzi.top/api/Clinic/patients')
                setPatients(res.data)

            } catch (e) {
                console.log(e)
            }
        }
        showpatients()
    }, [])
    const increaseFunction = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post('https://nowruzi.top/api/Clinic/patients', {
                firstName: increasePatients,
                LastName: increasePatientsFamily,
                PhoneNumber: increasePatientsPhoneNumber,
                NationalCode: increasePatientsNationalCode,
            })

            setPatients(prev => [...prev, res.data])
            setIncreasePatients("")

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h2>لیست بیمار ها</h2>
            <p>تعداد بیمار</p>
            <ul>
                {patients.map(item => item.appointmentsCount > 0 && <div className='div1' key={item.id}><span>{item.id}</span> <li className='li' key={item.id}>{item.firstName + " " + item.lastName}&nbsp;&nbsp;&nbsp;<span>کد ملی : </span>{item.nationalCode} <span>شماره موبایل : </span>{item.phoneNumber} <span>تاریخ  تولد </span>{item.dateOfBirth} <span>سن </span>{item.age}<span> سن </span>{item.gender == "1" ? "مرد" : "زن"}<span> آدرس </span>{item.address}<span> تاریخ ثبت نام </span>{item.registrationDate}<span> قرار ملاقات ساعت </span>{item.appointmentsCount}</li></div>)}
            </ul>
            <form onSubmit={increaseFunction}>
                <input type="text" placeholder='اسم' value={increasePatients} onChange={e => setIncreasePatients(e.target.value)} ref={inputRef} />
                <input type="text" placeholder='فامیلی' value={increasePatientsFamily} onChange={e => setIncreasePatientsFamily(e.target.value)} />
                <input type="tel" placeholder='موبایل' value={increasePatientsPhoneNumber} onChange={e => setIncreasePatientsPhoneNumber(e.target.value)} />
                <input type="tel" placeholder='کد ملی' value={increasePatientsNationalCode} onChange={e => setIncreasePatientsNationalCode(e.target.value)} />
                <button type='submit'>افزودن تخصص</button>
            </form>

        </>
    );
}
