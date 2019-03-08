import React from 'react';
 import Instruction from './IndividualPlayerInstruction.js';




const displayTactics= (props) => {
    return(
        <div>
        Tactics temp picture    
        </div>

    )

}

const displayFormation = (props)=>{
    console.log(props);
    const image=props.values[props.selected];
    return(
        <div>
        <img  className="imageStyle" src={image.image} alt={image.name}/>
        </div>

    )
}




const displayPlayerInstructions = (props)=>{
    
    const updateValue=(obj)=> {
        //console.log(obj); 
        props.onChange(obj);
    
    }
    ///coordinates origin bottom left
    
    return(
        <div>
            <Instruction data={props.data.activePlayers} activePlayer={props.data.selectedPlayer} onChange={updateValue} /> 
        </div>

    )
}

const displayPlayerRoles = (props)=>{
    console.log(props);
    return(
        <div>
        displayPlayerRoles  
        </div>

    )
}

const PreviewContainer = (props) =>{
    
    console.log(props);
    //return switchTabs(props.data);
    switch(props.data.activeTab){
        case "Tactics":
            return displayTactics(props);
        case "Formations":
            return displayFormation(props.data.formation);
        case "Player Instructions":
            return displayPlayerInstructions(props);
        case "Player Roles":
            return displayPlayerRoles(props);
        default:
            return (<h1>error with activeTab</h1>);
    }
}

export default PreviewContainer;