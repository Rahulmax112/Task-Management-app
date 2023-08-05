import { useState } from 'react';
import "./App.css";
import { AddUser } from "./components/user/AddUser";
import { UserDisplay } from "./components/user/UserDisplay";

function App() {

  const [user, setUser] = useState([])


  const addUserHandler = (uName, uAge) => {

    setUser([...user, {name : uName, age: uAge}])

  }

  return (
    <>
      <div className="App">
        <AddUser  onAddUser = {addUserHandler}/>
        <UserDisplay  users = {user}/>
      </div>
    </>
  );
}

export default App;
