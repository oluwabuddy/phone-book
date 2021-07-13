import { useState } from 'react'

const AddContact = ({ onAdd }) => {  
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
     
    const onSubmit = (e) => {


        e.preventDefault();

        onAdd({ name, phone })

        setName('');
        setPhone('');
       
        
    }
    const setData = () => {
        let obj = {'name': name, 'phone': phone}
        localStorage.setItem('myData', JSON.stringify(obj));  
        let data = localStorage.getItem('myData'); 
          data = JSON.parse(data);
          console.log(data);
         
        }


    return ( 
        <div className="top">
            <header className="head">
                <h1>Phone Book</h1> 
                <h2>Add Contact</h2>
            </header>
            <form className="add" onSubmit={onSubmit}>
                <label>Name:</label>
                <input 
                type="text" 
                required
                value={name}
                 onChange={(e) => 
                    setName(e.target.value)}
                />
                <label>Phone:</label>
                <input 
                type="text" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                 <input type="submit" className="button" onClick={() => setData()} />

                    
            </form>
        </div>
     );
}

export default AddContact;