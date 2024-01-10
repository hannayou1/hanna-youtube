import React, { useEffect, useState } from 'react'
import { Main } from '../componets/section/Main'
import {developerText} from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
	const [loading, setLoading] =useState(true);

    useEffect( () => {
        setTimeout( () => {
            setLoading(false);
        },300)  //0.3초 뒤에 false로 바꿔줘라
    },[]);

    const developerPageClass = loading ? 'isLoading' : 'isLoaded';


	return (
		<Main 
		title = "추천 개발자"
		description="오늘의 추천 개발자 유튜버입니다.">
		
		<section id='developerPage' className={developerPageClass}>
		<h2>추천 개발자를 소개합니다.</h2>
		<div className='developer__inner'>
			{developerText.map((developer, key) => (
				<div className='developer' key={key}>
					<div className="developer__img play__icon">
						<Link to={`/channel/${developer.channelId}`}>
							<img src={developer.img} alt={developer.name} />
						</Link>
					</div>
					<div className="developer__info">
						<Link to={`/channel/${developer.channelId}`}>	
							{developer.name}
						</Link>	
					</div>
				</div>
			))}
		</div>
		</section>
		</Main>

	)
}

export default Developer