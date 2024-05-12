import React,{useState} from 'react'
import './styles1.css'

function App() 
{

  const [display, setdisplay]=useState('');

  const addtoDisplay=(value)=>{
    setdisplay(display+value);
  }

  const lastdelete=()=>{
    setdisplay(display.slice(0,-1))
  }

  const clearDisplay=()=>{
    setdisplay('')
  }

  const evaluateExpression = () => {
    setdisplay(eval(display).toString());
  };

  return (
    <center>
      <div className='container'> 
        <div className='calculator'> 
          <form>
            <div className="display"> 
              <input type="text" value={display} readOnly/>
            </div>
            <br />
            <div>
              <input type="button" value="AC" onClick={() => clearDisplay()} className='solve' /> 
              <input type="button" value="DE" onClick={() => lastdelete()} className='solve'/>
              <input type="button" value="."  onClick={() => addtoDisplay('.')} className='solve' /> 
              <input type="button" value="/" onClick={() => addtoDisplay('/')} className='solve'/> 
            </div>
            <div>
              <input type="button" value="7" onClick={() => addtoDisplay('7')} />
              <input type="button" value="8" onClick={() => addtoDisplay('8')}/> 
              <input type="button" value="9" onClick={() => addtoDisplay('9')}/> 
              <input type="button" value="*" class='solve' onClick={() => addtoDisplay('*')}/> 
            </div>
            <div>
              <input type="button" value="4" onClick={() => addtoDisplay('4')}/> 
              <input type="button" value="5" onClick={() => addtoDisplay('5')}/> 
              <input type="button" value="6" onClick={() => addtoDisplay('6')}/> 
              <input type="button" value="-" class='solve' onClick={() => addtoDisplay('-')}/> 
            </div>
            <div>
              <input type="button" value="1" onClick={() => addtoDisplay('1')}/> 
              <input type="button" value="2" onClick={() => addtoDisplay('2')}/> 
              <input type="button" value="3" onClick={() => addtoDisplay('3')}/> 
              <input type="button" value="+" class='solve' onClick={() => addtoDisplay('+')}/> 
            </div>
            <div>
              <input type="button" value="00" onClick={() => addtoDisplay('00')}/> 
              <input type="button" value="0" onClick={() => addtoDisplay('0')}/>
              <input type="button" value="=" class='equal' onClick={() => evaluateExpression(display)}/> 
            </div>
          </form>
        </div>
      </div>
    </center>
  );
}

export default App;
// import React, { useState } from 'react';
// import './styles1.css';

// function Calculator() {
//   const [display, setDisplay] = useState('');

//   const addToDisplay = (value) => {
//     setDisplay(display + value);
//   };

//   const clearDisplay = () => {
//     setDisplay('');
//   };

//   const deleteLastCharacter = () => {
//     setDisplay(display.slice(0, -1));
//   };

//   const evaluateExpression = () => {
//     setDisplay(eval(display).toString());
//   };

//   return (
//     <div className="container">
//       <div className="calculator">
//         <form>
//           <div className="display">
//             <input type="text" value={display} readOnly />
//           </div>
//           <br />
//           <div>
//             <input type="button" value="AC" onClick={clearDisplay} className="solve" />
//             <input type="button" value="DE" onClick={deleteLastCharacter} className="solve" />
//             <input type="button" value="." onClick={() => addToDisplay('.')} className="solve" />
//             <input type="button" value="/" onClick={() => addToDisplay('/')} className="solve" />
//           </div>
//           <br />
//           <div>
//             {/* Other buttons */}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Calculator;

