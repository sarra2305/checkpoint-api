import React from "react";
import { Table } from "react-bootstrap";

export default function UserList({ users }) {
  return (
    <div className="user-list">
      <Table >
        <thead>
          <tr style={{backgroundColor:' rgb(231, 228, 228) '}}>
            <th ><h5>#</h5></th>
            <th> <h5>Name</h5></th>
            <th> <h5>UserName</h5></th>
            <th><h5>Email</h5></th>
            <th><h5>Address</h5></th>
            <th><h5>Phone</h5></th>
            <th><h5>Website</h5></th>
            <th><h5>Company</h5></th>
          </tr>
        </thead>
        {users.map((user, key)=>    
        <tbody key={user.id}>
          <tr style={{backgroundColor:'rgb(226, 196, 210)'}}>
           <td> <h5>{user.id}</h5></td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td> {user.address.street}, {user.address.suite}, {user.address.city},{user.address.zipcode}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name} <br/>  {user.company.catchPhrase} <br/> {user.company.bs} </td>
            
          </tr>
        </tbody>
        )}
      </Table> 
      
    </div>
  );
}