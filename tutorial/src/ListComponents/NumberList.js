import React from 'react';

const NumberList = (props) => {
    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((numbers) => 
    <li key={numbers.toString()}>{numbers}</li>
    );

    return (
        <div>
            <ul>{listItems}</ul>      
        </div>
    );
};

export default NumberList;