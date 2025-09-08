import '../styles/login.scss'
import { useContext } from 'react'
import { LoginContext } from '../App'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
// const navigate = useNavigate()
export default function Login() {
    const loginResult = useContext(LoginContext);
    if (!loginResult) return null;
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // const res = await axios.get('');
            loginResult.setLogin(true);
        } catch (e) {
            console.error(e);
            <Dashboard></Dashboard>
        }
    }
    return (
        <>
            {loginResult.login ?
                <h2>شما وارد شده‌اید ✅</h2>
                :
                <div className="div">
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="ایمیل : " /><br />
                        <input type="password" placeholder="رمز عبور : " />
                        <button type="submit">ورود</button>
                    </form>
                </div >
            }
        </>
    )
}
