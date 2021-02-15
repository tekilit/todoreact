

export default function Input(props){
 
    const { onChange, text, value } = props
   return (
       <input value={value} onChange={onChange} placeholder="type something">{text}</input>
   )
}