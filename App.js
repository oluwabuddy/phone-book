import { useState } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddContact from './AddContact';
import PhoneList from './PhoneList';
import Footer from './Footer';
import About from './About'


function App() {
  const  [lists, setLists] = useState ([
    { name: 'jane', phone: '464647', id: 1},
    { name: 'george', phone: '9858', id: 2 },
    { name: 'mike', phone: '6474747', id: 3 },
    { name: 'thomas', phone: '373636', id: 4}
  ])

  // Add list
  const addList = (list) => {
    const id = Math.floor(Math.random() * 
    10000) + 1;
    const newList = { id, ...list}
    setLists([...lists, newList]);
    
  }

  // delete list
  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !==
    id))
  }


  return (
    <Router>
      <div className="App">
        
         
         <Route path='/' exact render={(props)=>( 
         <div>
           <AddContact onAdd={addList}/>
          {lists.length > 0 ? (
          <PhoneList  lists={lists} onDelete=
          {deleteList}/>
          ) : (
          'No Contact to Show'
          )}
         </div>
         )} />
         <Route path='/about' component={About} />
         <Footer />
        <div className="content">
         

        </div>
      </div>
      </Router>
  
  );
  
}

export default App;
