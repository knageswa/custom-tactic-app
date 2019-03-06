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
import InstructionMapping from './InstructionMapping.js';
import RoleMapping from './RoleMapping.json';




 
class App extends Component {

  constructor(){
    super();
    //console.log(playerInstruction);
    this.state = {
      
      defenseRow: tacticsData.defenseRows,
      offenseRow: tacticsData.offenseRows,
      formation:formations.formation,
      selectedTab:0,
      activeTab:"Tactics",
      playerInstruction:playerInstruction,
      activePlayers:""
    };
    this.state.activePlayers=this.MapPlayerToInstruction();
  };
  MapPlayerToInstruction(){
    let obj={};
    obj.activePlayer={x:"",y:""};
    obj.players=[];
    let activePlayers = this.state.formation.values[0].players;
    
    //console.log(InstructionMapping);
    activePlayers.forEach(element => {
      let player=element.coordinates;
      let playerroles=(InstructionMapping.find((playerRole)=>{

        return playerRole.x === player.x && playerRole.y === player.y;
      }
      ))=== undefined ? "":(InstructionMapping.find((playerRole)=>{

        return playerRole.x === player.x && playerRole.y === player.y;
      }
      ));
      
     

     
      var activeRole =playerroles;
      //console.log(activeRole);
      //InstructionMapping

      // let playerInst =InstructionMapping.mapping.find(player=>
      // {
      //   console.log(player);
      //   console.log(activeRole);
      //   return activeRole===player.role;
      // }
      // );
    //console.log(playerInst);
    obj.players.push(activeRole);
    

      
     });
     obj.activePlayer.y= obj.players[10].y;
     obj.activePlayer.x=obj.players[10].x;
     
     
     //console.log(obj);

     return obj;
  }

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

   updateIndividualPlayerIntructions=(obj)=>{
     console.log(obj);
     console.log(this.state.activePlayers);
     let actplayers= this.state.activePlayers;
     actplayers.find((player)=>{
          return player.x===actplayers.activePlayer.x && player.y ===actplayers.activePlayer.y;
     })
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
              <PreviewContainer data={this.state} onChange={this.updateIndividualPlayerIntructions}/>
            </div>

        </div>

      </div>
    );
  }
}

export default App;
