import React, { useEffect, useState } from 'react'
import { Main } from '../componets/section/Main'
import {websiteText} from '../data/website'
import VideoCard from '../componets/contents/video/VideoCard'

const Website = () => {
    const [loading, setLoading] =useState(true);

    useEffect( () => {
        setTimeout( () => {
            setLoading(false);
        },300)  //0.3초 뒤에 false로 바꿔줘라
    },[]);

    const websitePageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "웹표준 사이트"
            description="웹표준 사이트 튜토리얼 강의입니다."
        >

            <section id='websitePage' className={websitePageClass}>
                <h2>웹사이트의 기초는 이 강의로~</h2>
                <div className="video__inner">
                    <VideoCard videos={websiteText} />
                </div>
            </section>
        </Main>
    )
}

export default Website