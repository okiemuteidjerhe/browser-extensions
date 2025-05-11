import style from '../styles/card.module.css'
import { MdToggleOff, MdToggleOn } from "react-icons/md";



function Card(props){
   return (
    <div className={style.card}>
        <div className={style.top}>
            <div className={style.icon}>
                <img src={props.logo} alt={props.name} />
            </div>
            <div className={style.right}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>

        <div className={style.bottom}>
            <button className={style.remove}>Remove</button>
            <button 
            onClick={()=>props.handleToggle(props.name)}
            className={style.toggle}>
                {
                    props.isActive ? <MdToggleOn size={"50px"} color="var(--Red-700)" />
                                   : <MdToggleOff size={"50px"} color="var(--Neutral-300)"/> }
            </button>
        </div>
    </div>
   ) 
}

export default Card