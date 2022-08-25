import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function MainNav(props){
    return(
        <nav className="main-nav">
            <section className="left">
                <h2 className="brand"> Todo</h2>
                <Link to="/">My Todos</Link>
                <Link to="/contact">My Contact</Link>
            </section>
            <section className="right">
                <div className="greeting">Hi Sunday</div>
                <button className="right" onClick={()=>window.alert("You are Logged out")}>Logout</button>
            </section>
        </nav>
    )
}

export default MainNav;