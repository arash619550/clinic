import '../styles/notFound.scss'
import { useNavigate } from "react-router-dom"
export default function NotFound() {
    const navigate = useNavigate()
    return (
        <>
            <div className='div-not-found'>
                <h2>
                    <span className='page-word'>صفحه</span> <span>مورد نظر موجود نیست !</span>
                </h2>
                <p onClick={() => navigate('/')}>بازگشت به صفحه اصلی</p>
            </div>
        </>
    )
}
