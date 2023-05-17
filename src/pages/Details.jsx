import React,{ useState,useEffect, Fragment} from 'react';
import '../style/Details.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import Description from '../components/Description';
//import Gallery from '../components/Gallery';
import Title from '../components/Title';

function  Details(){
  const [data,setData]=useState([]);
  const getData= async ()=>{
    const response = await fetch('../data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    console.log(response)
    const card = await response.json()
    setData(card)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <Header/>
      <div>
      {
        console.log(window.location.href)
        }
      {
        console.log(window.location.pathname)
        }
      {
        console.log(data)
        }
      {
        data && data.length>0 && data.map((apart)=><Title props={apart} key={apart.id}/>)
        }
      </div>
      <Footer/>

    </>
  );
}


export default Details