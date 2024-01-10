import React, { useEffect, useState } from 'react'
import { Main } from '../componets/section/Main'
import {youtubeText} from '../data/youtube'
import VideoCard from '../componets/contents/video/VideoCard'

const Youtube = () => {
    const [loading, setLoading] =useState(true);

    useEffect( () => {
        setTimeout( () => {
            setLoading(false);
        },300)  //0.3초 뒤에 false로 바꿔줘라
    },[]);

    const youtubePageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "유튜브 사이트"
            description="유튜브 사이트 튜토리얼 강의입니다.">
               <section id='webdPage' className={youtubePageClass}>
                <h2>나만의 유튜브 사이트 만들기</h2>
                <div className="video__inner">
                    <VideoCard videos={youtubeText} />
                </div>
            </section>
        </Main>
    )
}

export default Youtube