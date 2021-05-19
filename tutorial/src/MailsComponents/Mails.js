import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
const Mails = (props) => {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>Messages ! </h1>
            {unreadMessages.length > 0 && <h2>
                You have {unreadMessages.length} unread messages.</h2>}        
        </div>
    );
};



export default Mails;