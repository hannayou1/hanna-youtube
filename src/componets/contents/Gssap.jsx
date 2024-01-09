import React from 'react'

import {gsapText} from '../../data/gssap'
import { Link } from 'react-router-dom'

export const Gssap = () => {
  return (
	<section id='gssap'>
	<h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
	<div className="video__inner">
		{gsapText.map((video, key) => (
			<div className="video" key={key}>
				<div className="video__thum play__icon" >
					<Link to={`/video/${video.videoId}`}>
						<img src={video.img} alt={video.title} />
					</Link>
				</div>	
			</div>
		))}
	</div>
</section>
  )
}

export default Gssap