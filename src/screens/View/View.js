import React ,{useEffect, useState}from 'react'
import fireDb from "../../firebase";
import "./Styles.css";
import ReactPaginate from "react-paginate";
import background from "../../assets/images/b.jpg"
const ViewEvent = () => {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 4;
    const pageVisited = pageNumber * usersPerPage ;
    

    useEffect(() => {
        console.log("inside effect")
        fireDb.child('Events').on('value', snapshot => {
            snapshot.forEach(function(childSnap) {
                data.push({
                    data:childSnap.val()
                });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            });
            setData(data);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

        });                                                                                                                                                                                                                                                                                                                                                                             
        
    }, []); 
    const handleReset = () => {
        console.log("6666666666666666666666666666",data)
        const resetdata = [];
        fireDb.child('Events').on('value', snapshot => {
            snapshot.forEach(function(childSnap) {
                resetdata.push({
                    data:childSnap.val()
                });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            });
            setData(resetdata);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

        }); 

    };
    const filterData = (value) => {
        let filterData = [];
        fireDb.child('Events').orderByChild('eventtype').equalTo(value).on('value', snapshot => {
            console.log("111111111",snapshot.val())
            snapshot.forEach(function(childSnap) {
                
                filterData.push({
                    data :  childSnap.val()
                });
                
            });
            console.log("aftre filter", filterData)
            setData(filterData)
        })
    }


    

  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected)
  
  };

  return (
    <div className='buttondiv'>
          <label>Event type :</label>
          <button onClick={() => filterData("Online")}>Online</button>
          <button onClick={() => filterData("Offline")}>Offline</button>
          <button onClick={handleReset}>Reset</button>
      
    <div className='eventContainer'>
     {/* {console.log("insidee of return" , data)} */}
        {data.slice(pageVisited, pageVisited + usersPerPage).map((item) => {
            
            return (
                <div className='eventCard'>
        <div className='eventImage'>
            <img src={background} height="100%" width="100%"/>
        </div>
        <div className='eventInfo'>
        <div className='location'>{item.data.eventlocation}</div>
        <div className='date'>{item.data.eventdate}</div>
        
        </div>
        <div className='eventDetails'>
        <div className='heading'> {item.data.eventname} </div>
        <div className='desc'> {item.data.eventtype}</div>
       
        {/* <div className='desc'> {data[id].description}</div> */}
        


        </div>
        <div className='eventSell'>
        <div className='view'> <button className='viewButton'> View</button></div>
        <div className='prize'></div>
        </div>
        </div> 

            )
        })}
        
   

    </div>
    <ReactPaginate 
     previousLabel={"Previous"}
     nextLabel={"Next"}
     pageCount={pageCount}
     onPageChange={changePage} 
     containerClassName={"paginationBttns"}
     previousLinkClassName={"previousBttn"}
     nextLinkClassName= {"nextBttn"}
     disabledClassName={"paginationDisabled"}
     activeClassName={"paginationActive"}


      />
    </div>
  )
}

export default ViewEvent
