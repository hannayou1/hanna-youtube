import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Main } from '../componets/section/Main'

import VideoSearch from '../componets/contents/video/VideoSearch'


const Search = () => {
    const {searchId} = useParams() ; //비디오를 가져와라
    const [videos, setVideos] = useState([]);   // 갖고온 비디오를 저장 배열로 넣어줘라

    useEffect( () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setVideos(result.items)
        })
        .catch(error => console.log(error));

    }, [searchId]); //searchID 값이 바뀌면 인지해 줄거야


    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id='searchPage' >
                <div className="video__inner search" >
                    <VideoSearch videos={videos}/>
                </div>
            </section>
        </Main>
    )
}

export default Search
