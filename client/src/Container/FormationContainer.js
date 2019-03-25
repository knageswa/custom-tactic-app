import React from 'react';




const DisplayListofFormation =(props)=>{
   
    const {values} = props.data;
    const clickHandler=(e)=>{
        const index = values.findIndex((value)=>value.name===e.target.alt);
        let newObj = {};
        newObj.selected = index;
        newObj.values = values;
        console.log(newObj);
        props.onChange(newObj);
    }
    
    return(

      <div className="formations">
        {props.data.values.map((value,index)=>{
        
        return( 
            <div className="imageBlock" key={index} >
            <figure>
              <img src={value.image} alt={value.name} onClick={clickHandler}/>
              <figcaption>{value.name}</figcaption>
            </figure>
            </div>
        )
    
        
        })
      }
      </div>
      )
      
  }

  export default DisplayListofFormation;