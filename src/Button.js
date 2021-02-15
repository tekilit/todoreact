
export default function Button(props) {

    const { onClick, text, hidden, value } = props
    return(
     <button onClick={onClick}  hidden={hidden}  value={value}>{text}</button>
    
     
    )
}