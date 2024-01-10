import React, { useEffect, useState } from 'react'
import { Main } from '../componets/section/Main'
import VideoCard from '../componets/contents/video/VideoCard'

import {webdText} from '../data/webd'

const Webd = () => {
    const [loading, setLoading] =useState(true);

    useEffect( () => {
        setTimeout( () => {
            setLoading(false);
        },300)  //0.3초 뒤에 false로 바꿔줘라
    },[]);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다.">
            
            <section id='webdPage' className={webdPageClass} >
                <h2>웹디자인 기능사 한번에 따자!</h2>
                <div className="video__inner">
                    <VideoCard videos={webdText} />
                </div>
            </section>
        </Main>
    )
}

export default Webd