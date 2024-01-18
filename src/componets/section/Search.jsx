import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const headerNav = [
	{
		title:"열기", 
		url:"#intro"
	},
	{
		title:"링크 복사", 
		url:"#skill"
	},
	{
		title:"다운로드", 
		url:"#site"
	},
	{
		title:"삭제", 
		url:"#port"
	},
	{
		title:"맨 위에 고정", 
		url:"#contact"
	},
]



export const Search = () => {
    const [ searchKeyword, setSearchKeyword ] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchKeyword);
        if(searchKeyword){
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

	// 토글 메뉴를 위해 변수 선언
	const [show, setShow] =useState(false);

	const toggleMenu = () => {
		setShow((prevShow) => !prevShow)
	}


   
    return (
        <div id='search'>
            <div className='search__inner'>
			<div className='header_left'>
				<div class="btn-text btn-text__ham"></div>
				<nav 
					className={`header__nav ${show ? "show" : ""}`} 
					role='navigation' 
					aria-label='메인 메뉴'
					> {/* 이 값이 true면 show 넣어주고 아니면 아무것도 넣지 마라*/}
					<ul>
						{/* key 는 index를 의미함 */}
						{headerNav.map((nav, key) => (
							<li key={key}>
								<a href={nav.url}>{nav.title}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>	
			<div className='header_right'>
				<div class="btn-text">
					<i class="ms-Icon ms-Icon--Clear ico-ms ico-14 small" aria-hidden="true"></i>
					<span>1</span>개 선택됨
                </div>
				
				<div class="btn-text">
					<i class="ms-Icon ms-Icon--Filter ico-ms ico-15" aria-hidden="true"></i>
					<span>필터</span>
                </div>
				<label htmlFor='searchInput'>
						<span className='ir'>검색</span>
				</label>
				<input 
					type='search' 
					name='searchInput' 
					id='searchInput' 
					autoComplete='off'
					className='search__input'
					placeholder='검색어를 입력해주세요!'
					onChange={e => setSearchKeyword(e.target.value)}
					onKeyDown={e => {
						if(e.key === 'Enter'){
							handleSearch();
						}
					}}
				/>			
			</div>
               
				
            </div>
        </div>
    )
}

export default Search