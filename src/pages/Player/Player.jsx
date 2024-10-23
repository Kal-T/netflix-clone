import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: "",
    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWNkMTJlNTBiMGE1MTQ0NjQ0NTQwZTViMDE5NjY3MiIsIm5iZiI6MTcyOTY1Mjk0MC40NzQxMjUsInN1YiI6IjY3MTg2M2U2NWQwZGU4OTA0MmQ4YTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rbWP6-lpClDZ0aPYW3ehtOJEfIjfhp7esipUOkCh-4M'
        }
      };

      useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/1029235/videos?language=en-US', options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));

      },[])
      
      
  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" />
        <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className="player-info">
            <p>{apiData.published_at}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player