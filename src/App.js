import React, { Component } from 'react';
import Tabs from './Tabs';





import './App.css';
import TacticsTabContainer from './TacticsTabContainer.js';
import PreviewContainer  from './SideViewContainer.js';
import tacticsData from './tacticsData.json';
import formations from './formation.json';
import DisplayListofFormation from './FormationContainer.js';
import FormationField from './PlayerInstructionsContainer.js';
import playerInstruction from './PlayerInstruction.json';



 
class App extends Component {

  constructor(){
    super();
    console.log(playerInstruction);
    this.state = {
      
      defenseRow: tacticsData.defenseRows,
      offenseRow: tacticsData.offenseRows,
      formation:formations.formation,
      selectedTab:0,
      activeTab:"Tactics",
      playerInstruction:playerInstruction
    };
    
  };

  changeTab = (obj)=>{
    const newState = Object.assign(this.state, obj);
    this.setState(newState);
    
  }
  
  changeDefenseRow = (obj) => {
    const newState = Object.assign(this.state.defenseRow, obj);
    this.setState(newState);
   }

   changeOffenseRow = (obj) => {
    
 
    const newState = Object.assign(this.state.offenseRow, obj);
    this.setState(newState);
    
   }

   changeFormation = (obj) => {
     const newState = Object.assign(this.state.formation,obj);
     this.setState(newState);

     
   }

   changePlayerIntructions=(obj)=>{
      console.log(obj);
   }
   
  
  render() {
    


    return (
      
      <div className="container">
        <h1>Custom Fifa Tactics</h1>
        
        <div className="flexContainer">
          < div className="tableContainer">
          <Tabs activeTab={this.state.activeTab} onClick={this.changeTab} >
              <div label="Tactics">
            
                  <TacticsTabContainer data={this.state.defenseRow} onChange={this.changeDefenseRow} />
                  <TacticsTabContainer data={this.state.offenseRow} onChange={this.changeOffenseRow}/>
                

              </div>
              <div  label="Formations" >
               

                      <DisplayListofFormation data={this.state.formation} onChange={this.changeFormation} />
              </div>

              <div label="Player Instructions">
                <FormationField data={this.state.formation.values[this.state.formation.selected]} onChange={this.changePlayerIntructions}  />
              </div>
            </Tabs>
            </div>
            <div className="sideView">
              <PreviewContainer data={this.state} />
            </div>

        </div>

      </div>
    );
  }
}

export default App;
