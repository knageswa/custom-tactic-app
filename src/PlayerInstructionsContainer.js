import React from 'react';

import Instructions from './EnumList.js';




//takes object that contains  coodinates for field
const PlayerPosition=(props,coordinates)=>{
    
    let players = props.data.players;
    let coordinate =coordinates;
    let result=validateCoordinate(players,coordinate);


    const clickHandler=(e)=>{

        let tokens=e.target.id.split(',');
        
        let newObj = {};
        newObj.x = tokens[0];
        newObj.y = tokens[1];
        console.log(newObj);
        props.onChange(newObj);
        }
    
    if (result){
        return(
            <td key={""+coordinate.x+coordinate.y} className="cell" onClick= {clickHandler}>
            {<i className="far fa-circle fa-3x"  id={coordinate.x+','+coordinate.y} ></i>}
            </td>
        )
    }
    else {
        return(
        <td key={""+coordinate.x+coordinate.y}  className="cell">
        {<i style={{visibility:"hidden"}} className="far fa-circle fa-3x"></i>}
        </td>
    )}

}

const validateCoordinate=(players,coordinate)=>{
 
    let found=players.find(
        (element)=> (element.coordinates.x===coordinate.x && element.coordinates.y===coordinate.y)

    );
    return found;
}

const createTable=(props)=>{
    let table= [];
    
    for(let i=6;i>=0;i--){
       
        let row=[];
        for(let j=0;j<5;j++){
            row.push(PlayerPosition(props , {'x':j,'y':i}));
        }
        table.push(<tr key={i} >{row}</tr>);
    }
    return table;
}

//parent component
const FormationField=(props)=>{
    console.log(Instructions);
    return(
        <table>
            <tbody>
                {createTable(props)}
            </tbody>
        </table>

    )

}

export default FormationField;