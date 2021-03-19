import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
	render(){
		return (
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<Link to="/" className="navbar-brand">ExerciseTracker</Link>
				<div className="collapse navbar-collapse"></div>
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<Link to="/" className="nav-link">Exercises</Link>
					</li>
					<li className="navbar-item">
						<Link to="/create" className="nav-link">Create Exercise</Link>
					</li>
					<li className="navbar-item">
						<Link to="/users" className="nav-link">All Users</Link>
					</li>
					<li className="navbar-item">
						<Link to="/users/add" className="nav-link">Create User</Link>
					</li>
				</ul>
			</nav>	
		);
	}
}