import React from 'react'
import { Main } from '../componets/section/Main'
import { Today } from '../componets/contents/Today'
import { Developer } from '../componets/contents/Developer'
import { VideoSlider } from '../componets/contents/video/VideoSlider'

import {webdText} from '../data/webd'
import {websiteText} from '../data/website'
import {gsapText} from '../data/gssap'
import {portfolioText} from '../data/portfolio'
import {youtubeText} from '../data/youtube'
import {developerText} from '../data/developer'
import {todayText} from '../data/today'

const Home = () => {
  return (
	<Main 
		title="한나 유튜브" 
		description="한나 유튜브에 오신 것을 환영합니다."
	>
		<Today videos={todayText} id='today' />
		<Developer videos={developerText} title='추천 개발자를 소개합니다.' id='developer' />
		<VideoSlider videos={webdText} title='웹디자인기능사 준비는 이걸로!' id='webd'/>
		<VideoSlider videos={websiteText} title='😛 웹표준 사이트 만들기 기초 다지기' id='website'/>
		<VideoSlider videos={gsapText} title='🤓 GSAP 패럴랙스 효과를 하고 싶다면!' id='gsap'/>
		<VideoSlider videos={portfolioText} title='🤗 포트폴리오 만드는 방법을 공유합니다.' id='portfolio'/>
		<VideoSlider videos={youtubeText} title='😱 지금 이 코딩을 영상으로' id='youtube'/>
	</Main>
	
  )
}

export default Home