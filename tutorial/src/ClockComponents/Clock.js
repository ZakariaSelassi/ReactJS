import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
function FormatteDate(props){
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    console.log(this.state);
  }
  componentDidMount() {
    // 
    this.timerID = setInterval(() => this.tick(),1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick(){
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <FormatteDate date={this.state.date}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
export default Clock;