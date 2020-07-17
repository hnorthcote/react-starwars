import React from 'react';
import { Link } from 'react-router-dom'
import styles from './StarshipDetail.module.css'

function StarshipDetail (props) {
    const starships = [...props.starships]
    const currentStarship = starships.find(C => C.name===props.current)
return(
    <div className={styles.detailScreen}>
        { !currentStarship && <div className='loading'>
          Loading... {console.log(currentStarship)}
        </div> }
             
        <div className={styles.detailCard}>
            <div >NAME:     {currentStarship.name}</div>
            <div >MODEL:     {currentStarship.model}</div>
            <Link className={styles.return} to='/'>RETURN</Link>
        </div>
     </div>
  )
  }

export default StarshipDetail;