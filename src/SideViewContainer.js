import React from 'react';




const FormationContainer = (props) =>{
    console.log(props.data);
    return(
        <img  className="imageStyle" src={props.data.urls} alt=''/>
        // <p>images </p>
    )
}

export default FormationContainer;