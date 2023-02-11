import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSumit = async (event) => {
    event.preventDefault()
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
			navigate('/login')
		}
  }
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        /><br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter mail"
        /><br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Enter Password"
        /><br />
        <button onClick={handleSumit}>Submit</button>
      </form>
    </div>
  );
}

export default Register;
