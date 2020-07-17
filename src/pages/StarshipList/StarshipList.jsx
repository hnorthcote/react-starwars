import React from 'react';
import { Link } from 'react-router-dom';
import  styles  from './StarshipList.module.css';

function starshipList (props) {
  const starship = props.starships;

    return(
        <div className={styles.starshipList}>
            { !starship && <div className="loading">
            Loading... {console.log(starship)}
            </div>}
            

            {starship.map((starship, idx)=> 
                <Link 
                className={styles.starshipCard}
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

  