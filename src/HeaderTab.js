//headerTab
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from './modal';


  const button={
	"align-self": "flex-end"
  }
  
  const header={
	  display:"flex",
	  "justify-content": "space-between",
	  "align-items": "center"
  }
  const title={
	  "align-self": "center"
	  
  }




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
		
		this.hideModal();
		this.props.onClick({name:this.state.inputValue});
		
		
		
	}
	render(){
		console.log(this.props);
		return(
		 <div className="header" style={header}>
			<h1 style={title} >Custom Fifa Tactics</h1>
			<Modal show={this.state.show} handleClose={this.hideModal}>
				<p>Enter A Name for Your Tactic</p>
				<input  className="input"   onChange={evt => this.updateInputValue(evt)}/> 
				<Button variant="contained"  className="saveButton" style={button} onClick={this.onSave}>
					Submit
				</Button>
			</Modal>
			<Button variant="contained"  className="saveButton" style={button} onClick={this.showModal}>
				Save Tactic
			</Button>
		</div>
		)
	}
}
export default HeaderTab;