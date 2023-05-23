import React,{useState,useEffect, Fragment} from 'react';
import '../style/Home.css';
import vague from '../assets/vague.webp';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';


function Home() {
  const [data,setData]=useState([]);
  const getData= async ()=>{
    const response = await fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    //console.log(response)
    const cards = await response.json();
    setData(cards)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <Header/>
      <img className='img-header' src={vague} alt='la vague frappe les rochers'/>
      <div className="cards">
        {
          data && data.length>0 && data.map((apart)=><Card card={apart} key={apart.id}/>)
        }
      </div>
      <Footer/>

    </>
  );
}

export default Home ;