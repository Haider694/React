import React from "react";
import {useState} from 'react';
import './App.css';

const data = [
  { id:1,name: 'Ram', email: 'ijdkdh@gamil.com', Destinetion: 'Gk market', Active: 'Active' },
  { id:2,name: 'Shaym', email: 'lakdj@gmail.com', Destinetion: 'jp nagar', Active: 'Active' },
  { id:3,name: 'Rohan', email: 'Rohane@gamil.com', Destinetion: 'rk market', Active: 'Active' },
  { id:4,name: 'Resham', email: 'Reshma@gamil.com', Destinetion: 'tp NAgear', Active: 'InActive' },
  { id:5,name: 'Hitesh', email: 'rahul.gupta@erelego.com', Destinetion: 'rajajinagar', Active: 'InActive' }
]

function App() {

  
  const [users, setUsers] = useState(data)
  
 const check=(event)=>{
  if (event.target.checked) {
    const u = data.filter((f)=>
      f.Active === 'Active'
   
    )
    setUsers(u)
    console.log(' Checkbox is checked');
    console.log(setUsers(u));
  } else {
    setUsers(data)
  }
  }
 
  const unCheck=(event)=>{
    if (event.target.checked) {
      const u = data.filter((f)=>
        f.Active === 'InActive'
     
      )
      setUsers(u)
      console.log(' Checkbox is checked');
      console.log(setUsers(u));
    } else {
      setUsers(data)
    }
    }
  
  return (
    <>
      <div className="App">
        <div className="cap">
          <h1>Add Employees Details</h1>
        </div>
        <table  >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email-id</th>
              <th>Destinetion</th>
              <th><span>Active<input type="checkbox" name="Active" id="myCheck" onChange={check}/>InActive<input type="checkbox" id="myCheck" onChange={unCheck} /></span></th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((m) => {

                  return (
                    <tr key={m.id}>
                      <td>{m.name}</td>
                      <td>{m.email}</td>
                      <td>{m.Destinetion}</td>
                      <td>{m.Active}</td>
                    </tr>
                  )
                
              })
            }

          </tbody>

        </table>
      </div>
    </>
  );
}

export default App;
