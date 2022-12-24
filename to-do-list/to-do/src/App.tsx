import React, { useState, FC, useEffect } from 'react';
import './App.css'

const App : FC = () => {
  const [text, setText] = useState<number| string >("")
 const [ array1, setArray1 ] = useState<string[] | number[]>([]);


  const send  =  (a : number | string) : void => {
     setText(a);
     
  
  }
useEffect(() => {  array1  },[ array1 ])

console.log(text);

  const submit = () : void => {
    if (text !== ""){

      setArray1(( prev : any ) => ([...prev, text] ));
      setText("");
    }
  }
  
  
  
  const delete1 = (a : any) : void => {
   
       console.log(a)
    //  array1.forEach((e, i) => e === a ? delete array1[i] : null );
      a.remove();
   }
  
   

   
  


  return (
    <div className="App">
      <label htmlFor="task">Task:
        <input type="text" id="task" value={ text } onChange={ (e) => send(e.target.value)  }  />
        <button onClick={ submit } >Send</button>
     </label>
      {array1.map((e,i)=> (
        <div key={ i }>
        <p className={ `${i}`  }>{e}</p>
        <button onClick={ (e)=> delete1( e.target.parentElement ) }>Delete</button>
    </div>
      ))}
     

 

    </div>
  )
}

export default App;

