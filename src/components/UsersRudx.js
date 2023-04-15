import React from 'react';
import './Users.css';
import React, { useState, useEffect, useReducer  } from 'react';
import CardComponent from './CardComponent';
import UserReducer from './Store/Reducer';


function UsersRudx() {


  const [Users, setUsers] = useState({});
  const [inputValue, setInputValue] = useState({first_name:' ',last_name:' '});


const Commencer= async () => {
  await  fetch('https://reqres.in/api/users/1')
    .then((response) => response.json())
    .then((data) => setUsers(data.data));
}


 

const [state, dispatch] = useReducer(UserReducer,{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"});


  
  const handleInputChangefirst_name = (event) => {setInputValue({...inputValue,first_name:event.target.value});}
  const handleInputChangelast_name = (event) => {setInputValue({...inputValue,last_name:event.target.value});}



 const modif=() => dispatch({ type: 'Modif',first_name:"achraf", last_name:"sami" })
 const Supr=() => dispatch({ type: 'Supr'})

 console.log( 'first_name:' + inputValue.first_name+' '+'last_name:'+inputValue.last_name  )
  return (
    <div className="cont">
      <h1 className="h1">Liste des utilisateurs</h1>
      {Users ? <p>{state.first_name} {state.last_name}</p> : <p>Loading...</p>}
      <div>

      <button onClick={() => Commencer()   } >Commencer</button>
      <button onClick={modif}>Modif</button>
      <button onClick={Supr}>Supr</button>
         </div>


         <form onSubmit={modif}>

         <input  type="text" id="input-text"  placeholder ='first name' 
          onChange={handleInputChangefirst_name} />

        <input  type="text" id="input-text" placeholder ='last name'
        onChange={handleInputChangelast_name} />


          <button type="submit">Submit</button>

         </form>
         
         <CardComponent
              Name={Users.first_name + ' ' + Users.last_name}
              id={Users.id}
              Email={Users.email}
              img={Users.avatar}
            />




    
    </div>
  );
}

export default UsersRudx;