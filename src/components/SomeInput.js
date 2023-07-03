
import { useState} from "react"; 

const SomeInput = (props) => {
const [enteredName, setEnteredName] = useState("") 
const [wasNameInputToched, setWasNameInputToched]  = useState(false) 
const [isFormValid,setIsFormValid] = useState();

const isEnteredNameValid = enteredName.trim() !== ''
const isNameInputInvalid = !isEnteredNameValid && wasNameInputToched

const nameInputChangeHandler = (event) => {
  setEnteredName(event.target.value)
  } 
const nameinputLostFocusHandler = (event) => {
  setWasNameInputToched(true)
}

const formSubmitHandler = (event) => {
  event.preventDefault();
  setWasNameInputToched(true)

if (! isEnteredNameValid ){
return;
}
  console.log(enteredName)
  setEnteredName('')
  setWasNameInputToched(false)

}


const nameInputClasses = isNameInputInvalid ? "form-control  invalid" : "form-control"

  return (
    <form onSubmit= {formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input type="text" id="name" onChange = {nameInputChangeHandler} 
        value={enteredName} onBlur={nameinputLostFocusHandler}  />
        {isNameInputInvalid && <p className="error-text">Введите имя</p>}
      </div>
      <div className="form-actions">
        <button >Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;




/* import { useState, useRef } from "react"; 

const SomeInput = (props) => {

  const nameInputRef=useRef()
 
const [enteredName, setEnteredName] = useState("") 
const [isEnteredNameValid, setIsEnteredNameValid] = useState(false)
const [wasNameInputToched, setWasNameInputToched]  = useState(false) 

const nameInputChangeHandler = (event) => {
  setEnteredName(event.target.value)
} 
const nameinputLostFocusHandler = (event) => {
  setWasNameInputToched(true)
  if (enteredName.trim() === ""){
    setIsEnteredNameValid(false);
  return;
  }
}

const formSubmitHandler = (event) => {
  event.preventDefault();
  setWasNameInputToched(true)

if (enteredName.trim() === ""){
  setIsEnteredNameValid(false);
return;
}
setIsEnteredNameValid(true);


  console.log(enteredName)
  console.log(nameInputRef.current.value)
  setEnteredName('') */
/*   nameInputRef.current.value= "";  not best practice*/
/* }

const isNameInputInvalid = !isEnteredNameValid && wasNameInputToched
const nameInputClasses = isNameInputInvalid ? "form-control  invalid" : "form-control"

  return (
    <form onSubmit= {formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input ref={nameInputRef} type="text" id="name" onChange = {nameInputChangeHandler} 
        value={enteredName} onBlur={nameinputLostFocusHandler}  />
        {isNameInputInvalid && <p className="error-text">Введите имя</p>}
      </div>
      <div className="form-actions">
        <button >Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
 */