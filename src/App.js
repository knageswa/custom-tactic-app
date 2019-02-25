import React, { Component } from 'react';
import Tabs from './Tabs';

import './App.css';
import TacticsTabContainer from './TacticsTabContainer.js';

 
class App extends Component {
  render() {
    const defenseRows =
    {
      
      'DefensiveStyle': [
        'Drop Back',
        'Balanced',
        'Pressure on Heavy Touch',
        'Press after possesion Loss',
        'constant Pressure'
      ],
      'DefensiveWidth': 'slider',
      'Depth': 'slider'
    };


    const offenseRows = 
    {
        'OffensiveStyle': [
          'Possesion',
          'Balanced',
          'Long Ball',
          'Fast Build up',
          'constant Pressure'
        ],
      
      
        'OffensiveWidth': 'slider',
      
      
        'Players in Box': 'slider',
      
      
        'Corners': 'slider',
      
      
        'Freekicks': 'slider'
      
      };


    return (
      
      <div className="container">
        <h1>Custom Fifa Tactics</h1>
        
        <div className="flexContainer">
          < div className="tableContainer">
          <Tabs>
              <div label="Gator">
            
                  <TacticsTabContainer data={defenseRows} />
                  <TacticsTabContainer data={offenseRows} />
                

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
