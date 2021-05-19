import React ,{Component}from 'react';
import ReactDOM from 'react-dom';

class Car extends Component {
    render(){
        return ( <h1>Hello {this.props.test}!</h1>)
    }
}
export default Car;