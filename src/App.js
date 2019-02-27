import React, { Component } from 'react';
import Tabs from './Tabs';




import './App.css';
import TacticsTabContainer from './TacticsTabContainer.js';
import FormationContainer  from './SideViewContainer.js';
import tacticsData from './tacticsData.json';
import formations from './formation.json';



 
class App extends Component {

  constructor(){
    super();
    this.state = {
      defenseRow: tacticsData.defenseRows,
      offenseRow: tacticsData.offenseRows,
      formation:formations.formation,
    };
    
  };
  
  changeDefenseRow = (obj) => {
    const newState = Object.assign(this.state.defenseRow, obj);
    this.setState(newState);
   }

   changeOffenseRow = (obj) => {
    
 
    const newState = Object.assign(this.state.offenseRow, obj);
    this.setState(newState);
    
   }

   changeFormation = (obj) => {
     const newState = Object.assign(this.state.changeFormation,obj);
     this.setState(newState);
     //console.log(this.state);
   }
  
  render() {
    
    const DisplayListofFormation =(props)=>{
      console.log(props.data.values);
      return(
     
 
        <img  className="imageStyle" src={props.data.urls} alt=''/>
      )
    }

    return (
      
      <div className="container">
        <h1>Custom Fifa Tactics</h1>
        
        <div className="flexContainer">
          < div className="tableContainer">
          <Tabs>
              <div label="tactics">
            
                  <TacticsTabContainer data={this.state.defenseRow} onChange={this.changeDefenseRow} />
                  <TacticsTabContainer data={this.state.offenseRow} onChange={this.changeOffenseRow}/>
                

              </div>
              <div label="formations" >
               

                      <DisplayListofFormation data={this.state.formation} onChange={this.changeFormation} />

              <div label="Sarcosuchus">
                Nothing to see here, this tab is <em>extinct</em>!
              </div>
            </Tabs>
            </div>
            <div className="sideView">
              {/* <FormationContainer data={this.state.formation} /> */}
            </div>

        </div>

      </div>
    );
  }
}

export default App;
