import React from 'react';

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>;
    }
    return (
        <div>
            
        </div>
    );
};

export default Greeting;