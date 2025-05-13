import style from '../styles/header.module.css'
import Icon from '../assets/images/logo.svg'
import Sun from '../assets/images/icon-sun.svg'
import moon from '../assets/images/icon-moon.svg'

export default function Header(props) {
    return (
        <header>
            <div className="icon">
                <img src={Icon} />
            </div>

            <button 
            onClick={()=>props.handleMode()}
            className={`${style.themeBtn} ${props.mode? style.themeBtnDark : style.themeBtnLight}`}
            >
                <img src={props.mode? Sun : moon} alt='moon'/>
            </button>
        </header>
    )
}