import React from 'react';
import UserCard from './components/UserCard';
import users from './components/users';
function App2() {
  
  return (
    
    <div>
      {
        users.map(user =>(
          <userCard key={user.id} name = {user.name} age = {user.age} id = {user.id}/>
        ))
      }
    </div>
    
  );
}

export default App2;
