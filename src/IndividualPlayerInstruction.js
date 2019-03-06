import React from 'react';
import DropDown from './DropDown.js';



const Instruction= (props)=>{
    let players=props.data;
    //console.log(props.activePlayer);

    const inst= players.find((obj)=>{
        return props.activePlayer.x===obj.x && props.activePlayer.y===obj.y;
    });
    //console.log(inst);

    


    const upDateValue= (key,value)=>{
        let obj={};
        obj[key]=value;
        console.log(obj);
        props.onChange(obj);
    }
    return(
        
       <div className="instructionContainer">
       {inst.instructions.map((key,index)=>{
        let keys =Object.entries(key);
        let keyDescript=keys[0][0]; //name of array
        let newObj = {};//sent to dropdown component
        newObj.selected =keys[1][1]; ; //selected instructions
        newObj.values = keys[0][1];; //array of choices

        //console.log(newObj);
        
              

        return( 
            <div  key={index} >
               <DropDown data={newObj} dkey={keyDescript} onChange={upDateValue} />
               
               
            </div>
        )
    
        
        })
      }
       </div>
    )

}

export default Instruction;