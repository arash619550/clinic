import './styles/reset.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { createContext, useState } from 'react';
import Specialties from './pages/Specialties';
import Patients from './pages/Patients'
import Register from './pages/Register';
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments';
/**
 * کامپوننت اصلی برنامه
 * 
 * این کامپوننت شامل:
 * - تنظیمات Router
 * - تعریف مسیرهای مختلف برنامه
 * - استفاده از Layout برای تمام صفحات
 * 
 * مسیرهای موجود:
 * - /: داشبورد اصلی
 * - /patients: مدیریت بیماران
 * - /doctors: مدیریت پزشکان
 * - /appointments: مدیریت نوبت‌ها
 * - /specialties: تخصص‌های پزشکی
 * - /schedules: برنامه‌های کاری
 * - /reports: گزارشات
 * - /settings: تنظیمات
 * 
 * @returns {JSX.Element} ساختار اصلی برنامه
 */
type Login = {
    login: boolean
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}
export const LoginContext = createContext<Login | null>(null)
function App() {
    const [login, setLogin] = useState<boolean>(false)
    return (
        <LoginContext.Provider value={{ login, setLogin }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="/patients" element={<Patients></Patients>} />
                        <Route path="/doctors" element={<Doctors></Doctors >} />
                        <Route path="/appointments" element={<Appointments></Appointments>} />
                        <Route path="/specialties" element={<Specialties></Specialties>} />
                        <Route path="/schedules" element={<div>صفحه برنامه‌ها</div>} />
                        <Route path="/reports" element={<div>صفحه گزارشات</div>} />
                        <Route path="/settings" element={<div>صفحه تنظیمات</div>} />
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route path='/register' element={<Register></Register>}></Route>
                    </Route>
                </Routes>
            </Router>
        </LoginContext.Provider>
    );
}

export default App;
