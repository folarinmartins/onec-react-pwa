import React, {Component} from 'react';
import axios from 'axios';

export default class EditUser extends Component{
	constructor(props){
		super(props);
		
		this.onchangeUsername = this.onchangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		
		this.state = {
			username: '',
		}
	}
	
	componentDidMount(){
		axios.get('http://localhost:5000/users/'+this.props.match.params.id)
			.then(response=>{
				this.setState({
					username: response.data.username,
				});
			})
			.catch(error=>console.log(error))
	}
	
	onchangeUsername(e){
		this.setState({
			username:e.target.value
		});
	}
	onSubmit(e){
		e.preventDefault();
		const user = {
			username: this.state.username,
		};
		axios.post('http://localhost:5000/users/update/'+this.props.match.params.id,user)
			.then(res=>{
				console.log(res.data);
				window.location = '/users';
			})
			.catch(error=>console.log(error))
	}
	
	render(){
		return(
			<div>
				<h3>Edit User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username:</label>
						<input type="text" required className="form-control" value={this.state.username} onChange={this.onchangeUsername}></input>
					</div>
					<div className="form-group">
						<input type="submit" value="Edit User Log" className="btn btn-primary"/>
					</div>
				</form>
			</div>			
		);
	}
}