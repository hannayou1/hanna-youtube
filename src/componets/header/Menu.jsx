import React from 'react'

import {headerMenus, searchKeyword} from '../../data/header'
import { Link, useLocation } from 'react-router-dom'

export const Menu = () => {
  const location = useLocation();
  return (
   <> 
    <nav className='header__menu'>
        {/* <ul className='menu'>
           {headerMenus.map((menu, key) => (
                <li key={key} className={location.pathname === menu.src ? 'actvie' : ''}>
                    <Link to ={menu.src}>
                        {menu.icon}{menu.title}
                    </Link>
                </li>
          


           ) )}
        </ul> */}
        <ul className="highest-rank-lsit">
                <li>
                    <div className="highest-rank-lsit__title">
                        <div className="triangle triangle-gray"></div>
                        <span>내 팀즈 그룹</span>
						{headerMenus.map((menu, key) => (
							<ul className="middle-rank-list">
								<li key={key} className={location.pathname === menu.src ? 'actvie' : ''}>
									<div className="middle-rank-list__title">
										<div className="triangle triangle-down line_up"></div>
										<div className="team-photo">삼</div>
										<div className="team-name">{menu.title}</div>
										<div className="left_bookmark">                   
										</div> 
									</div>
									<ul className="low-rank-list" >
									<li><Link to={menu.submenu01_src}>{menu.submenu01}</Link></li>
										<li>1234567</li>
										<li>신규 채널</li>
									</ul>
								</li>
							</ul>
						))}

                    </div>
                </li>
                
			
            </ul>
    </nav>
    </>
  )
}

export default Menu
