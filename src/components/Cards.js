import React,{useState,useEffect} from 'react';
import '../style/Cards.css';


function Cards() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="cards">
     {
       data && data.length>0 && data.map((card)=><div key={card.id} className='card'>
          <img src={card.cover}  alt={card.title}/>
          <p className='title-card'> {card.title}</p>
        </div>
       )
     }
    </div>
  );
}

export default Cards ;