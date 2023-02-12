import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../assets/css/landing.css"
import register from '../assets/images/register.png'


const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSumit = async (event) => {
    event.preventDefault()
    if(name!=="" && email!=="" && password!==""){
    const response = await fetch("http://localhost:2000/api/register", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
        })
    })
    const data = await response.json()
    if (data.status === 'ok') {
      alert("User Registered")
			navigate('/login')
		}  
  }
    else{
      alert("Fill the details first")
    }
  }
  return (
    <div className="container">
      <form className="register-form">
      <h1 className="head">Register</h1>
        <input className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
          required
        /><br />
        <input className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter mail"
          required
        /><br />
        <input className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Enter Password"
          required
        /><br />
        <button className="btn" onClick={handleSumit}>Submit</button>
      </form>
      <div>
      <img src={register} alt="BigCo Inc. logo"/>
      </div>
    </div>
  );
}

export default Register;
