import React from 'react'
import { Main } from '../componets/section/Main'

import { Developer } from '../componets/contents/Developer'
import {developerText} from '../data/developer'
import {todayText} from '../data/today'

const Home = () => {
  return (
	<Main 
		title="공유 파일" 
		description="공유 파일 페이지 입니다."
	>
		{/* <Today videos={todayText} id='today' /> */}
		<Developer videos={developerText} title='추천 개발자를 소개합니다.' id='developer' />
	
	</Main>
	
  )
}

export default Home