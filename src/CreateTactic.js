import React, { Component } from 'react';
import App from './App.js';

class CreateTactic extends Component {
	render() {
		return (
			<div>
			  <h1>Create Tactic</h1>
			  <form>
			   <input required type="text" placeholder="Enter Tactic Name" /><br /><br />
			   <textarea required rows="5" cols="28" placeholder="Enter Decsription" /><br /><br />
			   <app />
			   
			  </form>
			</div>
		);
	}
}
export default PostForm;