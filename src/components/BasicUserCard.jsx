import React from 'react'
import { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import "../App.css";


const BasicUserCard = ({func}) => {

  console.log(func);
  
  const [items,setItems] = useState([]);
  const [more , setMore] = useState(true);
  const [page,setPage] = useState(2);
  const [searchTitle , setSearchTitle] = useState("");
  const [loading , setLoading] = useState(false);

  useEffect(()=> {
    const getData = async () => {
         setLoading(true);
         const res = await fetch(
           `https://rickandmortyapi.com/api/character/?name=rick&page=1`
         );
         const data = await res.json();
         setItems(data.results);
        //  console.log(data.results);
         setLoading(false);
         
    }
    getData();

  },[])

  const fetchComments = async () => {
   const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=rick`
   );
   const data = await res.json();
   
    return data.results;
  }

  //fetchComments();

  const fetchData = async () => {
    const ItemsDetails = await fetchComments();
    console.log("ITEMS:", ItemsDetails)

    setItems([...items , ...ItemsDetails]);

    if(items.length === 0 || items.length<20){
      setMore(false);
    }
  
    setPage(page+1);
  }
 
  //  const fetchData =() => {

  // }
  
 

  return (
    <div className='info1'>
     <div className='field'>
        <div>
          <input className="search"  placeholder='🔍 Search for a contact..' onChange={(e) => setSearchTitle(e.target.value)}/>
        </div>
      </div>
      
       {loading ? (<h4>Loading...</h4>): (
        <InfiniteScroll
        className="d1"
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={more}
        loader={<h4></h4>}
        endMessage={
         <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
        </p>
       }
      >
     <div>
     {items.filter((value) => {
        if(searchTitle === ""){
          return value;
        }else if (value.name.toLowerCase().includes(searchTitle.toLowerCase()) ){
          return value;
        }
     })
     .map((elem) => (
     <Link style={{textDecoration: 'none', color:"black"}}  className="contact" to={`/contact/${elem.id}`}>
     <div className='d3'>
     <div className="p1">
      <img className="img1" src={elem.image} alt="user pic"/>
      <p style={{fontWeight:"580", marginLeft:"12px"}}>{elem.name}</p>

     </div>
     <div className='d4'>
        {elem.status === "Alive" ? <div className='status-active'></div> : elem.status === "Dead"? <div className='status-dead'></div>:<div className='status-inactive'></div> }
        
        
        <p>{elem.status}</p>
        <div style={{ margin:"15px 9px"}}>-</div>
        <p>{elem.species}</p>
     </div>
       
     </div> 
     <hr className='h2'/>
     
    </Link>
    ))}
     
      </div>
      
      </InfiniteScroll>
       )}
       </div>
     
   
  )
}

export default BasicUserCard


