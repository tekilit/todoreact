
import { useState } from 'react'

import Input from './Input'
import Button from './Button'

function App() {

  const [ text, setText ] = useState('')
  const [ todoList, setTodoList ] = useState([])

  //  El botón tendrá el texto ADD y si el input está vacío el botón estará desactivado.
  
  const [ buttonOff, setButtonOff] = useState(true)


  const handleChange = event => setText(event.target.value)
  

  const addTodo = () => {
    const newTodoList= todoList.concat(text)
    setTodoList(newTodoList)

  }

  const valueText = text.length

  const ListTodo = [...todoList]

  const removeInputText = () => {setText('')}


 // const botonApagado = () =>  {
  //const numeroLetras=  valueText > 3? buttonOff : true
  //setButtonOff(numeroLetras)}



  console.log(valueText)
  //console.log(botonApagado)
  console.log('este es el texto', text)
  console.log('add', todoList)
  console.log('iniciar lista', ListTodo)


  return (
    <section>
      <div className="input">
        <Input onChange={handleChange} value={text} />
       <Button id="add" onClick={addTodo} text="ADD" />
        <Button id="clean" onClick={removeInputText} text="CLEAN" hidden={valueText < 1} />
      </div>
      <div id="show-list" > 
        <h2>Lista:</h2>
        <ul role="listbox">
          <li>
            <input type="checkbox" name="{item}" id="{item}"/> 
            <span>{ListTodo}</span>
          </li>
        </ul>
      </div>

    </section>
  );
}

export default App;
