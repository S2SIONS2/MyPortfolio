import './ModalCustom.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import main from '../assets/TagWords.png'

const TagWords:React.FC = () => {
    return (
        <div className='TagWords PjModal'>
            <ul className='iconWrap'>
                <li className='web'>
                    <a href='http://tagwords.sionsdiary.site' target='_blank'>
                        <FontAwesomeIcon icon={faPager} />
                    </a>
                </li>
                <li className='gitHub'>
                    <a href='https://github.com/S2SIONS2/TagWords' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li> 
            </ul>
            <section className='row align-items-center justify-content-center pt-3 pb-3'>
                <div className='titleWrap'>
                    <h2 className='text-center'>TagWords</h2>
                    <p className='text-center'>2024. 06. 07 ~ 06. 21</p>
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
                    <a href='http://tagwords.sionsdiary.site' target='_blank'>http://tagwords.sionsdiary.site</a>
                </p>
                <p>
                    <span>소개: </span>
                    React.js로 프로젝트를 구성하고 국립국어원 API를 이용한 끝말잇기 게임입니다.
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
                    React, Css, Axios, API
                </p>
            </section>
            <section>
                <h3>프로젝트 특징 및 기능</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. 3글자 쿵쿵따
                    </div>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. 중복된 단어의 입력 제한
                    </div>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        3. 사전적 의미가 없는 무의미한 단어 입력 불가능
                    </div>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        4. 상단 채팅에 단어 기록과 뜻 표시
                    </div>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        5. Ctrl + R 버튼 입력 시 게임 초기화
                    </div>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        6. 60초 타이머 기능
                    </div>
                </div>
            </section>

            <section>
                <h3>트러블 슈팅</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. API  CORS Error 발생
                    </div>
                    <ul>
                        <li>문제: Proxy 서버를 이용하여 요청 url 경로를 재 작성</li>
                        <li><a href='https://deer-develope-diary.tistory.com/18' target='_blank'>블로그 바로가기</a></li>
                    </ul>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. Javascript 비동기 방식으로 인한 API 무 응답
                    </div>
                    <ul>
                        <li>문제: 개발자 도구의 network 탭에서는 API가 연결이 된 것을 확인 하였으나 화면에는 값이 호출 되지 않음</li>
                        <li>사유: 자바스크립트의 비동기적 처리 때문에 API 호출 전에 함수가 먼저 실행 됨</li>
                        <li>해결: Async/Await를 사용하여 동기 방식으로 API와 함수를 호출함으로써 문제를 해결함.</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>프로젝트를 통해 배운점</h3>
                <div className='list'>
                    <div className='listTitle'>
                        1. API 호출 법과 Access-Control-Allow-Origin 에러 처리 방법
                    </div>
                </div>
                <div className='list'>
                    <div className='listTitle'>
                        2. 자바스크립트의 싱글 Thread 처리 방식과 비동기 호출에 대한 오류 발생 및 해결 방법
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TagWords;