import React,{ useState,useEffect, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import '../style/Details.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
//import Pictures from '../components/Description';
import Carousel from '../components/Carousel';
import Title from '../components/Title';
import Host from '../components/Host';



function  Details(){
  let userId = useParams()
  const [location,setLocation]=useState([]);
  const getData= async ()=>{
    const response = await fetch('../data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    const cards = await response.json()
    const location = cards.find((card)=> card.id === userId.id)
    setLocation(location)
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <Header/>
      
        
          
            <Carousel locationPictures={location?.pictures} />
          
         
       
        <Title locationTitle={location?.title} />
        <Host locationHostPicture={location?.host?.picture} locationHostName={location?.host?.name} /> 
        <Description locationDescription={location?.description} />
      
      <Footer/>

    </>
  );
}

export default Details