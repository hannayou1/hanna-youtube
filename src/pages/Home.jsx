import React from 'react'
import { Main } from '../componets/section/Main'
import { Today } from '../componets/contents/Today'
import { Developer } from '../componets/contents/Developer'
import { Webd } from '../componets/contents/Webd'
import { Website } from '../componets/contents/Website'
import { Gssap } from '../componets/contents/Gssap'
import { Portfolio } from '../componets/contents/Portfolio'
import { Youtube } from '../componets/contents/Youtube'


const Home = () => {
  return (
	<Main 
		title="한나 유튜브" 
		description="한나 유튜브에 오신 것을 환영합니다."
	>
		<Today />
		<Developer />
		<Webd />
		<Website />
		<Gssap />
		<Portfolio />
		<Youtube />
		
	</Main>
	
  )
}

export default Home