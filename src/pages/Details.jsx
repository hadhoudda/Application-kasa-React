import React,{ useState,useEffect, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import '../style/Details.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';

import Carousel from '../components/Carousel';
import Title from '../components/Title';
import Host from '../components/Host';
import NotFound from './NotFound';



const  Details = ()=>{
  let userId = useParams()
  const [location,setLocation]=useState([0])
  const [index, setIndex] = useState(0);
  
    const imgPrev = () => {
      setIndex(index=== 0 ? location?.pictures?.length-1 : index-1);
    }
  
    const imgNext = () => {
      setIndex(index=== location?.pictures?.length-1 ? 0 : index+1);
    }
  
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
    //console.log(imgPrev)
  }

  useEffect(()=>{
    getData()
  })

  if (!location) {
    return <NotFound/>;
  }

  return (
    <>
      <Header/>
      <div className="carousel">
        <Carousel locationPictures={location?.pictures?.[index]}  key={location?.pictures?.id}/>
        <div className="arrow">
          <i onClick={imgPrev} className="fa-solid fa-angle-left arrow-left"></i> 
          <i onClick={imgNext} className="fa-solid fa-angle-right arrow-right"></i>
        </div>
      </div>

        <Title locationTitle={location?.title} />
        <Host locationHostPicture={location?.host?.picture} locationHostName={location?.host?.name} /> 
        <Description locationDescription={location?.description} />
      
      <Footer/>

    </>
  );
}

export default Details