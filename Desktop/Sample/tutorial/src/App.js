// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//     const [count, setCount] = useState(0);
//     const [update,setUpdate]= useState("RAM");
//     useEffect(() => {
//         // This function will be called after every render
//         console.log("Component has rendered");

//         // Clean-up function (optional)
//         return () => {
//             console.log("Clean-up function executed");
//         };
//     },[count]);

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <p>Update:{update}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() =>setUpdate("Sita")}>Update</button>
//         </div>
//     );
// }

// export default MyComponent;

// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//     const [count, setCount] = useState(0);
//     const [update, setUpdate] = useState("RAM");

//     useEffect(() => {
//         // This function will be called after every render
//         console.log("Component has rendered");

//         // Clean-up function (optional)
//         return () => {
//             console.log("Clean-up function executed");
//         };
//     }, [update]);

//     const toggleUpdate = () => {
//         setUpdate(update === "Sita" ? "RAM" : "Sita");
//     };

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <p>Update: {update}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={toggleUpdate}>Update</button>
//         </div>
//     );
// }

// export default MyComponent;

//import means accept and export means send

// import './App.css'
// import React, {createContext} from 'react'
// import ChildA from './ChildA'

// //what is useContext hook?
// //create,provider,usecontext

// const data1 = createContext()
// const data2 = createContext()

// function App() {
//   const name = "Avijit"
//   const gender = "Male"

//   return (
//     <div>
//       <data1.Provider value={name}>
//         <data2.Provider value={gender}>
//          <ChildA />
//          </data2.Provider> 
//       </data1.Provider>
//     </div>
//   )
// }

// export {data1,data2};
// export default App;
//-----------------------------------------------------------------------------------------------
// Manipulating the DOM allows developers to dynamically update the content or appearance 
// of a web page in response to user actions, data changes, or other events.
//use ref does not re render
//beautify the web page

// import './App.css'
// import React, { useState } from 'react'
// import { useRef } from 'react'

// function App(){

//   const refelement=useRef("")
//   const[name, setName]=useState("Avijit")

//   console.log(refelement)

//   function Reset(){
//     setName("")

//     refelement.current.focus();
//   }

//   function handleinput(){
//     refelement.current.style.color="red"
//   }

//   return (
//     <>
//     <h1>Learning UseRef</h1>
//     <input ref={refelement} type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
//     <button onClick={Reset}>Reset</button>
//     <button onClick={handleinput}>handleinput</button>
//     </>
//   )
// }

// export default App

// ============================================================================
// Use reducer
// ============================================================================
// import './App.css'
// import React, {useReducer} from 'react'

// const initialState=0
// const reducer=(state,action)=>{
//   switch(action){
//     case "Increment":
//     return state+1;

//     case "Decrement":
//     return state-1;

//     default:
//     return state
//   }
// }



// function Counter(){
//   const [count, dispatch] = useReducer(reducer,initialState)
//   return(
//     <div>
//       <div>Click={count}</div>
//       <button onClick={()=>dispatch("Increment")}>Incremenet</button>
//       <button onClick={()=>dispatch("Decrement")}>Decrement</button>
//     </div>
//   ) 
// }

// export default Counter

//===============================================================//
//USEMEMO
//=============================================================//

// import './App.css'
// import React,{useMemo, useState} from 'react'


// function App() {

//   const [add, setAdd] = useState(0)
//   const [minus, setMinus] = useState(100)

//   const solve=useMemo(function multiply(){
//     console.log("***************")
//     return add*10
//   })

//   return (
//     <div>
//       <h1>Leaning UseMemo</h1>
//       {solve}<br/>
//       <p>Add {add}</p>
//       <p>Substract {minus}</p>
//       <button onClick={() => setAdd(add + 1)}>Addition</button>
//       <button onClick={() => setMinus(minus - 1)}>Substraction</button>
//     </div>
//   )
// }


// export default App

//================
//PROPS//
//================
// import './App.css'
// import ChildA from './ChildA'
// import React from 'react'

// function App() {

//   const name="Raju"

//   return(
//     <>
//     <ChildA name={name} />
//     </>
//   )
// }

// export default App;

//=========================================//
//Controlled Components-->React will be controlling this
//=========================================//

import './App.css'
import React, { useState } from 'react'

function App() {

  const [name,setName]=useState("")
  const [pswd,setpswd]=useState("")

  // function handlechanges(e){
  //   console.log(e.target.value)
  //   setName(e.target.value)
  // }

  function handlechanges(e){
    if(e.target.name==="Firstname"){
      const capname=(e.target.value).toUpperCase();
      setName(capname)
    }

    else{
      setpswd(e.target.value)
    }
  }

  return (
    <>
      <form className='App'>
        <label>First name:</label><br/>
      {/* <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/> */}
      <input type="text" name='Firstname' value={name} onChange={handlechanges} /><br/>
      <label>Password:</label><br/>
      <input type="password" value={pswd} onChange={(handlechanges)}/><br/>
    </form >
    </>
  )
}

export default App

