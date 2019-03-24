import React from 'react';
import {connect} from 'react-redux';
import './CSSstyles/tactic.css';

const Tactic=(props)=> {
	console.log(props.tactic);
	return (
		<div className="list">
		
		  <h3>{props.tactic.name}</h3>
		  <p>{props.tactic.Formation}</p>
		  <button className="edit" onClick={()=>props.dispatch({type:'EDIT_TACTIC',id:props.tactic.id})}>
				Edit
			</button>
      <button className="delete" onClick={()=>props.dispatch({type:'DELETE_TACTIC',id:props.tactic.id})}>
		  		Delete
			</button>		  
		</div>
	 );

}
export default connect()(Tactic);