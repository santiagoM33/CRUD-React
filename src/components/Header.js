import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return ( 
        <header className="col-12 p-3 px-md-4 mb-3 border-bottom box-shadow bg-primary">
            <Link to={'/'}>
                <h1 className="my-0 mr-md-auto font-weight-normal text-white text-center">{props.title}</h1>
            </Link>
        </header>
     );
}
 
export default Header;