// import React, { useEffect, useState } from 'react'

// function Form() {

//     const data = { name: "", email: "", password: "" }
//     const [inputData, setinputData] = useState(data)
//     const [flag, setFlag] = useState(false)

//     useEffect(() => {
//         console.log("Registered")
//     }, [flag])

//     function handledata(e) {
//         //previous state ko store karke rakho but uske saath e.target.name ko as a key lo and iske andar jo value hai woh store karo
//         setinputData({ ...inputData, [e.target.name]: e.target.value })
//         console.log(e.inputData)
//     }

//     function handlesubmit(e) {
//         e.preventDefault()

//         if (!inputData.name || !inputData.email || !inputData.password) {
//             alert("All fields are mandatory")
//         }

//         else {
//             setFlag(true)
//         }
//     }
//     return (
//         <>
//             <pre>{(flag) ? <h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully</h2> : ""}</pre>
//             <form className='container' onSubmit={handlesubmit}>
//                 <div className='header'>
//                     <h1>Registration Form</h1>
//                 </div>

//                 <div>
//                     <input type='text' placeholder='Enter your name' name='name' value={inputData.name} onChange={handledata}></input>
//                 </div>

//                 <div>
//                     <input type='text' placeholder='Enter your email' name='email' value={inputData.email} onChange={handledata}></input>
//                 </div>

//                 <div>
//                     <input type='text' placeholder='Enter your password' name='password' value={inputData.password} onChange={handledata}></input>
//                 </div>

//                 <button type='submit'>Submit</button>

//             </form>
//         </>
//     )
// }

// export default Form

import React, { useEffect, useState } from "react";

const Form = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered Successfully");
  }, [flag]);

  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevents default form submission behavior
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
    <pre>{(flag)?<h1 className="ui-define">Hello {inputData.name}, You've Successfully registered</h1>:""}</pre>
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <div>
          <div className="my-4">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name='name'
              value={inputData.name}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter email"
              name='email'
              value={inputData.email}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter password"
              name='password'
              value={inputData.password}
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;