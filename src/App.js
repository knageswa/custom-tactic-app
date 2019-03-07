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
      activePlayers:"",
      selectedPlayer:""
    };
    this.state.activePlayers=this.MapPlayerToInstruction();
    this.state.selectedPlayer=this.setSelectedPlayerForInstruction();
  };

  setSelectedPlayerForInstruction(){
    let obj={};
    obj.x= this.state.activePlayers[10].x;
    obj.y= this.state.activePlayers[10].y;

    return obj;
  }
  MapPlayerToInstruction(){

    let players=[];
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
      

    players.push(playerroles);
    

      
     });
     
     return players;
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
    let nameOfInstr=Object.keys(obj)[1];
     console.log(obj);
    

     //console.log(this.state.activePlayers);
     //console.log(this.state.selectedPlayer);
     var index= this.state.activePlayers.findIndex((player)=>{
        return player.x ===this.state.selectedPlayer.x && player.y===this.state.selectedPlayer.y;
     })
     console.log(index);
     if(index=== -1)
      ///handle error
      console.log("error");
      else {
      let prevObj=this.state.activePlayers[index].instructions.find((ob)=>{
        let value= Object.keys(ob)[0]===nameOfInstr;
        return value;
      });
      //set obj to selected value
      //prevObj.selected=obj.selected;
      console.log(prevObj);
        this.setState({
          activePlayers:[
            ...this.state.activePlayers.slice(0,index),
            Object.assign({},this.state.activePlayers[index].instructions.find((ob)=>{
              let value= Object.keys(ob)[0]===nameOfInstr;
              console.log(ob);
              return value;
            }), obj),
            ...this.state.activePlayers.slice(index+1)
          ]
        })
      }
     
        console.log(this.state.activePlayers);
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
