import React,{Component} from 'react';

class Form extends Component {
    constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }
    handleSubmit(e){
        alert('Le nom à été soumis :' + this.state.value);
        e.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Nom :
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Envoyer" />
            </form>
          );
    }
}

export default Form;