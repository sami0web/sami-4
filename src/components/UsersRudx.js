import React from 'react';
import './UsersRudx.css';
import React, { useState, useEffect, useReducer  } from 'react';
import CardComponent from './CardComponent';
import UserReducer from './Store/Reducer';
import tab from './tab';


function UsersRudx() {


  const [Users, setUsers] = useState({});
  const [inputValue, setInputValue] = useState({first_name:' ',last_name:' '});


const Commencer= async () => {
  await  fetch('https://reqres.in/api/users/1')
    .then((response) => response.json())
    .then((data) => setUsers(data.data));}

    const handleInputChangefirst_name = (event) => {setInputValue({...inputValue,first_name:event.target.value});}
    const handleInputChangelast_name = (event) => {setInputValue({...inputValue,last_name:event.target.value});}
    const Modif=() => dispatch({ type: 'Modif',first_name:inputValue.first_name, last_name:inputValue.last_name })
    const Supr=() => dispatch({ type: 'Supr'})



 

const [state, dispatch] = useReducer(UserReducer,{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"});



 console.log( 'first_name:' + inputValue.first_name+' '+'last_name:'+inputValue.last_name  )
  return (
    <div className="cont">
      <h1 className="h1">Liste des utilisateurs</h1>
      {Users ? <p>{state.first_name} {state.last_name}</p> : <p>Loading...</p>}


      <div>
  
      <button onClick={() => Commencer()   } >Commencer</button>
   
         </div>
         

         <form >

         <input  type="text" id="input-text"  placeholder ='first name' 
          onChange={handleInputChangefirst_name} />

          <input  type="text" id="input-text" placeholder ='last name'
          onChange={handleInputChangelast_name} />
        
         </form>

  
       

  <table>
      <thead>
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>email</th>
          <th>image de prfl</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
         <tr>
            <td>{state.first_name}</td>
            <td>{state.last_name}</td>
            <td>{state.email}</td>
            <td> <img  className="img prfl"src={state.avatar}alt="image de prfl" /></td>
            <td><button onClick={Modif}>Modif</button></td>
            <td>   <button onClick={Supr}>Supr</button></td>


          </tr>
       
      </tbody>
       </table>















    
    </div>
  );
}

export default UsersRudx;