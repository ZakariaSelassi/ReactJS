import React, { Component} from 'react'
import Comment from './UsersComponents/Comment'
import Clock  from './ClockComponents/Clock'
import Toggle from './ToggleComponent/Toggle'
import Garage from './propsComponents/Garage';
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

class App extends Component {
  render()
  {
    return (
      <div>
        <Comment 
           date={comment.date}
           text={comment.text}
           author={comment.author}/>
          <Clock />
          <Toggle/>
          <Garage/>
      </div>
    );
  }
  
}


export default App;