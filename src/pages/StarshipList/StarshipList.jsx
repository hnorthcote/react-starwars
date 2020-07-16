import React from 'react';
import { Link } from 'react-router-dom';

function starshipList (props) {
  const starship = props.starships;

    return(
        <div>
            { !starship && <div className="loading">
            Loading... {console.log(starship)}
            </div>}
            

            {starship.map((starship, idx)=> 
                <Link 
                className='starshipCard'
                key={idx} 
                name={starship.name}
                onClick={() => props.handleCurrent(starship.name)}
                to={`/:${idx}`}
                >{starship.name}</Link>
            )}
            
        
         </div>
    )
}


export default starshipList

  