import React, { Component } from 'react';
import './App.css';

const barSeparator = <div className="barSeparator gradient-bg"></div>;

const title = <div>
	<h1 id="title">Teste</h1>
	{barSeparator}
</div>;

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      logged: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

	render() {
		return (
			title
		);
	}
}

export default App;
