import React from 'react';
import { Link } from 'react-router-dom'

function StarshipDetail (props) {
    const starships = [...props.starships]
    const currentStarship = starships.find(C => C.name===props.current)
return(
    <div className="detailCard">
        { !currentStarship && <div className='loading'>
          Loading... {console.log(currentStarship)}
        </div> }
             
        <>
            <div >{currentStarship.name}</div>
            <div >{currentStarship.model}</div>
            <Link className='return' to='/'>Return</Link>
        </>
     </div>
  )
  }

export default StarshipDetail;