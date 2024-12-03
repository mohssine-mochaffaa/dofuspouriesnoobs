/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
          navigate("/home.html");
        },1000)
    },[]);

  return (
    <div>
       
    </div>
  )
}

export default Home
