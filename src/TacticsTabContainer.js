import React from 'react';
import DropDown from './DropDown.js';
import Slider from './Slider.js';


const TableHeader =() => {
    return(
        <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
    </thead>
    )
}

const TableData = props =>{

    const upDateValue=(key,value)=>{
        let obj = {};
        obj[key]=value;
        console.log(obj);
        props.onChange(obj);
    };
    
    if(typeof props.data !== 'number'){

        return(
            <td>
                <DropDown data={props.data} dkey={props.dkey} onChange={upDateValue} />
            </td>
            
        ) 
    }
    else {
        return <td>
            <Slider data={props.data} dkey={props.dkey} onChange={upDateValue}  />
        </td>
    }

}

const TableBody = props => { 

    const rows = Object.keys(props.data).map((key,index) => {

        return (
            <tr key={index}>
                <td>{key}</td>                
                <TableData data={props.data[key]} dkey={key} onChange={props.onChange} />
                
 
            </tr>
        );
    });
     return <tbody>{rows}</tbody>;
}


 const TacticsTabContainer =(props)=> {
        const { data } = props;
        return (
           <table>
               <TableHeader />
               <TableBody data ={data} onChange = {props.onChange}/>
 
            </table>
        );
    
}

export default TacticsTabContainer;