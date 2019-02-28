import React, { Component } from 'react';
import Tabs from './Tabs';





import './App.css';
import TacticsTabContainer from './TacticsTabContainer.js';
import PreviewContainer  from './SideViewContainer.js';
import tacticsData from './tacticsData.json';
import formations from './formation.json';
import DisplayListofFormation from './FormationContainer.js';




 
class App extends Component {

  constructor(){
    super();
    this.state = {
      defenseRow: tacticsData.defenseRows,
      offenseRow: tacticsData.offenseRows,
      formation:formations.formation,
      selectedTab:0,
      activeTab:"Tactics"
    };
    
  };

  changeTab = (obj)=>{
    const newState = Object.assign(this.state, obj);
    this.setState(newState);
    console.log(this.state);
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
                Nothing to see here, this tab is <em>extinct</em>!
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
