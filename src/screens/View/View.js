import React, { useEffect, useState } from 'react'
import fireDb from "../../firebase";
import "./Styles.css";
import ReactPaginate from "react-paginate";
import background from "../../assets/images/b.jpg"
const ViewEvent = () => {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
   

    const usersPerPage = 4;
    const pageVisited = pageNumber * usersPerPage;


    useEffect(() => {
        // const uid = localStorage.getItem("uid")
        // getProfileDetails(uid);

        fireDb.child('Events').on('value', snapshot => {
            snapshot.forEach(function (childSnap) {
                data.push({
                    data: childSnap.val()
                });
            });
            setData(data);
            
        //    fireDb.child('Events')
        //         .orderByKey()
        //         .limitToFirst(5)
        //         .once('value').then(r => r.val()).catch(e => console.log("eeeeeeee",e));


        });

    

    }, []);
    // getProfileDetails = (uid) =>{
    //     console.log("11111111111111111")

    // }    
    const handleReset = () => {

        const resetdata = [];
        fireDb.child('Events').on('value', snapshot => {
            snapshot.forEach(function (childSnap) {
                resetdata.push({
                    data: childSnap.val()
                });
            });
            setData(resetdata);

        });

    };
    const filterData = (value) => {
        let filterData = [];
        fireDb.child('Events').orderByChild('eventtype').equalTo(value).on('value', snapshot => {

            snapshot.forEach(function (childSnap) {

                filterData.push({
                    data: childSnap.val()
                });

            });

            setData(filterData)
        })
    }




    const pageCount = Math.ceil(data.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)

    };

    return (
        <div className='buttondiv'>
            <div className='buttondiv1'>

                <button className='Button1' onClick={() => filterData("Online")}>Online</button>
                <button className='Button2' onClick={() => filterData("Offline")}>Offline</button>
                <button className='Button3' onClick={handleReset}>Reset</button>
            </div>
            <div className='eventContainer'>

                {data.slice(pageVisited, pageVisited + usersPerPage).map((item) => {

                    return (
                        <div className='eventCard'>
                            <div className='eventImage'>
                                <img src={background} height="100%" width="100%" />
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
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}


            />
        </div>
    )
}

export default ViewEvent
























// import React, { useEffect, useState } from 'react'
// import fireDb from "../../firebase";
// import "./Styles.css";
// import ReactPaginate from "react-paginate";
// import background from "../../assets/images/b.jpg"
// import { Table, Button, ButtonGroup } from "react-bootstrap";
// import { Flag } from '@material-ui/icons';
// import { Last } from 'react-bootstrap/esm/PageItem';
// const ViewEvent = () => {
//     const [data, setData] = useState([]);
//     const [pageNumber, setPageNumber] = useState(0);
//     const [loading , SetLoading] = useState(false);
//     const [limit, SetLimit]=useState(4);
//     const [message, SetMessage]= useState([]);
//     const [page, setPage] = useState(1)
    
   
//     const usersPerPage = 4;
//     const pageVisited = pageNumber * usersPerPage;


//     useEffect(() => {
//         // const uid = localStorage.getItem("uid")
//         // getProfileDetails(uid);
       
//         onFirebaseData () ;

        
//         // fireDb.child('Events').limitToLast(limit).on('value', snapshot => {
//         //     snapshot.forEach(function (childSnap) {
//         //         data.push({
//         //             data: childSnap.val()
//         //         });
//         //     });
//         //     setData(data);
            

//         // });

    

//     }, []);
//     const onFirebaseData = () =>{
//         // SetLoading(true)
//         fireDb.child('Events').limitToLast(limit).on('value', snapshot => {
//             snapshot.forEach(function (childSnap) {
//                 data.push({
//                     data: childSnap.val()
                    
//                 });
//                 console.log("childddddd", childSnap.val())
//             });
//             console.log("dataaaaaaa", data)
//             setData(data);
            

//         });

//     }
//     // getProfileDetails = (uid) =>{
//     //     console.log("11111111111111111")

//     // }    
//     const handleReset = () => {

//         const resetdata = [];
//         fireDb.child('Events').on('value', snapshot => {
//             snapshot.forEach(function (childSnap) {
//                 resetdata.push({
//                     data: childSnap.val()
//                 });
//             });
//             setData(resetdata);

//         });

//     };
//     const filterData = (value) => {
//         let filterData = [];
//         fireDb.child('Events').orderByChild('eventtype').equalTo(value).on('value', snapshot => {

//             snapshot.forEach(function (childSnap) {

//                 filterData.push({
//                     data: childSnap.val()
//                 });

//             });

//             setData(filterData)
//         })
//     }
    
//     const nextPage  = () => {
//         var pageValue = [];
//         // const pageThree = fireDb.child('Events').orderByChild("eventname").limitToFirst(10).off(20);
//         // console.log(".....................", pageThree)


//         console.log("firrstttttttttttt",data)
//         setPage(page + 1);
//         // SetLimit(limit + 2);

          
//            var Nextval = [];
//         fireDb.child('Events').orderByChild('eventname').startAfter(Last['eventname']).limitToFirst(limit).on('value', snapshot => {
//             snapshot.forEach(function (childSnap) {
//                 Nextval.push({
//                     data: childSnap.val()
                    
//                 });

//                 console.log("childddddd", childSnap.val())
//             });
//             // array1 = array1.filter(val => !array2.includes(val));
//             pageValue = Nextval;
            
//             var index;

//             for (var i=0; i<Nextval.length; i++) {
                
//                 // console.log("valllllllllllll", Nextval[i].data)
//                 // index = data.indexOf(Nextval[i].data);
//                 // console.log("lofgggggggggggg",index)
//                 // if (index > -1) {
//                 //     Nextval.splice(index, 1);
//                 // }
//                 for(var j=0 ; j<data.length ; j++ ) {
                    
                    
               
//                 // console.log("2222222222222", Nextval[i].data.eventname, data[j].data.eventname)
//                 if(Nextval[i].data.eventname == data[j].data.eventname){
//                     // console.log("2222222222222", Nextval[i].data)
//                     pageValue.splice(i,1);
//                     // console.log("nexttttttt", Nextval)
                    
                
//                 }
//             }
//             // console.log("lastttttttttttt", Nextval)

//             }
              

//             console.log("000000000000000000000000000000000", pageValue)

//             setData(pageValue);

            

//         });
       

//     }

//     const prevPage  = () => { 
//         var Prevtval = [];
//         fireDb.child('Events').orderordByChild('eventname').startAfter(Last['eventname']).limitToFirst(limit).on('value', snapshot => {
//             snapshot.forEach(function (childSnap) {
//                 Prevtval.push({
//                     data: childSnap.val()
                    
//                 });
//             });
//             console.log("Prevvvvdataaaaaaa", Prevtval)
//             setData(Prevtval);

//         });


//     }
//     // const showPrevious = ({item}) => {
//     //     const prevVal =[];
//     //     fireDb.child('Events').limitToLast(limit).on('value', snapshot => {
//     //         snapshot.forEach(function (childSnap) {
//     //             // const valdata = [];
//     //             prevVal.push({
//     //                 data: childSnap.val()
                    
//     //             });
//     //             console.log("childddddd", childSnap.val())
//     //         });
//     //         console.log("dataaaaaaa", data)
//     //         setData(prevVal);
//     //         setPage(page - 1)
            

//     //     });

//     // }

//     // const showNext = ({ item }) => {
//     //     const nextVal = [];
//     //     if(data.length === 0) {
//     //         alert("Thats all we have for now !")
//     //     } else {
            
//     //         fireDb.child('Events').limitToLast(limit).on('value', snapshot => {
//     //             snapshot.forEach(function (childSnap) {
//     //                 // const valdata = [];
//     //                 nextVal.push({
//     //                     data: childSnap.val()
                        
//     //                 });
//     //                 console.log("childddddd", childSnap.val())
//     //             });
//     //             console.log("dataaaaaaa", data)
//     //             setData(nextVal);
//     //             setPage(page + 1)
                
    
//     //         });


//     //     }

//     // }




//     const pageCount = Math.ceil(data.length / usersPerPage);
//     const changePage = ({ selected }) => {
//         setPageNumber(selected)

//     };

//     return (
//         <div className='buttondiv'>
//             <div className='buttondiv1'>

//             {/* <ButtonGroup>

//             {
//                 //show previous button only when we have items
//                 page === 1 ? '' : 
//                 <Button onClick={() => showPrevious({ item: data[0] }) }>Previous</Button>
//             }

//                 {
//                 //show next button only when we have items
//                 data.length < 5 ? '' :
//                 <Button onClick={() => showNext({ item: data[data.length - 1] })}>Next</Button>
//             }
//              </ButtonGroup> */}

//                 <button className='Button1' onClick={() => filterData("Online")}>Online</button>
//                 <button className='Button2' onClick={() => filterData("Offline")}>Offline</button>
//                 <button className='Button3' onClick={handleReset}>Reset</button>
//                 {/* {!loading && message (
//                  <button className='Button3' onClick={nextPage}>Next</button>
//              ) } */}
             
//               <button type="button" className='Button3' onClick={nextPage}>
//                 More
//               </button>
            
               
//               <button type="button" className='Button3' onClick={prevPage}>
//                 Prev
//               </button>
            

               
//             </div>
            

//             <div className='eventContainer'>

//                 {data.map((item) => {

//                     return (
//                         <div className='eventCard'>
//                             <div className='eventImage'>
//                                 <img src={background} height="100%" width="100%" />
//                             </div>
//                             <div className='eventInfo'>
//                                 <div className='location'>{item.data.eventlocation}</div>
//                                 <div className='date'>{item.data.eventdate}</div>

//                             </div>
//                             <div className='eventDetails'>
//                                 <div className='heading'> {item.data.eventname} </div>
//                                 <div className='desc'> {item.data.eventtype}</div>

//                                 {/* <div className='desc'> {data[id].description}</div> */}



//                             </div>
//                             <div className='eventSell'>
//                                 <div className='view'> <button className='viewButton'> View</button></div>
//                                 <div className='prize'></div>
//                             </div>
//                         </div>

                        

//                     )
//                 })}
                  

//             </div>
           

//             {/* <ReactPaginate
//                 previousLabel={"Previous"}
//                 nextLabel={"Next"}
//                 pageCount={pageCount}
//                 onPageChange={changePage}
//                 containerClassName={"paginationBttns"}
//                 previousLinkClassName={"previousBttn"}
//                 nextLinkClassName={"nextBttn"}
//                 disabledClassName={"paginationDisabled"}
//                 activeClassName={"paginationActive"}


//             /> */}
//         </div>
//     )
// }

// export default ViewEvent
