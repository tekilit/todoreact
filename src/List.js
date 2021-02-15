


//addToList y ListChecked
export default function List(props) {

    const { name, id, onClick, item } = props

    return (
        <li>
            <input type="checkbox" name={name} id={id} onClick={onClick}/> 
            <span>{item}</span>
        </li>
    )

}