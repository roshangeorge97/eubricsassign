import { useState } from 'react'


function App() {

     const [email1,setEmail1] = useState("")
     const [password1, setPassword1] = useState("")

           


    return(
       <>
       <div class="form">
        <form>
            <h1>Login</h1>
            <input type="email" placeholder="email"
            value={email1}
             onChange={(e) => setEmail1(e.target.value)}></input><br></br>
            <input type="password" placeholder="password"
            value={password1}
             onChange={(e) => setPassword1(e.target.value)}></input><br></br>
            <input type="submit"></input>
        </form>
       </div>      
       </>
    )

}
export default App;