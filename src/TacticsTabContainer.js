import React, {Component} from 'react';
import DropDown from './DropDown.js';


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
    console.log(props);
 
    if(props.constructor === Array){
        return(
            <td>
                <DropDown data={props} />
            </td>
            
            //<td>DropDown</td>
        )
    }
    else {
        return <td>{props}</td>
    }

}

const TableBody = props => { 
   
    const rows = Object.keys(props.data).map((key,index) => {
        return (
            <tr key={index}>
                <td>{key}</td>                
                {TableData(props.data[key])}
                
 
            </tr>
        );
    });
    
    
    //console.log(props.data);
     return <tbody>{rows}</tbody>;

}


class TacticsTabContainer extends Component {
    render() {
        const { data } = this.props;

        return (
           <table>
               <TableHeader />
               <TableBody data ={data} />
 
            </table>
        );
    }
}

export default TacticsTabContainer;