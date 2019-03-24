//headerTab
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from './modal';
import './CSSstyles/HeaderTab.css';

  




class HeaderTab extends Component{
	constructor(props){
		super(props);
		this.state={
			show:false,
			inputValue: ''
			}
	}
	//state = { show: false };

   showModal = () => {
    this.setState({ show: true });
	};

   hideModal = () => {
    this.setState({ show: false });
	};
	
	  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
	
	onSave=(e)=>{
		
		if(this.state.inputValue!==''){
			this.hideModal();
			this.props.onClick({name:this.state.inputValue});
		}
		else{
			alert("enter an name");
		}
		
		
		
	}
	render(){
		console.log(this.props);
		return(
		 <div className="header" >
			<h1 className="title" >Custom Fifa Tactics</h1>
			<Modal show={this.state.show} handleClose={this.hideModal} >
			<div onClick={this.hideModal}>
				<p>Enter A Name for Your Tactic</p>
				<input required className="input"   onChange={evt => this.updateInputValue(evt)}/> 
				<Button variant="contained"  className="saveButton" onClick={this.onSave}>
					Submit
				</Button>
				</div>
			</Modal>
			<Button variant="contained"  className="saveButton"  onClick={this.showModal}>
				Save Tactic
			</Button>
		</div>
		)
	}
}
export default HeaderTab;