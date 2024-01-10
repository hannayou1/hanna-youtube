import React, { useEffect, useState } from 'react'
import { Main } from '../componets/section/Main'
import {gsapText} from '../data/gssap'
import VideoCard from '../componets/contents/video/VideoCard'

const Gsap = () => {
	const [loading, setLoading] =useState(true);

    useEffect( () => {
        setTimeout( () => {
            setLoading(false);
        },300)  //0.3초 뒤에 false로 바꿔줘라
    },[]);

    const gsapPageClass = loading ? 'isLoading' : 'isLoaded';
	return (
		<Main 
		title = "GSAP 사이트"
		description="GSAP 사이트 튜토리얼 강의 입니다.">

		 <section id='gsapPage' className={gsapPageClass}>
                <h2>GSAP 웹사이트의 기초는 이 강의로~</h2>
                <div className="video__inner">
                    <VideoCard videos={gsapText} />
                </div>
            </section>
		</Main>
	)
}

export default Gsap