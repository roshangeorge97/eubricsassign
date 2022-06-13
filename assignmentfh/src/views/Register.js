import { useState } from 'react'

function App() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function registerit(event){
        event.preventDefault()
        const response = await fetch('http://localhost:1440/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})
        const data = await response.json()
    }
   
    return(
       <>
       <div class="form">
        <form onSubmit={registerit}>
            <h1>Register</h1>
            <input type="text" placeholder="name"
             value={name}
             onChange={(e) => setName(e.target.value)}></input><br></br>
            <input type="email" placeholder="email"
            value={email}
             onChange={(e) => setEmail(e.target.value)}></input><br></br>
            <input type="password" placeholder="password"
            value={password}
             onChange={(e) => setPassword(e.target.value)}></input><br></br>
            <input type="submit"></input>
        </form>
       </div>      
       </>
    )

}

export default App;