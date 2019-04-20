import React, { Component } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	togglePassword() { 
		var temp = document.getElementById("password"); 
		if (temp.type === "password") { 
			temp.type = "text"; 
		} 
		else { 
			temp.type = "password"; 
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		/*const user = {
			email: this.state.email,
			password: this.state.password
		};

		axios.post('http://localhost:1337/parse', { user })
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
		.catch(error => {
			console.log(error)
		});*/

		const header = {
			'X-Parse-Application-Id':'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga',
			'X-Parse-REST-API-Key':'k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjga'
		};

		axios.get('http://localhost:1337/parse/login?email=' + encodeURIComponent(this.state.email) + '&password=' + encodeURIComponent(this.state.password))
			.then(res => {
			console.log(res);
		});
	}

	render() {
		return (
			<div className="App">
				<div className="login-container">
					<img className="logo" src="/assets/logo.png" alt="" />
					<Form onSubmit={this.handleSubmit}>
						<Form.Group controlId="email">
							<Form.Label>Email</Form.Label>
							<InputGroup className="mb-3">
								<FormControl
									autoFocus
									placeholder="seunome@email.com"
									type="email"
									value={this.state.email}
									onChange={this.handleChange}
								/>
								<InputGroup.Append>
									<InputGroup.Text id="email-addon">
										<img src="/assets/mail.png" alt="" />
									</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
						</Form.Group>
						<Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Password"
									value={this.state.password}
									onChange={this.handleChange}
									type="password"
								/>
								<InputGroup.Append>
									<InputGroup.Text id="pass-addon">
										<img src="/assets/lock.png" alt="" />
									</InputGroup.Text>
								</InputGroup.Append>
							</InputGroup>
						</Form.Group>
						<Form.Group controlId="formBasicChecbox">
							<Form.Check type="checkbox" label="Mostrar a senha" onChange={this.togglePassword} />
						</Form.Group>
						<p className="my-5" ><a href="/"><b>Problemas para acessar sua conta?</b></a></p>
						<Button
							variant="primary"
							type="submit"
							className="gradient-bg"
							disabled={!this.validateForm()}
						>
							Acessar
						</Button>
					</Form>
					<div className="midle-line my-4"><span>ou</span></div>
					<a  href="/" className="btn btn-secondary mb-4">Cadastrar</a>
					<a href="/">Termos de uso</a> &middot; <a href="/">Política de privacidade</a>
				</div>
			</div>
		);
	}
}