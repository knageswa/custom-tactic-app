import React from 'react';




const PreviewContainer = (props) =>{
    console.log(props.data);
    const image=props.data.values[props.data.selected];
    return(
        
        <img  className="imageStyle" src={image.image} alt={image.name}/>
        // <p>images </p>
    )
}

export default PreviewContainer;