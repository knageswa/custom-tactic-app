import React, { Component } from 'react';
import Tabs from './Tabs';

import './App.css';
import TacticsTabContainer from './TacticsTabContainer.js';
import tacticsData from './tacticsData.json';
import formation from './formation.json';


 
class App extends Component {

  constructor(){
    super();
    this.state = {
      defenseRow: data.defenseRows,
      offenseRow: data.offenseRows
    };
  };
  
  changeDefenseRow = (obj) => {
    const newState = Object.assign(this.state.defenseRow, obj);
    this.setState(newState);
   }

   changeOffenseRow = (obj) => {
    
 
    const newState = Object.assign(this.state.offenseRow, obj);
    this.setState(newState);
    console.log(this.state);
   }
  
  render() {
 

    return (
      
      <div className="container">
        <h1>Custom Fifa Tactics</h1>
        
        <div className="flexContainer">
          < div className="tableContainer">
          <Tabs>
              <div label="Gator">
            
                  <TacticsTabContainer data={this.state.defenseRow} onChange={this.changeDefenseRow} />
                  <TacticsTabContainer data={this.state.offenseRow} onChange={this.changeOffenseRow}/>
                

              </div>
              <div label="Croc">
                After &apos;while, <em>Crocodile</em>!
              </div>
              <div label="Sarcosuchus">
                Nothing to see here, this tab is <em>extinct</em>!
              </div>
            </Tabs>
            </div>
            <div className="sideView">
                  sideView
                </div>

        </div>

      </div>
    );
  }
}

export default App;
