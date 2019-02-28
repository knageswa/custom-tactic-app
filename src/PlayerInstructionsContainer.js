import react from 'react';
import coodinates from './RoleMapping.json';




//takes object that contains  coodinates for field
const PlayerPosition=(props)=>{

    if (validateCoordinate(props)){
        return(
            <td className="cell">
                <i className="far fa-circle fa-3x"></i>
            </td>
        )
    }
    else {
        return(
        <td className="cell">
        </td>
    )}

}

const validateCoordinate=(props)=>{
    let found=coordinates.find(
        (element)=> return (element.x===props.x && y===props.y)

    );
    return found;
    }

//parent component
const FormationField=(props)=>{
    console.log(props);
    return(
        <table>
        {
                for(let i=0;i<7;i++){
                    <tr>
                    for(let j=0;j++;j<5){
                        PlayerPosition({x:i,y:j})
                    }
                    </tr>
                }
        }
        </table>
    )




}