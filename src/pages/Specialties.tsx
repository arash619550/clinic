import '../styles/common.scss'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
export default function Specialties() {
    const [specialties, setSpecialties] = useState<any[]>([])
    const [increaseSpecialties, setIncreaseSpecialties] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    useEffect(() => {
        const showSpecialties = async () => {
            try {
                const res = await axios.get('https://nowruzi.top/api/Clinic/specialties')
                setSpecialties(res.data)

            } catch (e) {
                console.log(e)
            }
        }
        showSpecialties()
    }, [])
    const increaseFunction = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post('https://nowruzi.top/api/Clinic/specialties', {
                name: increaseSpecialties,
            })
            setSpecialties(prev => [...prev, res.data])
            setIncreaseSpecialties("")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h2>لیست تخصص ها</h2>
            <p>تعداد دکتر</p>
            <ul>
                {specialties.map(item => <div className='div1' key={item.id}><span>{item.doctorsCount}</span> <li className='li' key={item.id}>{item.name}</li></div>)}
            </ul>
            <form onSubmit={increaseFunction}>
                <input type="text" placeholder='تخصص جدید' value={increaseSpecialties} onChange={e => setIncreaseSpecialties(e.target.value)} ref={inputRef} />
                <button type='submit'>افزودن تخصص</button>
            </form>

        </>
    );
}
