import style from '../styles/button.module.css'
export default function Button(props){
    return(
        <button
            style={props.isActive? {backgroundColor: 'var(--Red-700)', color: "white"}: null}
            className={style.btn} 
            onClick={()=> props.handleFiltering(props.text)}
        >
            {props.text}
        </button>
    )
}