import React from 'react';



const switchTabs=(props) => {
    
    switch(props.activeTab){
        case "Tactics":
            return displayTactics(props);
        case "Formations":
            return displayFormation(props.formation);
        case "Player Instructions":
            return displayPlayerInstructions(props);
        case "Player Roles":
            return displayPlayerRoles(props);
        default:
            return (<h1>error with activeTab</h1>);
    }

}

const displayTactics= (props) => {
    return(
        <div>
        Tactics temp picture    
        </div>

    )

}

const displayFormation = (props)=>{
    console.log(props);
    const image=props.values[props.selected];
    return(
        <div>
        <img  className="imageStyle" src={image.image} alt={image.name}/>
        </div>

    )
}



const displayPlayerInstructions = (props)=>{

    ///coordinates origin bottom left
    return(
        <div>
        displayPlayerInstructions   
        </div>

    )
}

const displayPlayerRoles = (props)=>{
    return(
        <div>
        displayPlayerRoles  
        </div>

    )
}

const PreviewContainer = (props) =>{
    
    
    return switchTabs(props.data);
}

export default PreviewContainer;