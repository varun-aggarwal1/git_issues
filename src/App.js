import logo from './logo.svg';
import './App.css';
import Issues from './components/Issues';
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState(false);
  const [star,setStar] = useState(false);

  const handleChange=(e)=>{
    e.preventDefault();
    if(star==false){
      setStar(true)
    }
    else{
      setStar(false)
    }
    if(star==true)
   { e.target.style.backgroundColor = "green";}
   else{
     e.target.style.backgroundColor = "red";
   }

  }
  return (<>
   <button style ={{"float":"right"}} onClick={(e)=>{handleChange(e)}}>fork</button>
   <button style ={{"float":"right"}} onClick={(e)=>handleChange(e)}>Star</button>
    <Issues/>
   
    </>
  );
}

export default App;
