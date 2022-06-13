
const App = () => {

    /*const getAPI =async () => {
      const response = await fetch("https://api.facthunt.in/fostergem/v1/post/list/public")
      const jsonData = await response.json();
      //console.log(jsonData)
        setFake(jsonData.content)
    }*/
    
    return (
      <>
      <div class="header">
        <h3>ASSIGNMENT</h3>
        <button className='login-btn'>Login</button>
        <button className='reg-btn'>Register</button>
      </div>
      <div class="contents">
         <div className='b'>
          <h3>Health and Hygiene</h3>
         </div>
         <div className='b'>
          <h3>Communication Skills</h3>
         </div>
         <div className='b'>
          <h3>Preasentation Skills</h3>
         </div>
         <div className='b'>
          <h3>Technical Skills</h3>
         </div>
         <div className='ab'> 
          <h3>Physical Appearance</h3>
         </div>
      </div>
   </>
   )
    }
  
  export default App;