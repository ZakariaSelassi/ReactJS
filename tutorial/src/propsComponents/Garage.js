import React ,{Component}from 'react';
import Car from './Car';
import ReactDOM from 'react-dom';
class Garage extends Component {
    render(){
        return (
            <div>
                <h1>type of car </h1>
                <Car test={"Ford VVVVVVV"}/>
            </div>
        );
    }

}

export default Garage;