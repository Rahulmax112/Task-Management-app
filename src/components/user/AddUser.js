import React, {useState} from "react";
import { Card } from "../UI/Card";
import "./AddUser.css"
import {Button} from "../UI/Button"
import { ErrorModal } from "./ErrorModal";

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")
  const[error, setError] = useState("")

  const addSubmitHandler = (e) => {
    e.preventDefault();

    if(enteredUsername.trim().length === 0){
     setError({headerTitle: "invalid UserName", description:"Please type the valid username!!"});
     return;
    }

    if (enteredAge < 1 || enteredAge > 120 || enteredAge.trim().length === 0) {
     setError({headerTitle: "invalid Age", description:"Please type the valid Age!!"});
     return;
    }

    props.onAddUser(enteredUsername, enteredAge)

    console.log(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  };


  const usernameHandler = (e) => {
    setEnteredUsername(e.target.value)
  }

  const ageHandler = (e) => {
    setEnteredAge(e.target.value)
  }


  const ConfirmHandler = () => {
    setError(null)
  }


  return (
    <div>
    { error && <ErrorModal headerTitle={error.headerTitle} description={error.description} onConfirm={ConfirmHandler}/>}
    <Card>
    <form onSubmit={addSubmitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" value={enteredUsername} onChange={usernameHandler} />
      <label htmlFor="age"> Age (years) </label>
      <input id="age" type="number" value={enteredAge} onChange={ageHandler} />
      <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
  );
};

export { AddUser };
