import React from 'react';
import NavBar from 'components/Common/NavBar/NavBar';

const PageTemplate = ({children}) => {
    return(
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

export default PageTemplate;