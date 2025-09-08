import '../styles/login.scss';
import { useContext, useState } from 'react';
import { LoginContext } from '../App';
import axios from 'axios';
import Dashboard from './Dashboard';
export default function Login() {
    const [mobile, setMobile] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const loginResult = useContext(LoginContext);
    if (!loginResult) return null;
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('https://nowruzi.top/api/User/Login', {
                mobile,
                password
            });
            loginResult.setLogin(true);
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <>
            {loginResult.login ? <>
                <Dashboard />
            </> : <>
                <div className="div">
                    <form onSubmit={handleSubmit}>
                        <input type="tel" placeholder=": موبایل" value={mobile} onChange={e => setMobile(e.target.value)} /><br /><input type="password" placeholder="رمز عبور :" value={password} onChange={e => setPassword(e.target.value)} /><br />
                        <button type="submit">ورود</button>
                    </form>
                </div>
            </>
            }
        </>
    );
}
