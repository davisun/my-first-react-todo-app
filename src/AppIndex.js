import React, {useState} from 'react';
import MainNav from './components/MainNav';
// import Button from './components/elements/Button';
import FieldBlock from './components/elements/FieldBlock';

function AppIndex(){
    const [username, setUsername] = useState();
    const [password, SetPassword] = useState();
    return (
        <main className="app"> 
            <MainNav />
            <div className="main-content">
                <h2> Your Username will be: {username}</h2>
                <FieldBlock id="username" value={username}
                    onChange={(evt) => {setUsername(evt.target.value)}} 
                    label="Username:"
                />
                <FieldBlock id="password" value={password} 
                    onChange={(evt)=>{SetPassword(evt.target.value)}}
                    label="Password:" type="password" feedback="must be 8 characters" isInvalid={true}
                />
                    
                {/* <Button variant="primary" onClick={()=> window.alert('Button Clicked')}>
                    Btn One <span>&times;</span> 
                </Button> */}
                
            </div>
            
        </main>
    );
}

export default AppIndex;