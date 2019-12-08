import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contribute">Contribute</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;