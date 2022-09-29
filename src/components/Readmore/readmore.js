import React ,{useState} from 'react';
import './readmore.css';

const ReadMore =({children ,maxCharCount = 100})=>{

    var text = children;
    const [isTruncated,setistruncated]= useState(true);
     
    const resultString = isTruncated?text.slice(0,maxCharCount):text;
  
    return(
           <React.Fragment>
               {resultString}
               <span className="ml-1 text-primary readmore" onClick={()=>{
                   setistruncated(!isTruncated);
               }}>{isTruncated?"Read more":"Read less"}</span>
           </React.Fragment>
    )
}

export default ReadMore;