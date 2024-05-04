// import React, {useContext} from "react";
// import {data1,data2} from './App'

// function ChildC(){

//     const x=useContext(data1)
//     const y=useContext(data2)
    
//     return (
//         <>
//         <h1>Hi my name is {x} and my gender is {y} </h1>
//         </>
//     )
// }

// export default ChildC;

import React from 'react'

function ChildC({name}){

    return(
        <h1>My name is {name}</h1>
    )
}

export default ChildC
