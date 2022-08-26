import React from 'react';
import MainNav from './components/MainNav';
import Button from './components/elements/Button';

function AppIndex(){
    return (
        <main className="app"> 
            <MainNav />
            <div className="main-content">
                <Button variant="primary" onClick={()=> window.alert('Button Clicked')}>
                    Btn One <span>&times;</span> 
                </Button>
                <Button variant="danger">
                    Btn Two 
                </Button>
                <Button>
                    Button Three
                </Button>
                {/* <Button> Button Two</Button> */}
                {/* <Button label="Btn Two" /> */}
            </div>
            
        </main>
    );
}

export default AppIndex;