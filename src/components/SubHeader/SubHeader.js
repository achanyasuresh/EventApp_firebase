import React from 'react'
import background from "../../assets/images/a.jpeg"
import Typography from '@material-ui/core/Typography'; 
import "./Styles.css";
const SubHeader = () => {
  return (
    <div className='eventContainer'>
     <img src={background} height="250" width="1848" />
     <Typography variant='h2' align='center'>
    All your event make you happy
    </Typography>
    </div>
    
  )
}

export default SubHeader
