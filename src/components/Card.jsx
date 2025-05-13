import style from '../styles/card.module.css'
import { MdToggleOff, MdToggleOn } from "react-icons/md";



function Card(props){
   return (
    <div className={`${style.card} ${props.mode ? style.cardDark : style.cardLight}`}>
        <div className={style.top}>
            <div className={style.icon}>
                <img src={props.logo} alt={props.name} />
            </div>
            <div className={style.right}>
                <h3 className={props.mode ? style.h3Dark : style.h3Light}>{props.name}</h3>
                <p className={props.mode ? style.pDark : style.pLight}>{props.description}</p>
            </div>
        </div>

        <div className={style.bottom}>
            <button 
            className={`${style.remove} ${props.mode ? style.removeDark : style.removeLight}`}
            onClick={()=>props.handleRemove(props.name)}
            >Remove</button>
            <button 
            onClick={()=>props.handleToggle(props.name)}
            className={style.toggle}>
                {
                    props.isActive ? <MdToggleOn size={50} color= {props.mode ? "var(--Red-500)":"var(--Red-700)"}/>
                                   : <MdToggleOff size={50} color= {props.mode ? "var(--Neutral-600)" :"var(--Neutral-300)"}/> }
            </button>
        </div>
    </div>
   ) 
}

export default Card