import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const DetailsUserCard = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res)=>{
      setData(res.data);
      // console.log(res.data);
    })
  },[]);

  const handleBack = () => {
    navigate("/");
  }

  console.log(data)
  return (
    <div className='card2'>
     <img onClick={()=> handleBack()}className='s1' src="https://img.icons8.com/material-outlined/2x/delete-sign.png" alt="cancle"/>
     <div className='sec1'>
      <img className='img2' src={data.image} alt="author img"/>
      <div>
        <div style={{marginLeft:"20px", fontWeight:"690"}}>{data.name}</div>
        <div className='d4' style={{marginLeft:"20px"}}>
         {data.status === "Alive" ? <div className='status-active'></div> : data.status === "Dead"? <div className='status-dead'></div>:<div className='status-inactive'></div> }
         
         
         <p>{data.status}</p>
         <div style={{ margin:"15px 9px"}}>-</div>
         <p>{data.species}</p>
      </div>
        
      </div>

     </div>
     <hr className='h1'/>

    <div>
      <div className='dt1'>
        <div style={{padding:"10px 39px"}}>
          <div style={{fontSize:"12px", color:"#acaaaa"}}>Gender</div>
          <div style={{fontWeight:"570", fontSize:"15px"}}>{data.gender}</div>
        </div>
        <div style={{padding:"10px 0px 0px 27%"}}>
          <div style={{fontSize:"12px", color:"#acaaaa"}}>Location</div>
          <div style={{fontWeight:"570", fontSize:"15px"}}>Earth (C-137)</div>   
        </div>
      </div>
      <div className='dt2'>
      <div style={{padding:"10px 39px"}}>
          <div style={{fontSize:"12px", color:"#acaaaa"}}>Species</div>
          <div style={{fontWeight:"570", fontSize:"15px"}}>{data.species}</div>
        </div>
        <div style={{padding:"10px 0px 0px 25%"}}>
          <div style={{fontSize:"12px", color:"#acaaaa"}}>Origin</div>
          <div style={{fontWeight:"570", fontSize:"15px"}}>unknown</div> 
        </div>
      </div>
    </div>

    </div>
  )
}

export default DetailsUserCard