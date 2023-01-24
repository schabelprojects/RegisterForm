import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {

    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [emailadress, setEmailAdress] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const navigate = useNavigate();

    const registerUser = () => {
        fetch(`http://localhost:8080/users`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                firstname: firstname,
                middlename: middlename,
                lastname: lastname,
                age: age,
                emailadress: emailadress,
                mobilenumber: mobilenumber
            }),
        })
        .then((response) => response.json())
        .then(() => {
            setUsername(""),
            setFirstname(""),
            setMiddlename(""),
            setLastname(""),
            setAge(0),
            setEmailAdress(""),
            setMobilenumber("")
        })
        navigate("/")
        alert("Thank you for registering!")
    }




  return (
    <>
      <div className="overlay-bg">
        <div className="form">
          <div className="form-body">
            <div className="form_container">
              <label htmlFor="username" className="form_label">Username: </label>
              <input onChange={(e) => setUsername(e.target.value)} className="form_input" type="text" id="username"/>
            </div>
            <div className="form_container">
              <label htmlFor="firstname" className="form_label">Firstname: </label>
              <input onChange={(e) => setFirstname(e.target.value)} className="form_input" type="text" id="firstname" />
            </div>
            <div className="form_container">
              <label htmlFor="middlename" className="form_label">Middlename: </label>
              <input onChange={(e) => setMiddlename(e.target.value)} className="form_input" type="text" id="middlename" />
            </div>
            <div className="form_container">
              <label htmlFor="lastname" className="form_label">Lastname: </label>
              <input onChange={(e) => setLastname(e.target.value)} className="form_input" type="text" id="lastname" />
            </div>
            <div className="form_container">
              <label htmlFor="age" className="form_label">Age: </label>
              <input onChange={(e) => setAge(e.target.valueAsNumber)} className="form_input" type="number" id="age" />
            </div>
            <div className="form_container">
              <label htmlFor="emailadress" className="form_label">Emailadress: </label>
              <input onChange={(e) => setEmailAdress(e.target.value)} className="form_input" type="text" id="emailadress" />
            </div>
            <div className="form_container">
              <label htmlFor="mobilenumber" className="form_label">Mobilenumber: </label>
              <input onChange={(e) => setMobilenumber(e.target.value)} className="form_input" type="text" id="mobilenumber"/>
            </div>
            <div className="reg_btn">
              <button type="submit" className="btn" onClick={registerUser}>Register</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
