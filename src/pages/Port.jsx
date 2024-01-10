import React, { useEffect, useState } from 'react'
import { Main } from '../componets/section/Main'
import {portfolioText} from '../data/portfolio'
import VideoCard from '../componets/contents/video/VideoCard'

const Port = () => {
    const [loading, setLoading] =useState(true);

    useEffect( () => {
        setTimeout( () => {
            setLoading(false);
        },300)  //0.3초 뒤에 false로 바꿔줘라
    },[]);

    const portPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다.">

             <section id='portPage' className={portPageClass}>
                <h2>포트폴리오 사이트 튜토리얼 강의입니다.</h2>
                <div className="video__inner">
                    <VideoCard videos={portfolioText} />
                </div>
            </section>
        </Main>
    )
}

export default Port
