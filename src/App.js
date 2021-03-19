import './App.css';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import UsersList from "./components/users-list.component";
import EditExercise from "./components/edit-exercise.component";
import EditUser from "./components/edit-user.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App(){
  return (
	  <Router>
		  <div className="container">
			<Navbar/>
			<br/>
			<Route path="/" exact component={ExercisesList}/>
			<Route path="/edit/:id" exact component={EditExercise}/>
			<Route path="/users/:id" exact component={EditUser}/>
			<Route path="/create" exact component={CreateExercise}/>
			<Route path="/users/add" exact component={CreateUser}/>
			<Route path="/users" exact component={UsersList}/>
		</div>
	  </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
