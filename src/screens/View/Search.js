import React, { useEffect, useState } from 'react'
import { useLocation, Link } from "react-router-dom"
import background from "../../assets/images/b.jpg"
import fireDb from "../../firebase";
import SubHeader from '../../components/SubHeader/SubHeader';
import Header from '../../components/Header/Header';
import Head from '../../components/Header/head';

const Search = () => {
    const [data, setData] = useState({});
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let search = query.get("eventname");


    useEffect(() => {
        searchData();

    }, [search])
    const searchData = () => {
        fireDb.child("Events").orderByChild("eventname").equalTo(search).on("value", (snapshot) => {
            // const data = snapshot.val().join('').toLowerCase().includes(snapshot.val().toLowerCase());

            if (snapshot.val()) {
                const data = snapshot.val();
                setData(data);
            }
        });
    };
    return (
        <div className='buttondiv'>
            <Head />
            <SubHeader />

            <div className='eventContainer'>

                {Object.keys(data).map((id, index) => {
                    return (
                        <div className='eventCard'>
                            <div className='eventImage'>
                                <img src={background} height="100%" width="100%" />
                            </div>
                            <div className='eventInfo'>
                                <div className='location'>{data[id].eventlocation}</div>
                                <div className='date'>{data[id].eventdate}</div>

                            </div>
                            <div className='eventDetails'>
                                <div className='heading'> {data[id].eventname} </div>
                                <div className='desc'> {data[id].eventtype}</div>

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
        </div>
    )
}

export default Search
