import './ModalCustom.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import main from '../assets/Record.gif'

const Record:React.FC = () => {
    return (
        <div className='Record PjModal'>
            <ul className='iconWrap'>
                <li className='web'>
                    <a href='https://record-lilac.vercel.app/introduce' target='_blank'>
                        <FontAwesomeIcon icon={faPager} />
                    </a>
                </li>
                <li className='gitHub'>
                    <a href='https://github.com/S2SIONS2/Record' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li> 
            </ul>
            <section className='row align-items-center justify-content-center pt-3 pb-3'>
                <div className='titleWrap'>
                    <h2 className='text-center'>Record</h2>
                    <p className='text-center'>2024. 01. ~ 02.</p>
                </div>
            </section>
            <section>
                <ul className='slideWrap'>
                    <li className='slideImg'>
                        <img src={main} alt='slide image' />
                    </li>
                </ul>
            </section>
            <section className='info'>
                <p>
                    <span>URL: </span>
                    <a href='https://record-lilac.vercel.app/introduce' target='_blank'>https://record-lilac.vercel.app/introduce</a>
                </p>
                <p>
                    <span>소개: </span>
                    내가 다녀온 장소, 맛집 등을 기록하는 웹사이트 입니다.
                </p>
                <p>
                    <span>개발 인원: </span>
                    1인
                </p>
                <p>
                    <span>담당 역할: </span>
                    기획, 프론트 개발, 퍼블리싱
                </p>
                <p>
                    <span>사용 기술: </span>
                    Next, Supabase, Typescript, Zustand, vercel, Restful API, Open API(Naver Map, Search)
                </p>
            </section>
            <section>
                <h3>프로젝트 특징</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. Next App Router 
                    </div>
                    <ul>
                        <li>Group Routes를 통해 로그인 전, 후 페이지 관리</li>
                        <li>Dynamic Routes를 통한 동적 페이지 로드</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. Supabase 사용
                    </div>
                    <ul>
                        <li>Supabase 제공 Auth.user를 통한 이용자 관리</li>
                        <li>supabase 테이블 생성 후 route로 연결하여 API 통신</li>
                        <li>real-time을 이용하여 테이블 변화 시 화면에 바로 적용</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        3. Zustand를 사용한 상태관리
                    </div>
                    <ul>
                        <li>장소와 메뉴 테이블 각각 생성 후 zustand로 리스트 호출 후 상태 관리</li>
                        <li>리스트 추가 모달에서 state 변화 감지 후 set을 통해 지도 컴포넌트에 전달</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>주요 기능</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. 회원가입 및 로그인 등 회원 관리
                    </div>
                    <ul>
                        <li>supabase 제공 기능을 통하여 client 생성 후 로그인 및 회원가입 구현</li>
                        <li>supabase의 Oauth 제공 기능을 통해 카카오톡 로그인 구현</li>
                        <li>저장된 db의 user_id에 따라 각 회원에 맞는 페이지 로드</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. 리스트 추가, 수정, 삭제
                    </div>
                    <ul>
                        <li>db에 저장 후 Restful API로 활용</li>
                        <li>get, post, put, delete 메서드 사용</li>
                        <li>리스트 추가 시 naver search API를 통해 장소 검색 구현</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        3. 리스트 정렬 및 분류
                    </div>
                    <ul>
                        <li>가게명 혹은 별점순으로 order by</li>
                        <li>카테고리별 리스트 호출</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>추가 예정 기능</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. storage를 이용하여 이미지 저장
                    </div>
                </div>
            </section>

            <section>
                <h3>트러블 슈팅</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. 지도 호출 에러
                    </div>
                    <ul>
                        <li>문제: 새로고침을 하지 않으면 처음 로드 시 지도가 뜨지 않음</li>
                        <li>해결: 넥스트 지원 함수 확인 후 onLoad에서 onReady로 변경</li>
                        <li><a href='https://deer-develope-diary.tistory.com/40' target='_blank'>블로그 포스팅 바로가기</a></li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. 반복되는 geocode API 호출
                    </div>
                    <ul>
                        <li>문제: 상태 변화가 있을 때, 리스트 좌표 구하기를 위한 geocode가 중복 실행됨</li>
                        <li>해결: 페이지 로드 후 리스트가 추가 시 검색 할 때, 저장 될 때에만 geocode API를 호출하게 변경</li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        3. Vercel 배포 오류
                    </div>
                    <ul>
                        <li>문제: supabase는 잘 호출 되나 네이버 api는 호출 되지 않음</li>
                        <li>해결: 네이버 api 홈페이지에서 api 설정 시 지원하는 url에 vercel 추가</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>프로젝트를 통해 배운점</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. Next 및 App Router에 대해
                    </div>
                    <ul>
                        <li>
                            1. 인터넷 강의로 볼 때와 달리 폴더 구조 중요성에 대해 알게 되었다. 
                            알아서 경로를 정해주는 편안함이 있지만, 오류가 나거나 꼬이지 않게 폴더 구조에 대해 신경을 많이 썼다.
                        </li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. 상태관리의 중요성
                    </div>
                    <ul>
                        <li>
                            1. zustand로 상태를 관리하여 후에 추가 된 리스트에서 위치 보기 기능 구현이 쉬워졌다.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Record;