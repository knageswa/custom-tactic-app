import React, { Component } from 'react';
import Tabs from './Tabs';


import './App.css';
import TacticsTabContainer from './TacticsTabContainer.js';
import PreviewContainer from './SideViewContainer.js';
import tacticsData from './tacticsData.json';
import formations from './formation.json';
import DisplayListofFormation from './FormationContainer.js';
import FormationField from './PlayerInstructionsContainer.js';
import InstructionMapping from './InstructionMapping.js';







class App extends Component {

  constructor() {
    super();
    //console.log(playerInstruction);
    this.state = {

      defenseRow: tacticsData.defenseRows,
      offenseRow: tacticsData.offenseRows,
      formation: formations.formation,
      selectedTab: 0,
      activeTab: "Tactics",
      activePlayers: "",
      selectedPlayer: ""
    };
    this.state.activePlayers = this.MapPlayerToInstruction();
    this.state.selectedPlayer = this.setSelectedPlayerForInstruction();
  };

///set selected player to default and create an update state method.
  setSelectedPlayerForInstruction() {
    let obj = {};
    obj.x = this.state.activePlayers[10].x;
    obj.y = this.state.activePlayers[10].y;

    return obj;
  }
  MapPlayerToInstruction() {

    let players = [];
    let activePlayers = this.state.formation.values[this.state.formation.selected].players;

    //console.log(InstructionMapping);
    activePlayers.forEach(element => {
      let player = element.coordinates;

      let playerroles = (InstructionMapping.find((playerRole) => {

        return playerRole.x === player.x && playerRole.y === player.y;
      }
      )) === undefined ? "" : (InstructionMapping.find((playerRole) => {

        return playerRole.x === player.x && playerRole.y === player.y;
      }
      ));


      players.push(playerroles);
    
      



    });
    console.log(players);
    return players;
  }

  changeTab = (obj) => {
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
  
    const newState = Object.assign(this.state.formation, obj);
    this.setState(newState);
   
    
    let update = this.MapPlayerToInstruction();
    this.changeActivePlayers(update);
    let selObj={};
    selObj.x=this.state.activePlayers[10].x;
    selObj.y=this.state.activePlayers[10].y;
    this.updateSelectedPlayer(selObj);

  }
  



  changeActivePlayers= (obj)=>{
   
    
    const newState = Object.assign(this.state.activePlayers, obj);
    this.setState(newState);
    
  }

  changePlayerIntructions = (obj) => { ////sets selected player to view instructions
    
    const newState = Object.assign(this.state.selectedPlayer,obj);
    this.setState(newState);
    //console.log("change selected playe");

  }

  updateIndividualPlayerIntructions = (obj) => {

    //index points to selected player for changing instructions
    var index = this.state.activePlayers.findIndex((player) => {
      return player.x === this.state.selectedPlayer.x && player.y === this.state.selectedPlayer.y;
    })
    
    //find index of array where instruction is equal to obj.key
    //position of instruction in the instructions array.
    let instructIndex= this.state.activePlayers[index].instructions.findIndex((ob)=>{
      let keys=Object.keys(ob);
      //console.log(keys);
      return keys[0]===obj.key;
    } )
    


    
    let prevState = this.state.activePlayers;
    //console.log(prevState);
    prevState[index].selectedInstruction[instructIndex]=obj.selected;

  
    const newState = Object.assign(this.state.activePlayers, prevState);
    this.setState(newState);
      
  

   

    console.log(this.state.activePlayers);
  }

  updateSelectedPlayer(obj){
    const newState = Object.assign(this.state.selectedPlayer, obj);
    this.setState(newState);
    //console.log(newState);
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
                <TacticsTabContainer data={this.state.offenseRow} onChange={this.changeOffenseRow} />


              </div>
              <div label="Formations" >


                <DisplayListofFormation data={this.state.formation} onChange={this.changeFormation} />
              </div>

              <div label="Player Instructions">
                <FormationField data={this.state.formation.values[this.state.formation.selected]} onChange={this.changePlayerIntructions} />
              </div>
            </Tabs>
          </div>
          <div className="sideView">
            <PreviewContainer data={this.state} onChange={this.updateIndividualPlayerIntructions} />
          </div>

        </div>

      </div>
    );
  }
}

export default App;
