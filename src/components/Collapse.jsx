import React,{ useState} from 'react';
import '../style/collapse.css';

const Collapse = ({titleCollapse}, {txtCollapse}) =>{
      
        const [isOpen, setIsOpen] = useState(false)
     
        return isOpen ? (
            <div className='lmj-cart'>
                <i className="fa-sharp fa-solid fa-angle-up" onClick={() => setIsOpen(false)}></i>
                <div>
                    <h3> {titleCollapse} </h3>
                    <p> {txtCollapse} </p>
                </div>
            </div>
        ) : (
            <i className="fa-solid fa-angle-down" onClick={() => setIsOpen(true)}></i>
            

        )
    }


export default Collapse