import React,{ useState,useEffect, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import '../style/Details.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Pictures from '../components/Pictures';
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
    //console.log(response)
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
      <div>
        <div className="carrousel">
          {
            location?.pictures && location?.pictures.length>0 
            && location?.pictures.map((picture)=><Pictures locationPictures={picture} key={location?.pictures.indexOf(picture)}/>)
          }
        </div>
        <Title locationTitle={location?.title} />
        <Host locationHostPicture={location?.host?.picture} locationHostName={location?.host?.name} /> 
        <Description locationDescription={location?.description} />
      </div>
      <Footer/>

    </>
  );
}

export default Details