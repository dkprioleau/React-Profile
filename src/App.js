import profile from "./images/profile.jpg";
import './App.css';
import Display from "./components/Display"; //only needed the one ./ not ../
import {useState} from "react";

//--------------------------------------Counter---------------------

function App() {

  const [count,setCount]= useState(0); 
  /*count is the state and setCount is the item that allows us to update the current state 
  useState= 0 starts the initial state as 0*/

  function increaseCount(){ 
    setCount(prevCount => prevCount + 1)
  }
  /*this function says the updated function (setCount) will take the previous count and add 1 to that*/ 

  /*-----------------button function---------------------------------*/ 

  const [name,setName]=useState("My name is Danielle") //This is the state hook. What's in the parentheses is the initial state

  const clickSkills =()=>{ //This is the function for when skills is clicked
    setName("I'm a Frontend Developer")

  }

  const clickName =()=>{ //This is the funciton for when name is clicked
    setName("My name is Danielle")
  }

  return (
    <> 
    <div className="card">
      <img src={profile} alt="Danielle profile"/> 

      
      <h1>Hi!</h1>
    
        <div className="click"><Display click={name} /></div>

        <div className="btn">
          <button onClick={clickName}>Name</button>
          {/* calling the clickName function above when button is clicked */}
          <button onClick={clickSkills}>Skills</button>
          {/* calling the clickSkills function when button is clicked */}
        </div>

        <span>{count}<i onClick={increaseCount}className="fas fa-heart"></i> </span>
        {/* calling increaseCount function when heart is clicked */}
        <a href="https://www.linkedin.com/in/danielle-prioleau-8020b7161/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/dkprioleau" target="_blank" rel="noreferrer"> <i className="fab fa-github"></i></a>
    
    </div>

    </>
    
  );
}

export default App;
