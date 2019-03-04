import React from 'react';
import DropDown from './DropDown.js';



const Instruction= (props)=>{
    let players=props.data;
    //console.log(props.activePlayer);

    const inst= players.find((obj)=>{
        return props.activePlayer.x===obj.x && props.activePlayer.y===obj.y;
    });
    console.log(inst);

    

    const clickHandler=(e)=>{

    }
    const upDateValue= (e)=>{

    }
    return(
        
       <div className="instructionContainer">
       {inst.instructions.map((value,index)=>{
        //console.log(value[Object.keys(value)[index]]);

        return( 
            <div  key={index} >
               <p> {value[Object.keys(value)[0]] } {value.selected}</p>
               
            </div>
        )
    
        
        })
      }
       </div>
    )

}

export default Instruction;