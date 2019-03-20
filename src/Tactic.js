import React, { Component } from 'react';
import {connect} from 'react-redux';

const Tactic=(props)=> {
	console.log(props.tactic);
	return (
		<div>
		
		  <h2>{props.tactic.name}</h2>
		  <p>{props.tactic.Formation}</p>
		  <button>Edit</button>
          <button
		  onClick={()=>props.dispatch({type:'DELETE_TACTIC',id:props.tactic.id})}>
		  Delete</button>		  
		</div>
	 );

}
export default connect()(Tactic);