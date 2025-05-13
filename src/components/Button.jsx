import style from '../styles/button.module.css'
export default function Button(props){
    return(
        <button
        style={props.isActive? {backgroundColor: /* props.mode ? 'var(--Red-400)' :*/ 'var(--Red-700)', color: props.mode?"var(--Neutral-900)":"var(--Neutral-0"}: null}
        className={`${style.btn} ${props.mode? style.btnDark: style.btnLight}`} 
        onClick={()=> props.handleFiltering(props.text)}
        >
            {props.text}
        </button>
    )
}