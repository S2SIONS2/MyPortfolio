import './ModalCustom.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import main from '../assets/BueaLine.png'
import main2 from '../assets/BueaLine2.png'

const BueaLine:React.FC = () => {
    return (
        <div className='BueaLine PjModal'>
            <ul className='iconWrap'>
                <li className='web'>
                    <a href='http://beauline.sionsdiary.site' target='_blank'>
                        <FontAwesomeIcon icon={faPager} />
                    </a>
                </li>
                <li className='gitHub'>
                    <a href='https://github.com/S2SIONS2/BueatyLine' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li> 
            </ul>
            <section className='row align-items-center justify-content-center pt-3 pb-3'>
                <div className='titleWrap'>
                    <h2 className='text-center'>BueaLine</h2>
                    <p className='text-center'>2024. 07. 01 ~ 09. 01</p>
                </div>
            </section>
            <section>
                <ul className='slideWrap'>
                    <li className='slideImg'>
                        <img src={main} alt='slide image' />
                    </li>
                    <li className='slideImg'>
                        <img src={main2} alt='slide image' />
                    </li>
                </ul>
            </section>
            <section className='info'>
                <p>
                    <span>URL: </span>
                    <a href='http://beauline.sionsdiary.site' target='_blank'>http://beauline.sionsdiary.site</a>
                </p>
                <p>
                    <span>소개: </span>
                    가게 운영을 위한 모바일 관리자 웹앱입니다.
                </p>
                <p>
                    <span>개발 인원: </span>
                    2인
                </p>
                <p>
                    <span>담당 역할: </span>
                    기획, 프론트 개발, 퍼블리싱
                </p>
                <p>
                    <span>사용 기술: </span>
                    React, Bootstrap5, Scss, JWT, API, Recharts
                </p>
            </section>
            <section>
                <h3>프로젝트 특징</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. 로그인 기능 구현 및 로그인 유지
                    </div>
                    <ul>
                        <li>JWT 기반 로그인 구현</li>
                        <li>AccessToken, RefreshToken을 이용한 인증 확인</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. API를 이용하여 리스트 호출, 추가, 수정 및 삭제와 검색 기능
                    </div>
                    <ul>
                        <li>전화번호부, 카테고리, 총 작업 내역</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>주요 기능</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. 총 작업 내역 리스트
                    </div>
                    <ul>
                        <li>작업(리스트) 등록, 수정, 삭제 가능</li>
                        <li>날짜, 이름 별 검색 기능</li>
                        <li>미수금 내역 체크 시 외상 리스트만 확인</li>
                        <li>작업 완료 버튼과 리스트 체크박스로 작업 일괄 처리 가능</li>
                        <li>작업 내역 리스트 수정 중 작업 추가 가능하게 수정</li>
                        <li>리스트 수정 시 진행 중이던 작업 수정 가능하게 변경</li>
                        <li>결제, 작업완료 여부 수정 및 메모 수정 가능</li>
                        <li>작업 중복 추가 방지 및 체크 박스 표시</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. 통계 차트
                    </div>
                    <ul>
                        <li>Recharts 라이브러리를 이용한 차트 작업</li>
                        <li>총 예상 결과, 시술 별 총 금액, 총 인원 등의 차트 표시</li>
                        <li>바 차트, 원형 차트 두가지 차트 종류</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>추가 예정 기능</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. apk 앱으로 제작 예정
                    </div>
                    <div className='listTitle'>
                        2. 새로 리뉴얼하여 제작 예정
                    </div>
                </div>
            </section>

            <section>
                <h3>트러블 슈팅</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. 로그인 연결 후 리스트 추가 오류
                    </div>
                    <ul>
                        <li>문제: 헤더에 액세스 토큰 값이 없어 화면이 뜨지 않고 오류가 발생</li>
                        <li>해결: api 호출 시 헤더에 액세스 토큰 값으로 권한을 부여함</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. Typescript 사용으로 인한 타입 지정 오류
                    </div>
                    <ul>
                        <li>문제: 새로고침 시에는 list 값이 담기지 않고, 화면 리렌더링시 list 값이 담김</li>
                        <li>해결: useEffect를 이용, list 값이 변할 때 다시 리렌더링하며 화면에 표현함</li>
                        <li><a href='https://deer-develope-diary.tistory.com/26' target='_blank'>블로그 포스팅 바로가기</a></li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        3. 리스트 호출 오류
                    </div>
                    <ul>
                        <li>문제: 리스트 호출이 계속 반복해서 일어나 검색, 분류 기능이 작동했다가 안됐다가 반복함.</li>
                        <li>해결: useEffect로 반복 호출 되어 야기되던 에러를 해결하기 위해 리스트 호출 함수를 정리 및 getList 함수로 api 호출 통일화</li>
                        <li>알게된 점: 무분별한 useEffect 사용은 오히려 실행 순서에 대한 혼란스러움을 가중시킬 수 있으니, 상황과 순서에 맞게 작성하기</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>프로젝트를 통해 배운점</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. JWT 로그인 구현
                    </div>
                    <ul>
                        <li>
                            <a href='https://deer-develope-diary.tistory.com/19' target='_blank'>블로그 포스팅: 1. Route를 통한 로그인 경로 설정</a>
                        </li>
                        <li>
                            <a href='https://deer-develope-diary.tistory.com/23' target='_blank'>블로그 포스팅: 2. JWT를 이용한 로그인 구현 방법</a>
                        </li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. API get과 post 차이
                    </div>
                    <ul>
                        <li>get: api 리스트를 불러올 때 사용하며, 파라미터에 특정 조건을 넣으면 조건에 맞는 리스트만 불러올 수 있다.</li>
                        <li>post: api 리스트를 추가, 수정, 삭제 등 서버에 리스트(데이터)를 보내 리스트를 변경 할 수 있다.</li>
                        <li><a href='https://deer-develope-diary.tistory.com/25' target='_blank'>블로그 포스팅 바로가기</a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default BueaLine;