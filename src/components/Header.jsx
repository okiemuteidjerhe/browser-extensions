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

            <button className={style.themeBtn}>
                <img src={moon} alt='moon'/>
            </button>
        </header>
    )
}