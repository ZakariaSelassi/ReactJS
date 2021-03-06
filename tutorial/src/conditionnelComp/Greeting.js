import React from 'react';

function UserGreeting(props){
    return <h1>Bienvenue</h1>;
}
function GuestGreeting(props){
    return <h1>Veuillez vous inscrire.</h1>;
}

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;

};

export default Greeting;