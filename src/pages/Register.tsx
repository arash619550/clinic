import '../styles/login.scss'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    const navigate = useNavigate()
    const [mobile, setMobile] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const registerHandle = (e: React.FormEvent) => {
        e.preventDefault()
        try {
            axios.post('https://nowruzi.top/api/User/Register', {
                mobile: mobile,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
            navigate("/login")
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div className="div">
                <form onSubmit={registerHandle}>
                    <input type="text" placeholder="موبایل" value={mobile} onChange={e => setMobile(e.target.value)} />
                    <input type="password" placeholder="رمز عبور" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="text" placeholder="نام" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <input type="text" placeholder="فامیلی" value={lastName} onChange={e => setLastName(e.target.value)} />
                    <button type="submit">ثبت نام</button>
                </form>
            </div>
        </>
    )
}
