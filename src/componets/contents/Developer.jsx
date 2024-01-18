import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import file01 from '../../assets/img/icon/genericfile.svg'
import file_ppt from '../../assets/img/icon/pptx.svg'



export const Developer = ({videos, title , id}) => {
	const [loading, setLoading] = useState(true); //변수 설정 true로 설정

	useEffect ( () => {
		setTimeout( () => {
			setLoading(false)
		},400);
	}, [] )

	const developerClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <section id={id} className={developerClass}>
        <h2>{title}</h2>
		<div className='developer__inner'>
        <div class="file-table">
                        <div class="table-file-list">
                            <div class="thead">
                                <div class="theadList-inner">
                                    <div class="data-select">
                                        <div class="item">
                                            <div class="div-check-box">
                                                <input type="checkbox" name="" id="chk3" />
                                                <label for="chk3" class="check-box check-box__chk">
                                                    <span class="CircleRing"></span>
                                                </label>
                                                    
                                            </div>
                                        </div>
                                        <div class="item text-center">
                                            <img src={file01} alt="" class="text-img" />
                                        </div>
                                    </div>
                                    <div class="data-body">
                                        <div class="data-title">
                                            <div class="item">
                                                <a href="javascript:void(0)" class="a_folder" data-id="4fbcfa8035f7"
                                                title="01">이름</a>
                                            </div>
                                        </div>
                                        <div class="data-detail">
                                            <div class="item">용량</div>
                                            <div class="item">수정된 날짜</div>
                                            <div class="item">수정한 사람</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tbodyList-file">
                                <div class="tbodyList-inner">
                                    <div class="data-select">
                                        <div class="item">
                                            <div class="div-check-box opacity_1">
                                                <input type="checkbox" name="" id="chk3" />
                                                <label for="chk3" class="check-box check-box__chk">
                                                    <span class="CircleRing"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="item text-center">
                                            <img src={file_ppt} alt="" class="text-img" />
                                        </div>
                                    </div>
                                    <div class="data-body">
                                        <div class="data-title">
                                            <div class="item">
                                                <a href="javascript:void(0)" class="a_folder" data-id="4fbcfa8035f7" title="01">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis modi minus neque repellat veritatis. Reiciendis, repellendus cumque aspernatur, numquam sit esse nisi quae voluptatum iusto distinctio sequi obcaecati aliquid assumenda.
                                                </a>
                                                {/* <span>Projects &gt; 자이소프트 &gt; publishing &gt; potal &gt; contents</span> */}
                                            </div>
                                            <div class="ellipsis">
                                                <ul class="dropdown-popup">
                                                    <li>
                                                        <span>Teams에서 편집</span>
                                                    </li>
                                                    <li>
                                                        <span>데스크톱앱에서 열기</span>
                                                    </li>
                                                    <li>
                                                        <span>브라우저에서 열기</span>
                                                    </li>
                                                    <li>
                                                        <span>다운로드</span>
                                                    </li>
                                                    <li>
                                                        <span>링크복사</span>
                                                    </li>
                                                    <li>
                                                        <span>이동</span>
                                                    </li>
                                                    <li>
                                                        <span>복사</span>
                                                    </li>
                                                    <li>
                                                        <span>삭제</span>
                                                    </li>
                                                    <li>
                                                        <span>이름변경</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="data-detail">
                                            <div class="item">333.33KB</div>
                                            <div class="item">8월 24일</div>
                                            <div class="item">신진철</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="file-more">
                                    <a href="javascript:void(0)" class="btn-more">더보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
			
			
		</div>
    </section>
  )
}

export default Developer