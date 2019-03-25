import React from 'react';
import DropDown from './DropDown.js';
import './CSSstyles/individualPlayerInstruction.css';


const Instruction = (props) => {
    let players = props.data;
    console.log(players);
    console.log(props.activePlayer)

    const inst = players.find((obj) =>{

    let value=props.activePlayer.x === obj.x && props.activePlayer.y === obj.y;
    return value;
    });
    console.log(inst);




    const upDateValue = (key, value) => {
        let obj = {};
        

        obj = value;
        obj.key = key;
       // console.log(key);
        console.log(obj);
        props.onChange(obj);
    }
    return (

        <div className="instructionContainer">
            {inst.instructions.map((key, index) => {
                let keys = Object.entries(key);
               // console.log(key);
                //console.log(index);
                let keyDescript = keys[0][0]; //name of array
                let newObj = {};//sent to dropdown component
                newObj.selected = inst.selectedInstruction[index] //selected instructions
                newObj.values = keys[0][1];; //array of choices

                //console.log(newObj);



                return (
                    
                    <div className="instructionBlock" key={index} >
                        <div className="instructionImage">
                                <img src="" alt="img"/>
                        </div>
                        <div className="instructDropDown">
                            <DropDown data={newObj} dkey={keyDescript} onChange={upDateValue} />
                        </div>

                    </div>
                    
                )


            })
            }
        </div>
    )

}

export default Instruction;